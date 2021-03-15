import { StringChecker } from '~/base/typeChecker';
import * as lite from '~/lite';

import { GetBoardsQuery } from './type';
import { GetQueryChecker } from './typeChecker';

export async function getBoard(boardId: string) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(boardId, 'boardId');

  return await lite.request('GET', `boards/${boardId}`);
}

export async function getBoards(query: GetBoardsQuery) {
  const getQueryChecker: GetQueryChecker = new GetQueryChecker();
  getQueryChecker.checkQuery(query, 'query');

  return await lite.request('GET', 'boards', { query });
}
