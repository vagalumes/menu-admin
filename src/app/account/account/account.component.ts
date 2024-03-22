import {Component} from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  step: number = 0;
  accountValues: any;

  setStep(index: number): void {
    this.step = index
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  restaurantInfoSubmit(data: any): void {
    this.accountValues = {...data, informationRequest: data.description};
    this.nextStep();
  }

  restaurantAddressSubmit(data: any): void {
    this.accountValues = {...this.accountValues, addressRequest: data};
    this.nextStep();
  }

  restaurantServiceHours(data: any): void {
    this.accountValues = {...this.accountValues, schedules: data};
    this.nextStep();
  }
}
