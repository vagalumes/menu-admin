import {Component, EventEmitter, Output} from '@angular/core';
import {MatError, MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AvatarComponent} from "../../../../shared/components/avatar/avatar.component";
import {NgxMaskDirective} from "ngx-mask";
import {MatButton} from "@angular/material/button";
import {MatExpansionPanelActionRow} from "@angular/material/expansion";

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
    NgxMaskDirective,
    MatButton,
    MatExpansionPanelActionRow
  ],
  templateUrl: './restaurant-information.component.html',
  styleUrl: './restaurant-information.component.scss'
})
export class RestaurantInformationComponent {
  @Output() formResult = new EventEmitter<object>();
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
    this.formResult.emit(this.accountForm.value);
  }

  get name(): AbstractControl | null {
    return this.accountForm.get('name');
  }

  get cnpj(): AbstractControl | null {
    return this.accountForm.get('cnpj');
  }
}
