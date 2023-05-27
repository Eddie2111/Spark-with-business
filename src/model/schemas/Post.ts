import mongoose from 'mongoose';
import { Document, model, Schema } from 'mongoose';

const currentDate = new Date();

interface PostModel extends Document {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  serial: string;
  author?: string;
  title: string;
  description: string;
  image: string;
  date: string;
  tags: string[];
  likes: number;
  comments: Record<string, any>;
  shares: number;
  link: string;
}

const postSchema = new Schema<PostModel>({
  createdAt: { type: Date, default: () => currentDate },
  updatedAt: { type: Date, default: () => currentDate },
  serial: { type: String, unique: true },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: String, required: true },
  tags: { type: [String], required: true },
  likes: { type: Number, default: 0 },
  comments: { type: Map, of: Schema.Types.Mixed },
  shares: { type: Number, default: 0 },
  link: { type: String, required: true },
});

const Post = mongoose.model('Post', postSchema) || mongoose.models.Post;

export default Post;