import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { ElModule } from 'element-angular';

@NgModule({
  declarations: [
    HomeComponent,
    ModalWindowComponent
  ],
  imports: [
    CommonModule,
    ElModule.forRoot()
  ],
})
export class HomeModule { }
