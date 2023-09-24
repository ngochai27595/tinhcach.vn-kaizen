import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewsService } from './reviews.service';
import { GooglApisService } from '../googleApis/googleApis.service';
import { ReviewsController } from './reviews.controller';
import { Reviews as ReviewEntity } from './review.entity';
import { Comments as CommentEntity } from './comment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReviewEntity, CommentEntity]),
    HttpModule,
  ],
  providers: [ReviewsService, GooglApisService],
  controllers: [ReviewsController],
})
export class ReviewsModule {}
