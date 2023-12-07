import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatIconModule } from '@angular/material/icon';

import { MatDialogModule } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';

import { MatSelectModule } from '@angular/material/select';

import {
  MatNativeDateModule,
  MAT_DATE_LOCALE,
} from '@angular/material/core';

import { MatMenuModule } from '@angular/material/menu';


const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatDialogModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatNativeDateModule,
  MatMenuModule,
];
@NgModule({
  declarations: [
  ],
  imports: [CommonModule, ...materialModules],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
  exports: [...materialModules],
})
export class MaterialModule {}
