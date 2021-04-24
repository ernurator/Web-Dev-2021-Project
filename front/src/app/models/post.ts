import {User} from './user';
import {Topic} from './topic';

export interface Post {
  id: number;
  header: string;
  text: string;
  date: Date;
  likes: number;
  author: User;
  topic: Topic;
}
