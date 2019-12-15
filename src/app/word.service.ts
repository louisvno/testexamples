import { Injectable } from '@angular/core';

@Injectable()
export class WordService {

  constructor() { }

  getWord(){
    return "Hello";
  }
}