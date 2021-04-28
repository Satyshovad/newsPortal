export class Post {
  constructor(id: string, img: string, title: string, content: string) {
    this.id = id;
    this.img = img;
    this.title = title;
    this.content = content;
  }

  id: string;
  img: string;
  title: string;
  content: string;
}
