export class Interview {
  constructor(interId: string, photo: string, name: string, title: string) {
    this.interId = interId;
    this.photo = photo;
    this.name = name;
    this.title = title;
  }

  interId: string;
  photo: string;
  name: string;
  title: string;
}
