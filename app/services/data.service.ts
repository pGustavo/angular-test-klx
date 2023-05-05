import { Injectable } from '@angular/core';
import { data } from './data';
import { users } from './data';
@Injectable()
export class DataService {
  constructor() {}

  getData() {
    return data;
  }

  getUsers() {
    return users;
  }
}
