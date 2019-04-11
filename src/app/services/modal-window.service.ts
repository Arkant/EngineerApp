import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalWindowService {

  item: {};

  constructor() { }

  getItemData(data) {
    this.item = data;
  }

  setItemData(){
    return this.item;
  }
}
