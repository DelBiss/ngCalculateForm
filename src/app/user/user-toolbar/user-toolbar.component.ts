import { Component} from '@angular/core';
import { AuthService } from "../../core/auth.service";


@Component({
  selector: 'app-user-toolbar',
  templateUrl: './user-toolbar.component.html',
  styleUrls: ['./user-toolbar.component.scss']
})
export class UserToolbarComponent {

  constructor(public auth: AuthService) {  }
}
