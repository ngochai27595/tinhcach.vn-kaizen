import { Injectable } from '@nestjs/common';

const fs = require('fs').promises;
const readline = require('readline');
const { google } = require('googleapis');
const { dirname } = require('path');
var androidpublisher = google.androidpublisher('v3');
const appDir = dirname(require.main.filename);
const SCOPES = ['https://www.googleapis.com/auth/androidpublisher'];
const TOKEN_PATH = 'tokenPath.json';

@Injectable()
export class GooglApisService {
  constructor() {}

  getAccessToken = (oAuth2Client: any, callback: any) => {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code: any) => {
      rl.close();
      oAuth2Client.getToken(code, (err: any, token: any) => {
        if (err) return console.error('Error retrieving access token', err);
        oAuth2Client.setCredentials(token);
        // Store the token to disk for later program executions
        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err: any) => {
          if (err) return console.error(err);
          console.log('Token stored to', TOKEN_PATH);
        });
        callback(oAuth2Client);
      });
    });
  };

  authorize = async (credentials: any, tokenPath: string) => {
    const { client_secret, client_id, redirect_uris } = credentials.web;
    const oAuth2Client = new google.auth.OAuth2(
      client_id,
      client_secret,
      redirect_uris[0],
    );
    try {
      const token = await fs.readFile(`${appDir}/${tokenPath}.json`);
      oAuth2Client.setCredentials(JSON.parse(token));
      return { status: true, oAuth2Client };
    } catch (error) {
      return { status: false, oAuth2Client };
    }
  };

  getReviewFromGoogle = async (auth: any, packageName: string, params: any) => {
    try {
      const resp = await androidpublisher.reviews.get({
        auth,
        packageName,
        reviewId: params.reviewId,
      });
      return { status: true, data: resp.data };
    } catch (error) {
      return { status: false };
    }
  };

  getReviewsFromGoogle = async (auth: any, packageName: string) => {
    try {
      const resp = await androidpublisher.reviews.list({
        auth,
        packageName,
      });
      return { status: true, data: resp.data };
    } catch (error) {
      return { status: false };
    }
  };

  replyReviewGoogle = async (auth: any, packageName: string, params: any) => {
    try {
      const resp = await androidpublisher.reviews.reply({
        auth,
        packageName: packageName,
        reviewId: params.reviewId,
        requestBody: { replyText: params.text },
      });
      return { status: true, data: resp.data };
    } catch (error) {
      return { status: false };
    }
  };

  async curlReplyReview(
    reviewId: any,
    config: {
      packageName: string;
      tokenPath: string;
      clientPath: string;
    },
    text: string,
  ) {
    try {
      const content = await fs.readFile(`${appDir}/${config.clientPath}.json`);
      const auth = await this.authorize(JSON.parse(content), config.tokenPath);
      if (auth.status) {
        const replyyData = await this.replyReviewGoogle(
          auth.oAuth2Client,
          config.packageName,
          {
            reviewId,
            text,
          },
        );
        return replyyData;
      } else {
        return 'Need get token';
      }
    } catch (error) {
      return -1;
    }
  }

  async curlReviews(config: {
    packageName: string;
    tokenPath: string;
    clientPath: string;
  }) {
    try {
      const content = await fs.readFile(`${appDir}/${config.clientPath}.json`);
      const auth = await this.authorize(JSON.parse(content), config.tokenPath);
      if (auth.status) {
        const reviewData = await this.getReviewsFromGoogle(
          auth.oAuth2Client,
          config.packageName,
        );
        return reviewData;
      } else {
        return 'Need get token';
      }
    } catch (error) {
      return -1;
    }
  }

  async curlReview(
    reviewId: any,
    config: {
      packageName: string;
      tokenPath: string;
      clientPath: string;
    },
  ) {
    try {
      const content = await fs.readFile(`${appDir}/${config.clientPath}.json`);
      const auth = await this.authorize(JSON.parse(content), config.tokenPath);
      if (auth.status) {
        const reviewData = await this.getReviewFromGoogle(
          auth.oAuth2Client,
          config.packageName,
          {
            reviewId,
          },
        );
        return reviewData;
      } else {
        return 'Need get token';
      }
    } catch (error) {
      return -1;
    }
  }
}
