import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: ' <h1> welcome to just template instead url </h1>', //./home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private id:any=0;
  private name:any='';


  
  
  public constructor(){

    
    
    console.log('this is home constructor');
  }
  ngOnInit(): void {

    console.log('ngonit method invoked');
    //throw new Error('Method not implemented.');
  }
  
// export keywords -- global
// if we remove export it throw error in app module 
//that home component is not exported globally
}
