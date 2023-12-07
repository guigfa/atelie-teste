import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { catchError, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { passwordConfirmationValidator } from 'src/app/shared/validators/validators';
import { SendFormService } from 'src/app/shared/services/send-form.service';
import { SubjectService } from 'src/app/shared/services/subjects.service';
import { ConfirmationModalComponent } from 'src/app/shared/modal/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  login: boolean = false;
  classifiers: string[] = ['Gerente', 'Revendedor', 'Distribuidor'];

  userForm: FormGroup = new FormGroup(
    {
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required]),
      tax_id: new FormControl(null, [
        Validators.required,
        Validators.maxLength(11),
      ]),
      password: new FormControl(null, Validators.required),
      password_confirmation: new FormControl(null, Validators.required),
      company: new FormControl(null, Validators.required),
      segment: new FormControl(null, Validators.required),
    },
    { validators: passwordConfirmationValidator() }
  );

  loginForm: FormGroup = new FormGroup(
    {
      tax_id: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    }
  );

  constructor(
    private sendFormService: SendFormService,
    private subjects: SubjectService,
    private dialog: MatDialog,
    private overlay: Overlay
  ) {}

  ngOnInit() {
    this.subjects.login$.subscribe(val => this.login = val);
  }

  sendData() {
    this.sendFormService
      .sendFormData(this.userForm.value)
      .pipe(
        catchError((error) => {
          this.dialog.open(ConfirmationModalComponent, {
            data: 'ERROR',
            width: 'fit-content',
            autoFocus: true,
            scrollStrategy: this.overlay.scrollStrategies.noop(),
          });
          return of(error);
        })
      )
      .subscribe((resp: HttpResponse<FormData>) => {
        if (resp.status !== 200) return;
        this.dialog.open(ConfirmationModalComponent, {
          data: 'OK',
          width: 'fit-content',
          autoFocus: true,
          scrollStrategy: this.overlay.scrollStrategies.noop(),
        });
        this.userForm.reset();
      });
  }

  handleLogin(isLogin: boolean) {
    this.subjects.updateLogin(isLogin);
  }
}
