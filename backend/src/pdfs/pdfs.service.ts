import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not, Like } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Pdfs as PdfEntity } from './pdf.entity';

const xpath = require('xpath-html');

@Injectable()
export class PdfsService {
  constructor(
    @InjectRepository(PdfEntity)
    private pdfsRepository: Repository<PdfEntity>,
    private readonly httpService: HttpService,
  ) {}

  async update(pdf: PdfEntity) {
    return await this.pdfsRepository.save(pdf);
  }

  async get(
    condition: any,
    skip: any = 0,
    take: any = 1,
    select: any = ['id', 'title'],
    order: any = { file_url: 'DESC' },
  ): Promise<PdfEntity[]> {
    return await this.pdfsRepository.find({
      select,
      where: [condition],
      skip,
      take,
      order,
    });
  }

  async getById(id: string): Promise<PdfEntity> {
    return await this.pdfsRepository.findOneBy({ id: id });
  }

  async add(pdf: PdfEntity) {
    return await this.pdfsRepository.insert(pdf);
  }

  async count(condition: any) {
    return await this.pdfsRepository.count(condition);
  }

  async updateThumb() {
    const pdfs = await this.pdfsRepository.find({
      select: ['drive', 'id', 'title', 'source'],
      where: [
        {
          status: 1,
          drive: Not(''),
          thumb: '',
          source: 'dtv',
          title: Like('%pdf%'),
        },
      ],
      skip: 0,
      take: 1,
    });
    let pdf: any;
    if (pdfs.length !== 0) {
      pdf = pdfs[0];
    } else {
      const pdfs = await this.pdfsRepository.find({
        select: ['drive', 'id', 'title', 'source'],
        where: [{ status: 1, drive: Not(''), thumb: '', source: Not('dtv') }],
        skip: 0,
        take: 1,
      });
      if (pdfs.length !== 0) {
        pdf = pdfs[0];
      }
    }
    if (pdf) {
      console.log(pdf);
      var axios = require('axios');
      var FormData = require('form-data');
      var data = new FormData();
      data.append('image', `https://lh3.googleusercontent.com/d/${pdf.drive}`);

      console.log(data);
      var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.imgur.com/3/image',
        headers: {
          Authorization: 'Client-ID b6b3011ee9feaa3',
          Cookie: 'IMGURSESSION=339509396a48e67f242f2df09554f8c8; _nc=1',
          ...data.getHeaders(),
        },
        data: data,
      };

      try {
        const res = await axios(config);
        if (res?.data?.data?.link) {
          await this.pdfsRepository.save({ ...pdf, thumb: res.data.data.link });
          return res.data.data.link;
        } else {
          return '';
        }
      } catch (error) {
        console.log(error.response.data);
        await this.pdfsRepository.save({ ...pdf, thumb: 'res.data.data.link' });
        return 'res.data.data.link';
      }
    } else {
      return '';
    }
  }

  async curlTailieu(id: any) {
    const url = `https://tailieu.vn/doc/tieu-giua-chinh-tri-va-kinh-te-tr-${id}.html`;
    console.log(`${id}___${url}`);
    const headersRequest = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await this.httpService
        .get(url, {
          headers: headersRequest,
        })
        .toPromise();
      let title: any = '';
      let page: any = 0;
      let file_type: any = '';
      try {
        const titleNode = xpath
          .fromPageSource(response.data)
          .findElement('/html/body/div/div/div/div/div/div/h1');
        title = titleNode.childNodes[0].data;
      } catch (error) {}
      try {
        const pageNode = xpath
          .fromPageSource(response.data)
          .findElement("//span[@class='cred'][last()]");
        page = pageNode.childNodes[0].data;
      } catch (error) {}
      try {
        const filetypeNode = xpath
          .fromPageSource(response.data)
          .findElement('//*[@id="info"]/div[1]/div/div[4]/div/p/span[3]');
        file_type = filetypeNode.childNodes[0].data;
      } catch (error) {}

      if (title !== '') {
        const pdf: any = {
          id: uuidv4(),
          source: 'tailieu',
          title: title.substring(0, 254),
          url: id,
          created_at: Math.floor(Date.now() / 1000),
          page,
          file_url: id,
          id_source: parseInt(id),
          file_type,
        };
        const totalPdf = await this.pdfsRepository.countBy({
          title: pdf.title,
          file_url: pdf.file_url,
        });
        if (totalPdf === 0) {
          this.pdfsRepository.insert(pdf);
        }
        return { status: true, data: pdf };
      } else {
        const pdf: any = {
          id: uuidv4(),
          source: 'tailieu',
          title: '',
          url: id,
          created_at: Math.floor(Date.now() / 1000),
          page: 0,
          file_url: id,
          id_source: parseInt(id),
        };
        this.pdfsRepository.insert(pdf);
        return { status: false };
      }
    } catch (error) {
      const pdf: any = {
        id: uuidv4(),
        source: 'tailieu',
        title: '',
        url: id,
        created_at: Math.floor(Date.now() / 1000),
        page: 0,
        file_url: id,
        id_source: parseInt(id),
      };
      this.pdfsRepository.insert(pdf);
      return { status: false };
    }
  }

  async curlDtv(url: string) {
    const headersRequest = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await this.httpService
        .get(url, {
          headers: headersRequest,
        })
        .toPromise();

      try {
        const nodes = xpath
          .fromPageSource(response.data)
          .findElements(
            '/html/body/section/div/div/div/div/div/div/div/ul/li/div/h2/a',
          );
        const rs = nodes.map((node: any) => {
          try {
            const pdf: any = {
              id: uuidv4(),
              source: 'dtv',
              title: node.getAttribute('title'),
              url: node.getAttribute('href'),
              created_at: Math.floor(Date.now() / 1000),
            };
            return pdf;
          } catch (error) {
            console.log(error);
          }
        });
        return rs;
      } catch (error) {
        console.log(error);
        return [];
      }
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async curlDtvFile(url: string) {
    const headersRequest = {
      'Content-Type': 'application/json',
    };
    const data: any = [];

    try {
      const response = await this.httpService
        .get(url, {
          headers: headersRequest,
        })
        .toPromise();

      try {
        const nodes = xpath
          .fromPageSource(response.data)
          .findElements('//div[@id="download"]/table/tbody/tr/td/a');
        nodes.map((node: any) => {
          try {
            if (node.getAttribute('title').trim() != '') {
              data.push({
                file: node.getAttribute('href'),
                title: node.getAttribute('title'),
              });
            }
          } catch (error) {
            console.log('error', url, error);
          }
        });
        return data;
      } catch (error) {
        console.log('error', url, error);
        return data;
      }
    } catch (error) {
      console.log('error', url, error);
      return data;
    }
  }

  async curlThi247(type: any = 0, url: any = 'https://thi247.com/') {
    if (type === 0) {
      url = 'https://thi247.com/';
    }
    const headersRequest = {
      'Content-Type': 'application/json',
    };

    const xpathRegex =
      type === 0
        ? '/html/body/div/div/div/main/article/div/div/div/div/div/section/div/div/div/div/div/div/div/ul/li/a'
        : '/html/body/div/div/div/main/div/article/div//header/h2/a';

    try {
      const response = await this.httpService
        .get(url, {
          headers: headersRequest,
        })
        .toPromise();

      try {
        const nodes = xpath
          .fromPageSource(response.data)
          .findElements(xpathRegex);
        const rs = nodes.map((node: any) => {
          try {
            const pdf: any = {
              id: uuidv4(),
              source: 'thi247',
              title: node.childNodes[0].data,
              url: node.getAttribute('href'),
              created_at: Math.floor(Date.now() / 1000),
            };
            return pdf;
          } catch (error) {}
        });
        return rs;
      } catch (error) {
        return [];
      }
    } catch (error) {
      return [];
    }
  }

  async curlThi247File(url: any) {
    const headersRequest = {
      'Content-Type': 'application/json',
    };
    try {
      const response = await this.httpService
        .get(url, {
          headers: headersRequest,
        })
        .toPromise();

      try {
        const node = xpath
          .fromPageSource(response.data)
          .findElement('/html/body/div/div/div/main/article/div/div/center/a');
        return { status: true, data: node.getAttribute('href') };
      } catch (error) {
        return { status: false };
      }
    } catch (error) {
      return { status: false };
    }
  }

  async curlToanMath(
    y: any,
    m: any,
    page: any,
    domain: any = 'https://toanmath.com',
  ) {
    let url = domain + '/' + y + '/' + m + '/page/' + page;
    const headersRequest = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await this.httpService
        .get(url, {
          headers: headersRequest,
        })
        .toPromise();

      try {
        const nodes = xpath
          .fromPageSource(response.data)
          .findElements('/html/body/div/div/div/div/div/div/article/h3/a');
        const rs = nodes.map((node: any) => {
          try {
            const pdf: any = {
              id: uuidv4(),
              source: 'toanmath',
              title: node.getAttribute('title'),
              url: node.getAttribute('href'),
              created_at: Math.floor(Date.now() / 1000),
            };
            return pdf;
          } catch (error) {}
        });
        return rs;
      } catch (error) {
        return [];
      }
    } catch (error) {
      return [];
    }
  }

  async curlToanMathFile(url: any) {
    const headersRequest = {
      'Content-Type': 'application/json',
    };
    try {
      const response = await this.httpService
        .get(url, {
          headers: headersRequest,
        })
        .toPromise();

      try {
        const node = xpath
          .fromPageSource(response.data)
          .findElement('/html/body/div/div/div/div/article/div/center/a');
        return { status: true, data: node.getAttribute('href') };
      } catch (error) {
        return { status: false };
      }
    } catch (error) {
      return { status: false };
    }
  }
}
