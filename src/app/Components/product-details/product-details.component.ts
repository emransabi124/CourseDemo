import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Model/iproduct';
import { StaticServiesService } from 'src/app/Services/static-servies.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 currPrdId:number=0;
 prdListArr:number[]=[];
 prd:IProduct[] |null=null;
  constructor(private activeRoute:ActivatedRoute
    ,private  ProdStatic:StaticServiesService
    ,private location:Location
    ,private router:Router
    
    ) {
 

  }
  
  ngOnInit(): void {
 //  this.currPrdId= Number(this.activeRoute.snapshot.paramMap.get('prd'));
  //  this.prd=this.ProdStatic.getProductByCatId(this.currPrdId);
   this.prdListArr= this.ProdStatic.getprdListIds();

   this.activeRoute.paramMap.subscribe( (paramMap)=>{
    this.currPrdId=Number(paramMap.get('prd'))
    this.prd=this.ProdStatic.getProductByCatId(this.currPrdId);  
   })

  }

  goBack(){
this.location.back();
  }




  Previous(){

let prevIndex=this.prdListArr.findIndex((elem,index)=>  elem==this.currPrdId);

let prevPrdId;
if (prevIndex>0) 
prevPrdId=this.prdListArr[prevIndex-1];
 this.router.navigate(['/Products/'+prevPrdId]);
 
  }

  Next(){


    let nextIndex=this.prdListArr.findIndex((elem,index)=>  elem==this.currPrdId+1);
    let nextPrdId;
    if (nextIndex<this.prdListArr.length) 
    nextPrdId=this.prdListArr[nextIndex];
    this.currPrdId!=nextPrdId;
     this.router.navigate(['/Products/'+nextPrdId]);
     
  }
}
