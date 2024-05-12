import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bjcaterers';
  sum=0;
  TotalCost=0;
  noOfPeople=0;
  hideAddItem=true;
  newItem="";
  newItemPrice=0;
  editIndex=-1;


  menuitems=[{"item":"Gulab Jamun", "price": 20,include:false}
  ,{"item":"Kachori", "price": 12,include:false}
  ,{"item":"Samosa", "price": 15,include:false}]

  order= [];

  checkBoxClicked(eventtarget:any,item:any,i:any){
      console.log("Checkbox checked:",eventtarget.checked);

      if(eventtarget.checked)
      {
        this.sum+=item.price;
        this.menuitems[i].include=true;
      }
      else
      {
        this.sum-=item.price;
        this.menuitems[i].include=false;
      }
      this.TotalCost=this.sum*this.noOfPeople;
  }

  calculateTotal(noOfPeople:any)
  {
    this.noOfPeople=noOfPeople.value;
    console.log("Number Entered:",this.noOfPeople);

    this.TotalCost=this.sum*this.noOfPeople;
  }

  addNewItem(){
     let newobj= {item: this.newItem,price:this.newItemPrice,include:false};
     this.menuitems.push(newobj);
     this.hideAddItem=true;
     this.newItem="";
     this.newItemPrice=0;
  }
  deleteItem(i:number){
    if(this.menuitems[i].include)
    {
      this.sum-=this.menuitems[i].price;
    }
    this.menuitems.splice(i,1);
    this.TotalCost=this.sum*this.noOfPeople;
  }

  editItem(i:number){
    if(this.menuitems[i].include)
    {
      this.sum-=this.menuitems[i].price;
    }
    this.editIndex=i;

  }
  SaveEditedItem(i:number){
    this.editIndex=-1;
     if(this.menuitems[i].include)
    {
      this.sum+=this.menuitems[i].price;
    }
    this.TotalCost=this.sum*this.noOfPeople;
  }
}
