import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Comments {
  @PrimaryColumn({ length: 36 })
  id: string;

  @Column({ length: 255 })
  reviewId: string;

  @Column({ default: '' })
  lastModified: string;

  @Column({ default: '' })
  text: string;

  @Column({ length: 10, default: '' })
  reviewerLanguage: string;

  @Column({ length: 255, default: '' })
  device: string;

  @Column({ default: 0 })
  osVerion: number;

  @Column({ default: 0 })
  rate: number;

  @Column({ default: 0 })
  type: number;

  @Column({ default: '' })
  deviceMetadata: string;

  @Column({ default: '' })
  createdBy: string;
}
