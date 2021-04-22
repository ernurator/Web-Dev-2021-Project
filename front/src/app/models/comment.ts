import {User} from './user';
import {Post} from './post';

export interface Comment {
  id: number;
  text: string;
  // TODO find date datatype
  date: object;
  likes: number;
  author: User;
  post: Post;
}
