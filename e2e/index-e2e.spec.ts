import {browser} from 'protractor';
import {screenshot} from './screenshot';

describe('hello, protractor', () => {
  describe('index', () => {
    browser.get('/');
    it('should have a title', async () => {
      expect(await browser.getTitle()).toBe('Ng-Extra');
      screenshot('hello protractor');
    });
  });
});
