import { WordService } from './word.service';
import { TranslateService } from "./translate.service";

describe('TranslateService without Angular testing support', () => {
    let translateService: TranslateService;
  
    it('#getValue should return faked value from a fake object', () => {
      const fake =  { getWord: () => 'fake value' };
      translateService = new TranslateService(fake as WordService);
      expect(translateService.getTranslation("hello")).toBe('fake valuehello');
    });
  
    it('#getValue should return stubbed value from a spy', () => {
      // create `getValue` spy on an object representing the ValueService
      const valueServiceSpy =
        jasmine.createSpyObj('WordService', ['getWord']);
  
      // set the value to return when the `getValue` spy is called.
      const stubValue = 'stub value';
      valueServiceSpy.getWord.and.returnValue(stubValue);
  
      translateService = new TranslateService(valueServiceSpy);
  
      expect(translateService.getTranslation("ss"))
        .toBe('stub valuess');
      expect(valueServiceSpy.getWord.calls.count())
        .toBe(1, 'spy method was called once');
      expect(valueServiceSpy.getWord.calls.mostRecent().returnValue)
        .toBe(stubValue);
    });
  });