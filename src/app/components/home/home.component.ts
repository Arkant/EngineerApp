import { ModalWindowService } from './../../services/modal-window.service';
import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { IHitData } from 'src/app/core/interfaces/hit-data.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _homeService: HomeService,
              private _modalWindowService: ModalWindowService) { }

  data: IHitData[];
  flag: boolean;

  ngOnInit() {
    this.getNews();
  }

  getNews() { setInterval(() =>
      this._homeService.getData()
      .subscribe(({ hits }: any) => {
        this.data = hits;
        console.log(hits);
      }), 10000);
  }

  takeDataFromRow(data) {
    this.flag = true;
    this._modalWindowService.getItemData(data.rowData);
  }
}
