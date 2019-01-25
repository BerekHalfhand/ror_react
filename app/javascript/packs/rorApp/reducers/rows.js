import {
  identify,
  ROWS_FETCH,
  ROWS_ADD_REQUEST,
  ROWS_ADD_SUCCESS,
  ROWS_ADD_FAILURE,
  ROWS_EDIT_REQUEST,
  ROWS_EDIT_SUCCESS,
  ROWS_EDIT_FAILURE,
} from '../actions'

function rows(state = [], action) {
  let items = [], data

  switch (action.type) {
    case ROWS_FETCH:
      data = identify(action.payload.response)
      return Object.assign({}, state, {
        isFetching: false,
        items: data,
      })

    case ROWS_ADD_SUCCESS:
      data = identify(action.payload.response)
      if (state.items) items = state.items.slice(0)
      items = items.concat(data)

      return Object.assign({}, state, {
        isFetching: false,
        items: items,
      })

    case ROWS_EDIT_SUCCESS:
      let updatedRow = action.payload.response
      state.items.forEach((v, i) => {
        if (v._id.$oid === updatedRow._id.$oid) v.values = updatedRow.values

        items.push(v);
      })

      return Object.assign({}, state, {
        isFetching: false,
        items: items,
      })

    case ROWS_ADD_REQUEST:
    case ROWS_EDIT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      })

    case ROWS_ADD_FAILURE:
    case ROWS_EDIT_FAILURE:
      let {error} = action.payload
      console.error('An error occurred.', error)

      return Object.assign({}, state, {
        isFetching: false,
      })

    default:
      return state
  }
}

export default rows
