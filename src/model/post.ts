export class Post {
  constructor(postId: string, img: string, title: string, content: string) {
    this.postId = postId;
    this.img = img;
    this.title = title;
    this.content = content;
  }

  postId: string;
  img: string;
  title: string;
  content: string;
}
