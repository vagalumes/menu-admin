import {Component} from '@angular/core';
import {MatChipSelectionChange} from "@angular/material/chips";
import {AddressService} from "../services/address.service";
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  accountForm: FormGroup;

  constructor(private addressService: AddressService, formBuilder: FormBuilder) {
    this.accountForm = formBuilder.group({
      name: ['', Validators.required],
      cnpj: ['', Validators.required],
      description: [''],
      address: formBuilder.group({
        zipcode: ['', Validators.required],
        street: ['', Validators.required],
        number: [''],
        complement: [''],
        neighborhood: [''],
        city: ['', Validators.required],
        state: ['', Validators.required]
      })
    })
  }

  selectDay(day: string, event: MatChipSelectionChange): void {
    if (event.selected) {
      console.log(`Day selected: ${day}`);
    } else {
      console.log(`Day deselected: ${day}`);
    }
  }

  getAddress(): void {
    if (!this.zipcode?.valid)
      return;

    this.addressService.getAddress(this.zipcode?.value).subscribe(address => {
      this.accountForm.get('address')?.patchValue({
        'street': address.logradouro,
        'neighborhood': address.bairro,
        'city': address.localidade,
        'state': address.uf,
        'complement': address.complemento
      });
    });

  }

  get name(): AbstractControl | null {
    return this.accountForm.get('name');
  }

  get cnpj(): AbstractControl | null {
    return this.accountForm.get('cnpj');
  }

  get city(): AbstractControl | null {
    return this.accountForm.get('address.city');
  }

  get state(): AbstractControl | null {
    return this.accountForm.get('address.state');
  }

  get zipcode(): AbstractControl | null {
    return this.accountForm.get('address.zipcode');
  }

  get street(): AbstractControl | null {
    return this.accountForm.get('address.street');
  }
}
