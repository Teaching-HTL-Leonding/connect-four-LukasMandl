import { TestBed } from "@angular/core/testing";
import { BoardService } from "./board.service";
import { Level4Component } from "./level4.component";

describe('Level 4 Component', () =>{
  let component: Level4Component;
  let boardServiceMock: Partial<BoardService>;
  beforeEach(() => {
    boardServiceMock = {
      boardContent : [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 1, 2, 0],
        [0, 2, 1, 1, 2, 2, 0]
      ]
    }
  TestBed.configureTestingModule({
    declarations: [Level4Component],
    providers: [{provide: BoardService, useValue: boardServiceMock}]
  });
  const fixture = TestBed.createComponent(Level4Component);
  component = fixture.componentInstance
  });
  it('should get correct css class', () => {
    expect(component.getStyle(3, 5)).toBe('occupied-1')
  });
});
