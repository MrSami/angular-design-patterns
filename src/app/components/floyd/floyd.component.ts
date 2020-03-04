import { Component,  } from '@angular/core';
import { TriangleService } from 'src/app/services/triangle.service';


@Component({
  selector: 'app-floyd',
  templateUrl: './floyd.component.html',
  styleUrls: ['./floyd.component.css']
})
export class FloydComponent  {

  floydString : string = "";
  color : "yellow" | "red";

  constructor( private triangleService : TriangleService) { }


  onClick(rows:number, checked:boolean): void {
    if (checked){
      this.floydString = this.triangleService.evenFloydTriangle(rows);
      this.color = "yellow";
    }
    else {
      this.floydString = this.triangleService.floydTriangle(rows);
      this.color = "red";
    }
  }
}
