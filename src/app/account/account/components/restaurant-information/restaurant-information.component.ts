import {Component} from '@angular/core';
import {MatError, MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AvatarComponent} from "../../../../shared/components/avatar/avatar.component";
import {NgxMaskDirective} from "ngx-mask";

@Component({
  selector: 'app-restaurant-information',
  standalone: true,
  imports: [
    MatError,
    MatFormField,
    MatHint,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    AvatarComponent,
    NgxMaskDirective
  ],
  templateUrl: './restaurant-information.component.html',
  styleUrl: './restaurant-information.component.scss'
})
export class RestaurantInformationComponent {
  accountForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.accountForm = this.formBuilder.group({
      image: [''],
      name: ['', Validators.required],
      cnpj: ['', Validators.required],
      description: ['']
    })
  }

  onSubmit(): void {
    console.log(this.accountForm.value)
  }

  get name(): AbstractControl | null {
    return this.accountForm.get('name');
  }

  get cnpj(): AbstractControl | null {
    return this.accountForm.get('cnpj');
  }
}
