import {Component, Input} from '@angular/core';
import {MatCheckbox, MatCheckboxChange} from "@angular/material/checkbox";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatTooltip} from "@angular/material/tooltip";
import {AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {NgxMaskDirective} from "ngx-mask";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-service-hours',
  standalone: true,
  imports: [
    MatCheckbox,
    MatLabel,
    MatFormField,
    MatTooltip,
    ReactiveFormsModule,
    MatInput,
    NgxMaskDirective,
    MatIcon,
    MatIconButton,
    MatSuffix
  ],
  templateUrl: './service-hours.component.html',
  styleUrl: './service-hours.component.scss'
})
export class ServiceHoursComponent {
  daysOfWeek: string[] = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  serviceHoursForm: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.serviceHoursForm = formBuilder.group({
      serviceHours: formBuilder.array(this.daysOfWeek.map((day, index) =>
        this.formBuilder.group({
          day: [day],
          workDay: [false],
          start: [{value: '', disabled: true}],
          end: [{value: '', disabled: true}]
        })
      ))
    })
  }

  changeScheduleFieldsState($event: MatCheckboxChange, formGroup: AbstractControl) {
    if ($event.checked) {
      formGroup.enable();
      return;
    }
    formGroup.get('start')?.disable();
    formGroup.get('end')?.disable();
    formGroup.get('start2')?.disable();
    formGroup.get('end2')?.disable();
  }

  get serviceHours(): FormArray {
    return this.serviceHoursForm.get('serviceHours') as FormArray
  }

}
