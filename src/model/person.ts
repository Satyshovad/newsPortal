export class Person {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  tel: string;

  constructor(id: number, firstname: string, lastname: string, email: string, tel: string) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.tel = tel;
  }
}
