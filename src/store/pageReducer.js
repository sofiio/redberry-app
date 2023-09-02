const PAGE = 'pageReducer/PAGE'

let initialize = {
  page: 1,
  totalPages: 5
}

const pageReducer = (state = initialize, action) => {
  switch (action.type) {
    case PAGE:
      return { ...state, page: action.payload.pageValue }

    default:
      return state
  }
}
export const setPage = pageValue => ({ type: PAGE, payload: { pageValue } })

export default pageReducer
