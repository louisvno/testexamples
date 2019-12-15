import { Injectable } from '@angular/core';
import { WordService } from './word.service';

@Injectable()
export class TranslateService {

  constructor(private wordService: WordService) {}

  getTranslation(input: string){

    return this.wordService.getWord() + input;
  }
}