export class Person {
  pId: number;
  firstname: string;
  lastname: string;
  email: string;
  tel: string;
  opinion: string;

  constructor(pId: number, firstname: string, lastname: string, email: string, tel: string, opinion: string) {
    this.pId = pId;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.tel = tel;
    this.opinion = opinion;
  }
}
