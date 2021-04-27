export class Post {
  constructor(postID: string, picture: string, name: string, title: string) {
    this.postID = postID;
    this.picture = picture;
    this.name = name;
    this.title = title;
  }

  postID: string;
  picture: string;
  name: string;
  title: string;
}
