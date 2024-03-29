import { createSelector } from 'reselect'

export const memoizedBoardViewState = createSelector(
  state => state.board,
  (boardState) => {
    const { togglePopUp, selectedPopUp } = boardState

    return { togglePopUp, selectedPopUp }
  }
)

export const memoizedBoardData = createSelector(
  state => state.board,
  (boardState) => {
    const { boardData } = boardState

    return { boardData }
  }
)
