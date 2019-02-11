import * as C from '../constants'

function rows(state = [], action) {
  let items = [], data

  switch (action.type) {
    case C.ROWS_FETCH:
      data = C.identify(action.payload.response)  //._id.$oid -> .id()
      if (data && data.length)                    //sort by id in case DB doesn't
        data.sort((a, b) => a.id().localeCompare(b.id()))

      return Object.assign({}, state, {
        isFetching: false,
        items: data,
      })

    case C.ROWS_ADD_SUCCESS:
      data = C.identify(action.payload.response)      //array of new rows
      if (state.items) items = state.items.slice(0)
      items = items.concat(data)

      return Object.assign({}, state, {
        isFetching: false,
        items: items,
      })

    case C.ROWS_EDIT_SUCCESS:
      let updatedRow = action.payload.response
      state.items.forEach((v) => {
        if (v._id.$oid === updatedRow._id.$oid) v.values = updatedRow.values
        items.push(v)
      })

      return Object.assign({}, state, {
        isFetching: false,
        items: items,
      })

    case C.ROWS_ADD_REQUEST:
    case C.ROWS_EDIT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      })

    case C.ROWS_ADD_FAILURE:
    case C.ROWS_EDIT_FAILURE:
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
