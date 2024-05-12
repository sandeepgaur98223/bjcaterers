import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bjcaterers';
  sum=0;
  TotalCost=0;

  menuitems=[{"item":"Gulab Jamun", "price": 20}
  ,{"item":"Kachori", "price": 12}
  ,{"item":"Samosa", "price": 15}]

  order= [];

  checkBoxClicked(eventtarget:any,item:any){
      console.log("Checkbox checked:",eventtarget.checked);

      if(eventtarget.checked)
      {
        this.sum+=item.price;
      }
      else
      {
        this.sum-=item.price;
      }
  }

  calculateTotal(noOfPeople:any)
  {
    console.log("Number Entered:",noOfPeople);

    this.TotalCost=this.sum*noOfPeople.value;
  }
}
