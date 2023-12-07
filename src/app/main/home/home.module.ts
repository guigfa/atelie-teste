import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRegisterComponent } from 'src/app/login-register/login-register.component';

@NgModule({
  declarations: [HomeComponent, LoginRegisterComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [HomeComponent, LoginRegisterComponent],
})
export class HomeModule {}
