import { Injectable } from '@angular/core';
import { data } from './data';
@Injectable()
export class DataService {
  constructor() {}

  getData() {
    return data;
  }
}
