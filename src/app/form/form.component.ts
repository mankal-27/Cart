import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  itemname: string = '';
  unit: number | 0;
  amount: number | 0;
  total : number | 0;
  grandTotal: number | 0;
  tempTotal : number | 0;
  enableEdit = false;
  enableEditIndex = null;

  product = [];

  clickme(){

  this.product.push(
    {itemname : this.itemname,
     unit : this.unit,
     amount: this.amount,
     total : (this.unit * this.amount ),
    }
  )

  this.grandTotal = this.product.reduce(function (accumulator, item) {
    let temptotal  = (accumulator + item.total)
    return temptotal;
  }, 0);
 
  }
 
  Editme(e){
    console.log("i am Editable");

    if(e.target.id  = true){
      e.target.parentNode.parentNode.childNodes[0].contentEditable = true;
      e.target.parentNode.parentNode.childNodes[1].contentEditable = true;
      e.target.parentNode.parentNode.childNodes[2].contentEditable = true;  
      e.target.id == 'false';
      console.log(e.target.id)
    }
    else{
      e.target.parentNode.parentNode.childNodes[0].contentEditable = false;
      e.target.parentNode.parentNode.childNodes[1].contentEditable = false;
      e.target.parentNode.parentNode.childNodes[2].contentEditable = false;
    }
      }

  enableEditMethod(e, i) {
    this.enableEdit = true;
    this.enableEditIndex = i;
    console.log(i, e);
  }

  Deleteme(e){
    console.log("Hi I am deletable")
    this.product.splice(e,1);
    this.grandTotal -= e.total;

  }
}
