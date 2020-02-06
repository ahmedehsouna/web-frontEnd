import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ValidateService {
  constructor() {}

  validateRegister(user) {
    return user.password || user.firstName || user.lastName || user.email;
  }
  validateEmail(email) {
    const emailChackingRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailChackingRe.test(email);
  }
}
