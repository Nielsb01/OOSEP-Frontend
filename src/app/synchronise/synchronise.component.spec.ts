import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { SynchroniseComponent } from './synchronise.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

describe('SynchroniseComponent', () => {
  let component: SynchroniseComponent;
  let fixture: ComponentFixture<SynchroniseComponent>;
  let debugElement: DebugElement;
  let synchronisationButton: DebugElement;

  const validEmailAddress = 'some-one@hotmail.com';
  const invalidEmailAddress = 'invalid_email-address';

  const validDate = '31-12-2020 23:59';
  const invalidDate = '32-13-2020 24:60';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynchroniseComponent ],
      imports: [HttpClientModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynchroniseComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    synchronisationButton = debugElement.query(By.css('button[type=submit]'));
    fixture.detectChanges();
  });

  it('should enable synchronise button when e-mail fields contain a valid e-mail address and date fields contain a valid date', async(() => {
    // Arrange

    // Act
    component.synchronisationForm.controls.originEmailAddress.setValue(validEmailAddress);
    component.synchronisationForm.controls.destinationEmailAddress.setValue(validEmailAddress);
    component.synchronisationForm.controls.fromDate.setValue(validDate);
    component.synchronisationForm.controls.untilDate.setValue(validDate);

    // Assert
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(synchronisationButton.nativeElement.disabled).toBeFalse();
    });
  }));

  it('should disable the synchronise button is disabled when both fields are empty and date fields contain a valid date', async(() => {
    // Arrange

    // Act
    component.synchronisationForm.controls.originEmailAddress.setValue(null);
    component.synchronisationForm.controls.destinationEmailAddress.setValue(null);
    component.synchronisationForm.controls.fromDate.setValue(validDate);
    component.synchronisationForm.controls.untilDate.setValue(validDate);

    // Assert
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(synchronisationButton.nativeElement.disabled).toBeTrue();
    });
  }));

  it('should disable the synchronise button is disabled when both fields contain invalid e-mail address and date fields contain a valid date', async(() => {
    // Arrange

    // Act
    component.synchronisationForm.controls.originEmailAddress.setValue(invalidEmailAddress);
    component.synchronisationForm.controls.destinationEmailAddress.setValue(invalidEmailAddress);
    component.synchronisationForm.controls.fromDate.setValue(validDate);
    component.synchronisationForm.controls.untilDate.setValue(validDate);

    // Assert
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(synchronisationButton.nativeElement.disabled).toBeTrue();
    });
  }));

  it('should disable the synchronise button is disabled when origin field contains valid e-mail address and destination field is empty and date fields contain a valid date', async(() => {
    // Arrange

    // Act
    component.synchronisationForm.controls.originEmailAddress.setValue(validEmailAddress);
    component.synchronisationForm.controls.destinationEmailAddress.setValue(invalidEmailAddress);
    component.synchronisationForm.controls.fromDate.setValue(validDate);
    component.synchronisationForm.controls.untilDate.setValue(validDate);

    // Assert
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(synchronisationButton.nativeElement.disabled).toBeTrue();
    });
  }));

  it('should disable the synchronise button is disabled when origin field contains valid e-mail address and destination field contains invalid e-mail address and date fields contain a valid date', async(() => {
    // Arrange

    // Act
    component.synchronisationForm.controls.originEmailAddress.setValue(validEmailAddress);
    component.synchronisationForm.controls.destinationEmailAddress.setValue(null);
    component.synchronisationForm.controls.fromDate.setValue(validDate);
    component.synchronisationForm.controls.untilDate.setValue(validDate);

    // Assert
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(synchronisationButton.nativeElement.disabled).toBeTrue();
    });
  }));

  // ---

  it('should disable the synchronise button is disabled when destination field contains valid e-mail address and origin field is empty and date fields contain a valid date', async(() => {
    // Arrange

    // Act
    component.synchronisationForm.controls.originEmailAddress.setValue(invalidEmailAddress);
    component.synchronisationForm.controls.destinationEmailAddress.setValue(validEmailAddress);
    component.synchronisationForm.controls.fromDate.setValue(validDate);
    component.synchronisationForm.controls.untilDate.setValue(validDate);

    // Assert
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(synchronisationButton.nativeElement.disabled).toBeTrue();
    });
  }));

  it('should disable the synchronise button is disabled when destination field contains valid e-mail address and origin field contains invalid e-mail address and date fields contain a valid date', async(() => {
    // Arrange

    // Act
    component.synchronisationForm.controls.originEmailAddress.setValue(null);
    component.synchronisationForm.controls.destinationEmailAddress.setValue(validEmailAddress);
    component.synchronisationForm.controls.fromDate.setValue(validDate);
    component.synchronisationForm.controls.untilDate.setValue(validDate);

    // Assert
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(synchronisationButton.nativeElement.disabled).toBeTrue();
    });
  }));

  it('should disable the synchronise button when fromDate and untilDate are null and e-mail fields contain a valid e-mail address', async(() => {
    // Arrange

    // Act
    component.synchronisationForm.controls.originEmailAddress.setValue(validEmailAddress);
    component.synchronisationForm.controls.destinationEmailAddress.setValue(validEmailAddress);
    component.synchronisationForm.controls.fromDate.setValue(null);
    component.synchronisationForm.controls.untilDate.setValue(null);

    // Assert
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(synchronisationButton.nativeElement.disabled).toBeTrue();
    });
  }));

  it('should disable the synchronise button when fromDate is empty and untilDate is a valid date and e-mail fields contain a valid e-mail address', async(() => {
    // Arrange

    // Act
    component.synchronisationForm.controls.originEmailAddress.setValue(validEmailAddress);
    component.synchronisationForm.controls.destinationEmailAddress.setValue(validEmailAddress);
    component.synchronisationForm.controls.fromDate.setValue('');
    component.synchronisationForm.controls.untilDate.setValue(validDate);

    // Assert
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(synchronisationButton.nativeElement.disabled).toBeTrue();
    });
  }));

  it('should disable the synchronise button when untilDate is empty and fromDate is a valid date and e-mail fields contain a valid e-mail address', async(() => {
    // Arrange

    // Act
    component.synchronisationForm.controls.originEmailAddress.setValue(validEmailAddress);
    component.synchronisationForm.controls.destinationEmailAddress.setValue(validEmailAddress);
    component.synchronisationForm.controls.fromDate.setValue(validDate);
    component.synchronisationForm.controls.untilDate.setValue('');

    // Assert
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(synchronisationButton.nativeElement.disabled).toBeTrue();
    });
  }));

  it('should disable the synchronise button when fromDate is null and untilDate is a valid date and e-mail fields contain a valid e-mail address', async(() => {
    // Arrange

    // Act
    component.synchronisationForm.controls.originEmailAddress.setValue(validEmailAddress);
    component.synchronisationForm.controls.destinationEmailAddress.setValue(validEmailAddress);
    component.synchronisationForm.controls.fromDate.setValue(null);
    component.synchronisationForm.controls.untilDate.setValue(validDate);

    // Assert
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(synchronisationButton.nativeElement.disabled).toBeTrue();
    });
  }));

  it('should disable the synchronise button when untilDate is null and fromDate is a valid date and e-mail fields contain a valid e-mail address', async(() => {
    // Arrange

    // Act
    component.synchronisationForm.controls.originEmailAddress.setValue(validEmailAddress);
    component.synchronisationForm.controls.destinationEmailAddress.setValue(validEmailAddress);
    component.synchronisationForm.controls.fromDate.setValue(validDate);
    component.synchronisationForm.controls.untilDate.setValue(null);

    // Assert
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(synchronisationButton.nativeElement.disabled).toBeTrue();
    });
  }));

  it('should disable the synchronise button when fromDate is an invalid date and untilDate is a valid date and e-mail fields contain a valid e-mail address', async(() => {
    // Arrange

    // Act
    component.synchronisationForm.controls.originEmailAddress.setValue(validEmailAddress);
    component.synchronisationForm.controls.destinationEmailAddress.setValue(validEmailAddress);
    component.synchronisationForm.controls.fromDate.setValue(invalidDate);
    component.synchronisationForm.controls.untilDate.setValue(validDate);

    // Assert
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(synchronisationButton.nativeElement.disabled).toBeTrue();
    });
  }));

  it('should disable the synchronise button when untilDate is an invalid date and fromDate is a valid date and e-mail fields contain a valid e-mail address', async(() => {
    // Arrange

    // Act
    component.synchronisationForm.controls.originEmailAddress.setValue(validEmailAddress);
    component.synchronisationForm.controls.destinationEmailAddress.setValue(validEmailAddress);
    component.synchronisationForm.controls.fromDate.setValue(validDate);
    component.synchronisationForm.controls.untilDate.setValue(invalidDate);

    // Assert
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(synchronisationButton.nativeElement.disabled).toBeTrue();
    });
  }));
});
