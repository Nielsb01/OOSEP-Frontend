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

  let validEmailAddress = 'some-one@hotmail.com';
  let invalidEmailAddress = 'invalid_email-address';

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
    fixture.detectChanges();
  });

  it('should enable synchronise button when both fields contain a valid e-mail address', async(() => {
    // Arrange
    let syncButton: DebugElement = debugElement.query(By.css('button[type=submit]'));

    // Act
    component.synchronisationForm.controls.syncOriginEmailAddress.setValue(validEmailAddress);
    component.synchronisationForm.controls.syncDestinationEmailAddress.setValue(validEmailAddress);

    // Assert
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(syncButton.nativeElement.disabled).toBeFalse();
    });
  }));

  it('should disable the synchronise button is disabled when both fields are empty', async(() => {
    // Arrange
    let syncButton: DebugElement = debugElement.query(By.css('button[type=submit]'));

    // Act
    component.synchronisationForm.controls.syncOriginEmailAddress.setValue(null);
    component.synchronisationForm.controls.syncDestinationEmailAddress.setValue(null);

    // Assert
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(syncButton.nativeElement.disabled).toBeTrue();
    });
  }));

  it('should disable the synchronise button is disabled when both fields contain invalid e-mail address', async(() => {
    // Arrange
    let syncButton: DebugElement = debugElement.query(By.css('button[type=submit]'));

    // Act
    component.synchronisationForm.controls.syncOriginEmailAddress.setValue(invalidEmailAddress);
    component.synchronisationForm.controls.syncDestinationEmailAddress.setValue(invalidEmailAddress);

    // Assert
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(syncButton.nativeElement.disabled).toBeTrue();
    });
  }));

  it('should disable the synchronise button is disabled when origin field contains valid e-mail address and destination field is empty', async(() => {
    // Arrange
    let syncButton: DebugElement = debugElement.query(By.css('button[type=submit]'));

    // Act
    component.synchronisationForm.controls.syncOriginEmailAddress.setValue(validEmailAddress);
    component.synchronisationForm.controls.syncDestinationEmailAddress.setValue(invalidEmailAddress);

    // Assert
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(syncButton.nativeElement.disabled).toBeTrue();
    });
  }));

  it('should disable the synchronise button is disabled when origin field contains valid e-mail address and destination field contains invalid e-mail address', async(() => {
    // Arrange
    let syncButton: DebugElement = debugElement.query(By.css('button[type=submit]'));

    // Act
    component.synchronisationForm.controls.syncOriginEmailAddress.setValue(validEmailAddress);
    component.synchronisationForm.controls.syncDestinationEmailAddress.setValue(null);

    // Assert
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(syncButton.nativeElement.disabled).toBeTrue();
    });
  }));

  // ---

  it('should disable the synchronise button is disabled when destination field contains valid e-mail address and origin field is empty', async(() => {
    // Arrange
    let syncButton: DebugElement = debugElement.query(By.css('button[type=submit]'));

    // Act
    component.synchronisationForm.controls.syncOriginEmailAddress.setValue(invalidEmailAddress);
    component.synchronisationForm.controls.syncDestinationEmailAddress.setValue(validEmailAddress);

    // Assert
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(syncButton.nativeElement.disabled).toBeTrue();
    });
  }));

  it('should disable the synchronise button is disabled when destination field contains valid e-mail address and origin field contains invalid e-mail address', async(() => {
    // Arrange
    let syncButton: DebugElement = debugElement.query(By.css('button[type=submit]'));

    // Act
    component.synchronisationForm.controls.syncOriginEmailAddress.setValue(null);
    component.synchronisationForm.controls.syncDestinationEmailAddress.setValue(validEmailAddress);

    // Assert
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(syncButton.nativeElement.disabled).toBeTrue();
    });
  }));
});
