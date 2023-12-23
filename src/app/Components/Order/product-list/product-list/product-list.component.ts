import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { iif } from 'rxjs';
import { ICategory } from 'src/app/Model/icategory';
import { Iobject } from 'src/app/Model/iobject';
import { IProduct } from 'src/app/Model/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnChanges {
  @Input() catId: number = 0;
  @Input() removeFromParent:Iobject[];
  prodList: IProduct[];
  iobject: Iobject[];
  prodOfCatList: IProduct[] = [];
  data: any;
  //event publisher define
  @Output() totalPriceChange: EventEmitter<number>;
  @Output() ProdList: EventEmitter<Iobject[]>;
  totalPrice: number = 0;
  orderDate = new Date();
  removeFromParentinChild:Iobject[];
  /**
   *
   */
  constructor() {
   
    this.iobject = [];
    this.removeFromParent=[];
    this.removeFromParentinChild=this.removeFromParent;
    this.totalPriceChange = new EventEmitter<number>();
    this.ProdList = new EventEmitter<Iobject[]>();
    this.orderDate = new Date();
    this.prodList = [
      {
        id: 1,
        name: 'lenovo',
        price: 44500,
        quantity: 2,
        imgURL: 'https://picsum.photos/200/300',
        categoryID: 1,
      },
      {
        id: 2,
        name: 'HP',
        price: 55000,
        quantity: 5,
        imgURL: 'https://picsum.photos/200/300',
        categoryID: 2,
      },
      {
        id: 3,
        name: 'MAC Book pro',
        price: 85.525,
        quantity: 45,
        imgURL: 'https://picsum.photos/200/300',
        categoryID: 1,
      },
      {
        id: 4,
        name: 'Lenovo thinkPad',
        price: 628880,
        quantity: 20,
        imgURL: 'https://picsum.photos/200/300',
        categoryID: 4,
      },
      {
        id: 5,
        name: 'MAC Book',
        price: 850,
        quantity: 5,
        imgURL: 'https://picsum.photos/200/300',
        categoryID: 1,
      },
      {
        id: 6,
        name: 'Iphone Pro max',
        price: 850,
        quantity: 3,
        imgURL: 'https://picsum.photos/200/300',
        categoryID: 3,
      },
    ];

    this.prodOfCatList = this.prodList;
  }

  ngOnChanges(): void {
    this.data = this.filterProductsByCatId();

    // this.prodOfCatList= this.prodList.filter(p=>p.categoryID==this.catId);
  }

  private filterProductsByCatId() {
    if (this.catId != 0) {
      this.prodOfCatList = this.prodList.filter(
        (p) => p.categoryID == this.catId
      );
    } else {
      this.prodOfCatList = this.prodList;
    }
  }

  changeCat() {
    this.catId = 1;
  }

  SelectedId(val: any) {
    this.catId = val;
  }
  buy(Price: number, Count: any) {
    let itemsCount: number = Count;
    //this.totalPrice=Price *2;
    // this.totalPrice=parseInt(Count)*Price; //if null equal undefined
    // this.totalPrice=Number(Count)*Price; //if null equal 0
    // let Count3=Count as number;
    this.totalPrice += +Count * Price; //if null equal 0
    // iobject=[
    //   {
    //     id:
    //   }
    // ]
    //Excute Event
    this.totalPriceChange.emit(this.totalPrice);
  }

  buyToOptput(ProductListByClick: IProduct, Count: string) {
 
      this.iobject.push({
        id: ProductListByClick.id,
        name: ProductListByClick.name,
        price: ProductListByClick.price,
        count: Count == '' ? 0 : parseInt(Count),
      });
      debugger
 
      // const removeFromParentlist =  this.removeFromParent.filter(d => d.id!=ProductListByClick.id); 
      //  const result =  this.iobject.filter(d => !this.removeFromParent.includes(d)); 
      var result1:any=[];
      if (this.removeFromParentinChild !=null && this.removeFromParentinChild.length!=0) {


        for (let index = 0; index <= this.removeFromParentinChild.length; index++) {
          const element = this.removeFromParentinChild[index].id;
          result1 = this.iobject.filter(d=>d.id!=element);
          this.ProdList.emit(result1);
        }
     
    
  
    }
 
    else{
      this.removeFromParentinChild= [];
      this.ProdList.emit(  this.iobject);
    }
 
 }

 
 
 
  // to convvert int to number

  // improve ngfor performance if i want to delete item just load same i have changed  not all item
  ProdTrackFn(index: number, prod: IProduct): number {
    return prod.id;
  }
}
