import { Component } from '@angular/core';
import { ICategory } from 'src/app/Model/icategory';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css'],
})
export class OrderMasterComponent {
  catList: ICategory[] = [];
  selectedCat: number = 0;
  receiveorderTotalPrice: number = 0;
  /**
   *
   */
  constructor() {
    this.catList = [
      { id: 1, name: 'laptop' },
      { id: 2, name: 'PC' },
      { id: 3, name: 'Phones' },
      { id: 4, name: 'Tech' },
    ];
  }

  onTotalPriceChange(number:number){
this.receiveorderTotalPrice=number
  }
}
