import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ViaCepAddressModel} from "../models/via-cep-address.model";

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  baseUrl = environment.zipcodeApi;

  constructor(private httpClient: HttpClient) { }

  getAddress(zipcode: string): Observable<ViaCepAddressModel> {
    return this.httpClient.get<ViaCepAddressModel>(`${this.baseUrl}${zipcode}/json`)
  }
}
