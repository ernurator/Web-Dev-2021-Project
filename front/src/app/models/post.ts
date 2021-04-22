import {User} from './user';
import {Topic} from './topic';

export interface Post {
  id: number;
  header: string;
  text: string;
  // TODO find date datatype
  date: object;
  likes: number;
  author: User;
  topic: Topic;
}
