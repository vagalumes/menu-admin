import {Component} from '@angular/core';
import {navigationModel} from "../../config/menu/navigation.model";
import {menuConfig} from "../../config/menu/menu.config";


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  protected readonly navigationModel = navigationModel;
  protected readonly menuConfig = menuConfig;


}
