import {dateValidator} from "./date.validator";
import {FormControl} from "@angular/forms";

describe('DateValidator', () => {
  it('Should return null for a date in the correct format (DD-MM-YYYY HH:MM)', () => {
    // Arrange
    const validDate = '31-12-2019 12:59';
    const validDateFormControl = new FormControl(validDate);

    // Act
    const result = dateValidator(validDateFormControl);

    // Assert
    expect(result).toBeNull();
  });

  it('Should return null for a 24-hour date', () => {
    // Arrange
    const validDate = '31-12-2019 23:59';
    const validDateFormControl = new FormControl(validDate);

    // Act
    const result = dateValidator(validDateFormControl);

    // Assert
    expect(result).toBeNull();
  });

  it('Should return validation errors for an invalid format (MM-DD-YYYY HH:MM)', () => {
    // Arrange
    const validDate = '12-31-2019 23:59';
    const validDateFormControl = new FormControl(validDate);

    // Act
    const result = dateValidator(validDateFormControl);

    // Assert
    expect(result).toEqual({
      validDate: false
    });
  });

  it('Should return validation errors when the date contains a non-existing day', () => {
    // Arrange
    const validDate = '32-12-2019 23:59';
    const validDateFormControl = new FormControl(validDate);

    // Act
    const result = dateValidator(validDateFormControl);

    // Assert
    expect(result).toEqual({
      validDate: false
    });
  });

  it('Should return validation errors when the date contains a non-existing month', () => {
    // Arrange
    const validDate = '31-13-2019 23:59';
    const validDateFormControl = new FormControl(validDate);

    // Act
    const result = dateValidator(validDateFormControl);

    // Assert
    expect(result).toEqual({
      validDate: false
    });
  });

  it('Should return validation errors when the date contains a non-existing hour', () => {
    // Arrange
    const validDate = '31-12-2019 24:59';
    const validDateFormControl = new FormControl(validDate);

    // Act
    const result = dateValidator(validDateFormControl);

    // Assert
    expect(result).toEqual({
      validDate: false
    });
  });

  it('Should return validation errors when the date contains a non-existing minute', () => {
    // Arrange
    const validDate = '31-12-2019 23:60';
    const validDateFormControl = new FormControl(validDate);

    // Act
    const result = dateValidator(validDateFormControl);

    // Assert
    expect(result).toEqual({
      validDate: false
    });
  });

  it('Should return validation errors when the control contains a null value', () => {
    // Arrange
    const validDateFormControl = new FormControl(null);

    // Act
    const result = dateValidator(validDateFormControl);

    // Assert
    expect(result).toEqual({
      validDate: false
    });
  });

  it('Should return validation errors when the control has no value', () => {
    // Arrange
    const validDateFormControl = new FormControl('');

    // Act
    const result = dateValidator(validDateFormControl);

    // Assert
    expect(result).toEqual({
      validDate: false
    });
  });
});
