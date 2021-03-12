import * as lite from '../lite';

type GetBoardsQuery = {
  displayable?: boolean;
  categories?: string[];
  slug?: string;
  name?: string;
};

export async function getBoard(boardId: string) {
  return await lite.request('GET', `boards/${boardId}`);
}

export async function getBoards(query: GetBoardsQuery) {
  return await lite.request('GET', 'boards', { query });
}
