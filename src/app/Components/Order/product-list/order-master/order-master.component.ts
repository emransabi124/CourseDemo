import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/Model/icategory';
import { Iobject } from 'src/app/Model/iobject';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css'],
})
export class OrderMasterComponent  implements OnChanges{
  catList: ICategory[] = [];

  prodList: Iobject[] = [];
  removeToChild:Iobject[]=[];
  selectedCat: number = 0;
  receiveorderTotalPrice: number = 0;
  countSelectedBychild:number=0
  /**
   *
   */
  constructor() {
    this.prodList = [];
    this.removeToChild=[];
    this.catList = [
      { id: 1, name: 'laptop' },
      { id: 2, name: 'PC' },
      { id: 3, name: 'Phones' },
      { id: 4, name: 'Tech' },
    ];
  }
  ngOnChanges(): void {
     
    this.receiveorderTotalPrice
 
  }

  // onTotalPriceChange(number: number) {
  //   this.receiveorderTotalPrice = number;
  // }

  buyfromChildOptput(data: Iobject[]) {
    this.prodList = [];
 
    for (let index = 0; index < data.length; index++) {
 
      const element = data[index];
      if (element!=undefined  ) {
        debugger
        if (this.prodList.some(x=>x.id==element.id && x.count==element.count)==false) {
          this.prodList.push({
            id: element.id,
            name: element.name,
            price: element.price,
            count: element.count,
          });
    



           
          this.prodList.forEach(ele => {
            if (ele.count!=0) {
              this.receiveorderTotalPrice += +   ele.count *ele.price;
            }
          });
          
        
      }else{
         
 
        this.prodList=this.prodList;
        this.prodList.forEach(ele => {
          if (ele.count!=0) {
            this.receiveorderTotalPrice += +   ele.count *ele.price;
          }
        });
      }
      }
  
    }
  }



  RemoveRow(IdRow:number){
    debugger
    this.removeToChild=Object.assign({},this.prodList) ;
    this.prodList.forEach((element,index)=>{
      if(element.id==IdRow) delete this.prodList[index];
   });
  //   this.removeToChild.forEach((element,index)=>{
  //     if(element.id==IdRow) delete this.removeToChild[index];
  //  });
  //  debugger


 this.buyfromChildOptput(this.prodList);
 
  }
}
