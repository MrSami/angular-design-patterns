import { Injectable } from '@angular/core';

@Injectable({  providedIn: 'root'})
export class TriangleService {

  private static startOfAlphabet = 97;

  constructor() { }

  floydTriangle(rows:number): string {
    let currentLetter = TriangleService.startOfAlphabet;
    let result : string = "";
    for (let i=0; i<rows; i++){
      for (let j=0; j<i; j++){
        result += String.fromCharCode(currentLetter) + " ";
        currentLetter++;
      }
      result += "\n\r";
    }
    return result;
  }

  evenFloydTriangle(rows:number): string {
    let currentLetter = TriangleService.startOfAlphabet;
    let result : string = "";
    for (let i=0; i<rows; i++){
      for (let j=0; j< (rows -i -1); j++){
        result += " ";
      }
      for (let j=0; j<i; j++){
        result += String.fromCharCode(currentLetter) + " ";
        currentLetter++;
      }
      result += "\n\r";
    }
    return result;
  }
}
