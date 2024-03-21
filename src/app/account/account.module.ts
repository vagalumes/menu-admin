import {NgModule} from "@angular/core";
import {AccountComponent} from "./account/account.component";
import {AccountRoutingModule} from "./account-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatChipsModule} from "@angular/material/chips";
import {NgForOf, NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {NgxMaskDirective} from "ngx-mask";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatTooltip} from "@angular/material/tooltip";
import {ServiceHoursComponent} from "./account/components/service-hours/service-hours.component";
import {
    RestaurantInformationComponent
} from "./account/components/restaurant-information/restaurant-information.component";
import {RestaurantAddressComponent} from "./account/components/restaurant-address/restaurant-address.component";

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
    MatExpansionModule,
    NgxMaskDirective,
    ReactiveFormsModule,
    HttpClientModule,
    MatCheckbox,
    MatTooltip,
    ServiceHoursComponent,
    RestaurantInformationComponent,
    RestaurantAddressComponent
  ],
})
export class AccountModule {
}
