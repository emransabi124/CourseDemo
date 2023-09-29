import { Component } from '@angular/core';
import { Storedata } from 'src/app/ViewModel/storedata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
storeInfo:Storedata;
isImageShown:boolean=true;
/**
 *
 */
constructor() {
 this.storeInfo=new Storedata('ITI Store','https://picsum.photos/400/300',['Amman','maan'])

}

toggleImage(){

  this.isImageShown=!this.isImageShown
  // if (this.isImageShown!=true) {
  //   this.isImageShown=true;
  // }
  // else{
  //   this.isImageShown=true;
  // }
}
}
