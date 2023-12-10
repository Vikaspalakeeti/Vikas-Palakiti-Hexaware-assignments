import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{

  sid:number=0;
  sname:string="";
  dob:Date=new Date();

  items:string[]=["apple","banana","grape","kiwi"];

  course:string=''

  imgurl = "../../assets/snap.jpeg"

  studentList =[
    {"id":101, "sname":"vikas"},
    {"id":102, "sname":"vicky"},
    {"id":103, "sname":"john"}
  ]

  ngOnInit(): void {
  this.sid=101;
  this.sname='vikas';
  
    
  }
  getData(){
    alert(this.sid + " "+this.sname);
  }

  isValid(){

  }







}
