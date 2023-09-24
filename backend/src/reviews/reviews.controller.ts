import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Reviews as ReviewEntity } from './review.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ReviewsService } from './reviews.service';
import { GooglApisService } from '../googleApis/googleApis.service';

@Controller('reviews')
export class ReviewsController {
  constructor(
    @InjectRepository(ReviewEntity)
    private service: ReviewsService,
    private googleApisService: GooglApisService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async gets(@Query() q: any) {
    const page = q?.page || 1;
    const take: any = 10;
    const skip: any = (page - 1) * take;
    const total = await this.service.countReview({});
    const reviews = await this.service.get(skip, take);
    const data: any = await Promise.all(
      reviews.map(async (review: any) => {
        const comments = await this.service.getComments(review.id);
        return { ...review, comments };
      }),
    );
    return { data, total, page };
  }

  @Get('curls')
  async curls() {
    const config = {
      packageName: 'com.os.fruitmasterpro',
      tokenPath: 'fruitmasterproToken',
      clientPath: 'fruitmasterproClient',
    };
    const resp: any = await this.googleApisService.curlReviews(config);
    if (resp.status) {
      resp.data.reviews.map(async (review: any, index: number) => {
        console.log('index', index, review);
        const totalReview = await this.service.countReview({
          id: review.reviewId,
        });
        try {
          review.comments.map(async (comment: any, index: number) => {
            if (comment.userComment) {
              const data = comment.userComment;
              const total = await this.service.countComment({
                reviewId: review.reviewId,
                type: 0,
              });
              if (totalReview === 0) {
                console.log('Add review');
                await this.service.addReview({
                  id: review.reviewId,
                  authorName: review.authorName,
                  os: 'Android',
                  created_at: data?.lastModified?.seconds,
                  updated_at: data?.lastModified?.seconds,
                  packageName: config.packageName,
                });
              }
              if (total === 0) {
                console.log('Add Comment U', data);
                try {
                  await this.service.addComment({
                    id: uuidv4(),
                    reviewId: review.reviewId,
                    type: 0,
                    lastModified: data?.lastModified?.seconds,
                    text: data?.text.replace(/[\u0800-\uFFFF]/g, '').trim(),
                    reviewerLanguage: data?.reviewerLanguage,
                    device: data?.device,
                    osVerion: data?.androidOsVersion,
                    rate: data?.starRating,
                    deviceMetadata: JSON.stringify(data?.deviceMetadata),
                    createdBy: '',
                  });
                } catch (error) {
                  console.log('Err 0', data?.text, error);
                }
              }
            }
            if (comment.developerComment) {
              const total = await this.service.countComment({
                reviewId: review.reviewId,
                type: 1,
              });
              if (total === 0) {
                console.log('Add Comment D');
                const data = comment.developerComment;
                try {
                  await this.service.addComment({
                    id: uuidv4(),
                    reviewId: review.reviewId,
                    type: 1,
                    lastModified: data?.lastModified?.seconds,
                    text: data?.text.replace(/[\u0800-\uFFFF]/g, '').trim(),
                    reviewerLanguage: data?.reviewerLanguage,
                    device: data?.device,
                    osVerion: data?.androidOsVersion,
                    rate: data?.starRating,
                    deviceMetadata: JSON.stringify(data?.deviceMetadata),
                    createdBy: '',
                  });
                } catch (error) {
                  console.log('Err 2', data?.text);
                }
              }
            }
          });
        } catch (error) {}
      });
    }
    return resp;
  }

  @Get('curls/:id')
  curl(@Param() params: any) {
    const config = {
      packageName: 'com.os.fruitmasterpro',
      tokenPath: 'fruitmasterproToken',
      clientPath: 'fruitmasterproClient',
    };
    return this.googleApisService.curlReview(params.id, config);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async get(@Param() params: any) {
    const review: any = await this.service.getById(params.id);
    const comments = await this.service.getComments(params.id);
    return { ...review, comments };
  }

  @UseGuards(JwtAuthGuard)
  @Post('reply/:id')
  async reply(@Param() params: any, @Body() data: any, @Request() req) {
    if (!data.text) {
      return -1;
    }
    const config = {
      packageName: 'com.os.fruitmasterpro',
      tokenPath: 'fruitmasterproToken',
      clientPath: 'fruitmasterproClient',
    };
    const resp: any = await this.googleApisService.curlReplyReview(
      params.id,
      config,
      data.text,
    );
    const comments: any = await this.service.getComments(params.id);
    if (comments.findIndex((c: any) => c.type == 1) == -1) {
      try {
        this.service.addComment({
          id: uuidv4(),
          reviewId: params.id,
          type: 1,
          lastModified: resp.data?.result?.lastEdited?.seconds,
          text: resp.data?.result?.replyText,
          reviewerLanguage: '',
          device: '',
          osVerion: 0,
          rate: 0,
          deviceMetadata: '',
          createdBy: req.user.username,
        });
      } catch (error) {}
    } else {
      try {
        const comment = comments.find((c: any) => c.type == 1);
        this.service.updateComment({
          ...comment,
          lastModified: resp.data?.result?.lastEdited?.seconds,
          text: resp.data?.result?.replyText,
        });
      } catch (error) {}
    }
    return resp;
  }
}
