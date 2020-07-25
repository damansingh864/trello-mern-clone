import { createSelector } from 'reselect'

export const memoizedDashboardHeader = createSelector(
  (state) => state.dashboard,
  (dashboard) => {
    const {
      toggleAddPopUp
    } = dashboard

    return {
      toggleAddPopUp
    }
  }
)

export const memoizedPopUpData = createSelector(
  (state) => state.dashboard,
  (dashboard) => {
    const {
      popUpDirection
    } = dashboard

    return {
      popUpDirection
    }
  }
)