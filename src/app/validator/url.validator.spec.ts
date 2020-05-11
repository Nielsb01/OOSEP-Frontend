import {FormControl} from "@angular/forms";
import {urlValidator} from "./url.validator";

describe('UrlValidator', () => {

  it('Should return false for url which does not start with http or https', () => {
    // Arrange
    let nonHttpUrl = 'missing-scheme-url.com';
    let nonHttpUrlFormControl = new FormControl(nonHttpUrl);

    // Act
    let result = urlValidator(nonHttpUrlFormControl);

    // Assert
    expect(result).toEqual({
      validUrl: false
    });
  });

  it('Should return true for url which starts with http', () => {
    // Arrange
    let httpUrl = 'http://domain.com';
    let httpUrlFormControl = new FormControl(httpUrl);

    // Act
    let result = urlValidator(httpUrlFormControl);

    // Assert
    expect(result).toEqual({
      validUrl: true
    });
  });

  it('Should return true for url which starts with https', () => {
    // Arrange
    let httpsUrl = 'https://domain.com';
    let httpsUrlFormControl = new FormControl(httpsUrl);

    // Act
    let result = urlValidator(httpsUrlFormControl);

    // Assert
    expect(result).toEqual({
      validUrl: true
    });
  })
});
