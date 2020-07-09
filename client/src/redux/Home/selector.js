import { createSelector } from 'reselect'


export const memoizedHomeState = createSelector(
  state => state.home,
  (homeState) => {
    const { view } = homeState

    return { view }
  }
)