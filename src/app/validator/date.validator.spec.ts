import {dateValidator} from "./date.validator";
import {FormControl} from "@angular/forms";

describe('DateValidator', () => {
  it('Should return true for a date in the correct format (DD-MM-YYYY HH:MM)', () => {
    // Arrange
    let validDate = '31-12-2019 12:59';
    const validDateFormControl = new FormControl(validDate);

    // Act
    const result = dateValidator(validDateFormControl);

    // Assert
    expect(result).toEqual({
      validDate: true
    });
  });

  it('Should return true for a 24-hour date', () => {
    // Arrange
    let validDate = '31-12-2019 23:59';
    const validDateFormControl = new FormControl(validDate);

    // Act
    const result = dateValidator(validDateFormControl);

    // Assert
    expect(result).toEqual({
      validDate: true
    });
  });

  it('Should return false for an invalid format (MM-DD-YYYY HH:MM)', () => {
    // Arrange
    let validDate = '12-31-2019 23:59';
    const validDateFormControl = new FormControl(validDate);

    // Act
    const result = dateValidator(validDateFormControl);

    // Assert
    expect(result).toEqual({
      validDate: false
    });
  });

  it('Should return false when the date contains a non-existing day', () => {
    // Arrange
    let validDate = '32-12-2019 23:59';
    const validDateFormControl = new FormControl(validDate);

    // Act
    const result = dateValidator(validDateFormControl);

    // Assert
    expect(result).toEqual({
      validDate: false
    });
  });

  it('Should return false when the date contains a non-existing month', () => {
    // Arrange
    let validDate = '31-13-2019 23:59';
    const validDateFormControl = new FormControl(validDate);

    // Act
    const result = dateValidator(validDateFormControl);

    // Assert
    expect(result).toEqual({
      validDate: false
    });
  });

  it('Should return false when the date contains a non-existing hour', () => {
    // Arrange
    let validDate = '31-12-2019 24:59';
    const validDateFormControl = new FormControl(validDate);

    // Act
    const result = dateValidator(validDateFormControl);

    // Assert
    expect(result).toEqual({
      validDate: false
    });
  });

  it('Should return false when the date contains a non-existing minute', () => {
    // Arrange
    let validDate = '31-12-2019 23:60';
    const validDateFormControl = new FormControl(validDate);

    // Act
    const result = dateValidator(validDateFormControl);

    // Assert
    expect(result).toEqual({
      validDate: false
    });
  });
});
