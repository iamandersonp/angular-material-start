import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BaseLayaoutComponent } from './layouts/base-layaout/base-layaout.component';

@NgModule({
  declarations: [
		HeaderComponent,
		FooterComponent,
		BaseLayaoutComponent
	],
	exports: [
		HeaderComponent,
		FooterComponent,
		BaseLayaoutComponent
	],
	imports: [
    CommonModule,
    RouterModule,
		AngularMaterialModule
  ],
})
export class SharedModule { }
