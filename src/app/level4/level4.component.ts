import { Component } from '@angular/core';
import { BoardService } from './board.service';

@Component({
  templateUrl: './level4.component.html',
  styleUrls: ['./level4.component.css'],
})
export class Level4Component {




  constructor(public board: BoardService) {
  }

  public drop(colIx: number) {
    return this.board.drop(colIx);
  }

  public getWinnerIx():number{
    return this.board.getWinnerIx();
  }


  public getClassesForCells(): string[][] {
    const rows = 6;
    const cols = 7;

    const result: string[][] = [];
    for (let row = 0; row < rows; row++) {
      result.push([]);
      for (let col = 0; col < cols; col++) {
        result[row][col] = this.getStyle(col, row);
      }
    }

    return result;
  }
  public getStyle(col:number, row:number): string{
    if(this.board.boardContent[row][col] !== 0){
      return `occupied-${this.board.boardContent[row][col]}`;
    }
    return "";
  }


  // TODO: Enhance solution from level 3 by extracting the logic in a separate Angular service.


}
