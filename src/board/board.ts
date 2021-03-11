import * as lite from '../lite';

type GetBoardsQuery = {
  displayable?: boolean;
  categories?: string[];
  slug?: string;
  name?: string;
};

export async function getBoard(boardId: string) {
  await lite.request('GET', `boards/${boardId}`);
}

export async function getBoards(query: GetBoardsQuery) {
  await lite.request('GET', 'boards', { query });
}
