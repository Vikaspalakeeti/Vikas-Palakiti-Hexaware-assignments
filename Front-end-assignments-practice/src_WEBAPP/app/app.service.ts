import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  data  =[
    {"pid":101,"pname":"mobile","price":5000},
    {"pid":102,"pname":"charger","price":500},
    {"pid":103,"pname":"box","price":4000},
  ];


  constructor() { }
  getAllData(){
    return this.data;
  }
}
