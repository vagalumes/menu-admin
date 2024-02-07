import {NgModule} from "@angular/core";
import {AccountComponent} from "./account/account.component";
import {AccountRoutingModule} from "./account-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatChipsModule} from "@angular/material/chips";
import {NgForOf, NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {MatExpansionModule} from "@angular/material/expansion";
import {NgxMaskDirective} from "ngx-mask";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    AccountRoutingModule,
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    NgForOf,
    NgIf,
    MatButtonModule,
    NgxMaterialTimepickerModule,
    MatExpansionModule,
    NgxMaskDirective,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class AccountModule {
}
