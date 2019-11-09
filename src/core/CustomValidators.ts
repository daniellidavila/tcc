import { FormGroup, AbstractControl } from "@angular/forms";

export class CustomValidators {
  static EqualPasswords(group: FormGroup | AbstractControl, field1: string, field2: string): { [key: string]: any } {
    if ((group.get(field1) && group.get(field2)) && (group.get(field1).value === group.get(field2).value)) {
      return null
    }
    return {
      rePassword: 'no.equal'
    }
  }
}