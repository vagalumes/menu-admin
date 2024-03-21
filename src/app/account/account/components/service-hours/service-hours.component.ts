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
  serviceHoursForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.serviceHoursForm = this.formBuilder.group({
      serviceHours: this.formBuilder.array(this.daysOfWeek.map(day =>
        this.formBuilder.group({
          day: [day],
          workDay: [false],
          hours: this.formBuilder.array([
            this.formBuilder.group({
              start: [{value: '', disabled: true}],
              end: [{value: '', disabled: true}]
            })
          ])
        })
      ))
    })
  }

  addHourInterval(serviceHoursControl: AbstractControl): void {
    const hoursArray = serviceHoursControl.get('hours') as FormArray;

    hoursArray.push(this.formBuilder.group({
        start: [],
        end: []
      })
    );
  }

  onCheckBoxChange($event: MatCheckboxChange, serviceHoursControl: AbstractControl): void {
    const hoursControl = serviceHoursControl.get('hours') as FormArray;
    if (!$event.checked) {
      this.removeHourInterval(serviceHoursControl);
      hoursControl.reset();
      hoursControl.disable();
      return;
    }

    const hoursFormGroup = hoursControl.controls[0];

    hoursFormGroup.enable();
  }

  removeHourInterval(serviceHoursControl: AbstractControl): void {
    const hoursArray = serviceHoursControl.get('hours') as FormArray;

    hoursArray.removeAt(1)
  }

  getHours(serviceHoursControl: AbstractControl): FormArray {
    return serviceHoursControl.get('hours') as FormArray;
  }

  get serviceHours(): FormArray {
    return this.serviceHoursForm.get('serviceHours') as FormArray;
  }
}
