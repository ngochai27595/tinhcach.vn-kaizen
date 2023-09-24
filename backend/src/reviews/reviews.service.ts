import { Injectable } from '@nestjs/common';
import { InjectRepository, InjectDataSource } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Reviews as ReviewEntity } from './review.entity';
import { Comments as CommentEntity } from './comment.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectDataSource() private readonly dataSource: DataSource,
    @InjectRepository(ReviewEntity)
    private reviewsRepository: Repository<ReviewEntity>,
    @InjectRepository(CommentEntity)
    private commentsRepository: Repository<CommentEntity>,
  ) {}

  async get(skip: number = 0, take: number = 10): Promise<any> {
    return this.dataSource.query(
      `SELECT * FROM reviews ORDER BY updated_at DESC LIMIT ${take} OFFSET ${skip}`,
    );
  }

  async getById(id: string): Promise<any> {
    return await this.reviewsRepository.findOneBy({ id: id });
  }

  async getComments(reviewId: string): Promise<any> {
    return this.dataSource.query(
      `SELECT * FROM comments WHERE reviewId = '${reviewId}'`,
    );
  }

  async countReview(condition: any) {
    return await this.reviewsRepository.count(condition);
  }

  async countComment(condition: any) {
    return await this.commentsRepository.count(condition);
  }

  async addReview(review: ReviewEntity) {
    return await this.reviewsRepository.insert(review);
  }

  async addComment(comment: CommentEntity) {
    return await this.commentsRepository.insert(comment);
  }

  async updateComment(comment: CommentEntity) {
    return await this.commentsRepository.save(comment);
  }
}
