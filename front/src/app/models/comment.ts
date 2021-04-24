import {User} from './user';
import {Post} from './post';

export interface Comment {
  id: number;
  text: string;
  date: Date;
  likes: number;
  author: User;
  post: Post;
}
