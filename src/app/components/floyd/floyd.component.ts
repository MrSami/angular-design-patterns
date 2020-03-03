import { Component,  } from '@angular/core';
import { TriangleService } from 'src/app/services/triangle.service';


@Component({
  selector: 'app-floyd',
  templateUrl: './floyd.component.html',
  styleUrls: ['./floyd.component.css']
})
export class FloydComponent  {

  floydString : string = "";

  constructor( private triangleService : TriangleService) { }


  onClick(rows:number, checked:boolean): void {
    if (checked){
      this.floydString = this.triangleService.evenFloydTriangle(rows);
    
    }
    else {
      this.floydString = this.triangleService.floydTriangle(rows);
    }
  }
}
