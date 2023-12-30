import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Quote {
  auther: string;
  autherTitle: string;
  content: string;
}

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss'],
})
export class StepOneComponent {
  public quotes: Quote[] = [
    {
      auther: 'Salma Mohamed',
      autherTitle: 'Founder, Soliter Salon',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
      auther: 'Walaa Ossama',
      autherTitle: 'Owner, Golden Salon',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
      auther: 'Omnia Ahmed',
      autherTitle: 'G.M., Princesses Salon',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
  ];

  public isShownPassword: boolean = false;

  public stepOneForm: FormGroup;

  public validationChecked: boolean = false;

  public constructor() {
    this.stepOneForm = new FormGroup({
      first_name: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'),
      ]),
      last_name: new FormControl(null, [
        Validators.required,
        Validators.pattern('[a-zA-Zs]+'),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9]+'),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9a-zA-Z!@#$%^&*()]{8,}'),
      ]),
      policy_agreement: new FormControl(null, [
        Validators.required,
        Validators.pattern('true'),
      ]),
    });
  }

  public submit(): void {
    console.log(this.stepOneForm.controls);
  }

  public hasError(inputName: string, validator: string): boolean {
    return (
      (this.validationChecked || this.stepOneForm.get(inputName).touched) &&
      (this.stepOneForm.get(inputName).hasError('required') ||
        this.stepOneForm.get(inputName).hasError(validator))
    );
  }
}
