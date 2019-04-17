import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';
import { MustMatch } from './validations';
@Directive({
  selector: '[appPasswordMatch]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordMatchDirective, multi: true }]
})
export class PasswordMatchDirective implements Validator {
  @Input('appPasswordMatch') mustMatch: string[] = [];
  validate(formGroup: FormGroup): ValidationErrors {
    return MustMatch(this.mustMatch[0], this.mustMatch[1])(formGroup);
  }
  constructor() { }
}


