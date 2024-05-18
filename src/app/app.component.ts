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
  ///Emp Expenditure
  empTotal=0;
  hideEmpAddItem=true;
  newEmpType="";
  newEmpCount:number=0;
  newEmpPPCost:number=0;


 constructor() {
    this.employeeExpend = this.employeeExpend.map(employee => ({
      ...employee,
      Total: this.calculateTotalEmp(employee.Count, employee.PerPCost)
    }));
  }

  calculateTotalEmp(count: number, perPCost: number): number {
    return count * perPCost;
  }

  menuitems=[{"item":"Gulab Jamun", "price": 20,include:false}
  ,{"item":"Kachori", "price": 12,include:false}
  ,{"item":"Samosa", "price": 15,include:false}]

  employeeExpend = [{"emptype":"Maharaj", "Count": 10,"PerPCost":800,include:false, Total:0}
  ,{"emptype":"Bai", "Count": 20,"PerPCost":500,include:false,Total:0}
  ,{"emptype":"Ghati", "Count": 4,"PerPCost":400,include:false,Total:0}];

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

    checkBoxEmpClicked(eventtarget:any,employee:any,i:any){
      console.log("Checkbox checked:",eventtarget.checked);

      if(eventtarget.checked)
      {
        this.empTotal+=employee.Total;
        this.employeeExpend[i].include=true;
      }
      else
      {
        this.empTotal-=employee.Total;
        this.employeeExpend[i].include=false;
      }
  }

    deleteEmpItem(i:number){
      debugger
    if(this.employeeExpend[i].include)
    {
      this.empTotal-=this.employeeExpend[i].Total;
    }
    this.employeeExpend.splice(i,1);
  }

    addNewEmpItem(){
     let newobj= {"emptype":this.newEmpType, "Count": this.newEmpCount,"PerPCost":this.newEmpPPCost,include:false, Total:this.newEmpCount*this.newEmpPPCost};
     this.employeeExpend.push(newobj);
     this.hideEmpAddItem=true;
     this.newEmpType="";
     this.newEmpCount=0;
     this.newEmpPPCost=0;
  }

}
