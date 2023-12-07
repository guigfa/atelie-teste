import { Component } from '@angular/core';
import { SubjectService } from 'src/app/shared/services/subjects.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  login: boolean = false;

  constructor(private subjects: SubjectService){}

  handleLogin(isLogin: boolean) {
    this.subjects.updateLogin(isLogin);
  }
}
