import { ModalWindowService } from './../../../services/modal-window.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent {
  // @Output() close: EventEmitter<any> = new EventEmitter();
  
  constructor(private _modalWindowService: ModalWindowService) { }
  item: {};

  ngAfterContentChecked() {
    const { _highlightResult } = this._modalWindowService.setItemData();
    this.item = _highlightResult;
  }
  close() {
    
  }
}
