import { ModalWindowService } from './../../services/modal-window.service';
import { HomeService } from './../../services/home.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { ElModule } from 'element-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    ModalWindowComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ElModule.forRoot()
  ],
  providers: [HomeService, ModalWindowService]
})
export class HomeModule { }
