import { BoardService } from "./board.service";

describe('Board service', () => {

  it('Can set pieces on board', () => {
    const board = new BoardService();

    board.drop(1);
    expect(board.boardContent[5][1]).toBe(1)

    board.drop(1);
    expect(board.boardContent[4][1]).toBe(2)
  });

  it('Make sure winner is identiefied when row is filled', () => {
    const board = new BoardService();
    board.drop(1);
    board.drop(1);
    board.drop(2);
    board.drop(2);
    board.drop(3);
    board.drop(3);
    board.drop(4);
    expect(board.getWinnerIx()).toBe(1)
  });
  it('Make sure winner is identiefied when row is filled', () =>
  {
    const board = new BoardService();
    board.drop(1);
    board.drop(2);
    board.drop(1);
    board.drop(2);
    board.drop(1);
    board.drop(2);
    board.drop(1);
    expect(board.getWinnerIx()).toBe(1);
  });
});
