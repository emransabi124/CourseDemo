import { Injectable } from '@angular/core';
import { IProduct } from '../Model/iproduct';
//Decorator
@Injectable({
  providedIn: 'root'// have service selgeton :service create just one object for all project
})
export class StaticServiesService {
private prdList:IProduct[];
  constructor() {     this.prdList = [
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
  ];}


  getAllProduct():IProduct[]
  {
      return this.prdList;

  }

  getProductByCatId(catId:number) :IProduct[] // this what return method 
  {
    if (catId == 0) {
      return this.prdList;
    } else {
      return this.prdList.filter(prd=>prd.id==catId);
    }
  }

  getProductById(prodId:number) :IProduct |null // this what return method 
  {
    let getProduct= this.prdList.find(prd=>prd.id==prodId) ;

    return getProduct?getProduct:null;
  }


  getprdListIds(){
    let getProdIds= this.prdList.map(prd=>prd.id) ;
    return getProdIds;
  }
}
