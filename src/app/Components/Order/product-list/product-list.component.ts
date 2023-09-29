import { Component } from '@angular/core';
import { ICategory } from 'src/app/Model/icategory';
import { IProduct } from 'src/app/Model/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  
  prodList:IProduct[];
  catList:ICategory[];
selectedCat:number=0;
  totalPrice:number=0;
  orderDate=new Date();
  /**
   *
   */
  constructor() {
    this.orderDate=new Date();
  this.prodList=[
{
    id:1,
    name:'lenovo',
    price:44500,
    quantity:2,
    imgURL:'https://picsum.photos/200/300',
    categoryID:1

  },
{
    id:2,
    name:'HP',
    price:55000,
    quantity:5,
    imgURL:'https://picsum.photos/200/300',
    categoryID:2

  },
{
    id:3,
    name:'MAC Book',
    price:85.525,
    quantity:45,
    imgURL:'https://picsum.photos/200/300',
    categoryID:3

  },
{
    id:4,
    name:'Lenovo thinkPad',
    price:628880,
    quantity:20,
    imgURL:'https://picsum.photos/200/300',
    categoryID:4

  },
{
    id:5,
    name:'MAC Book',
    price:850,
    quantity:5,
    imgURL:'https://picsum.photos/200/300',
    categoryID:5

  }
];
   this.catList=[
    {id:1,name:'laptop'},
    {id:2,name:'PC'},
    {id:3,name:'Phones'},
    {id:4,name:'Tech'},
   ]

  }
  changeCat(){
    this.selectedCat=1
  }

  SelectedId(val:any){
    this.selectedCat=val;
  }
  buy(Price:number,Count:any){
  let itemsCount:number=Count;
  //this.totalPrice=Price *2;
 // this.totalPrice=parseInt(Count)*Price; //if null equal undefined
 // this.totalPrice=Number(Count)*Price; //if null equal 0
  // let Count3=Count as number;
   this.totalPrice= +Count *Price ;//if null equal 0

  
  }


  // to convvert int to number

// improve ngfor performance if i want to delete item just load same i have changed  not all item
  ProdTrackFn(index:number,prod:IProduct):number
  { 
    return prod.id;
  }
}
