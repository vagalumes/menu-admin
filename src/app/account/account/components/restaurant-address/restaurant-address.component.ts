import {Component, OnInit} from '@angular/core';
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgxMaskDirective} from "ngx-mask";
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AddressService} from "../../../services/address.service";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import {finalize, map, Observable, startWith} from "rxjs";
import {BrazilStates} from "../../../../constants/states";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-restaurant-address',
  standalone: true,
  imports: [
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    NgxMaskDirective,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
    MatAutocomplete,
    MatOption,
    MatAutocompleteTrigger,
    AsyncPipe
  ],
  templateUrl: './restaurant-address.component.html',
  styleUrl: './restaurant-address.component.scss'
})
export class RestaurantAddressComponent implements OnInit {
  isLoading = false;
  addressForm: FormGroup;
  statesOptions!: Observable<string[]>;

  constructor(private formBuilder: FormBuilder, private addressService: AddressService) {
    this.addressForm = this.formBuilder.group({
      zipcode: ['', Validators.required],
      street: ['', Validators.required],
      number: [''],
      complement: [''],
      neighborhood: [''],
      city: ['', Validators.required],
      state: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.statesOptions = this.addressForm.get('state')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterStates(value || '')),
    );
  }

  getAddress(): void {
    if (!this.zipcode?.valid)
      return;

    this.isLoading = true;
    this.addressService.getAddress(this.zipcode?.value).pipe(
      finalize(() => this.isLoading = false)
    ).subscribe({
      next: address => {
        this.addressForm.patchValue({
          'street': address.logradouro,
          'neighborhood': address.bairro,
          'city': address.localidade,
          'state': address.uf,
          'complement': address.complemento
        });
      },
      error: error => console.log(error)
    });
  }

  private _filterStates(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.BrazilStates.filter(option => option.toLowerCase().includes(filterValue));
  }

  get city(): AbstractControl | null {
    return this.addressForm.get('city');
  }

  get state(): AbstractControl | null {
    return this.addressForm.get('state');
  }

  get zipcode(): AbstractControl | null {
    return this.addressForm.get('zipcode');
  }

  get street(): AbstractControl | null {
    return this.addressForm.get('street');
  }

  protected readonly BrazilStates = BrazilStates;
}
