import * as C from '../constants'

function columns(state = [], action) {
  let items = [], data
  switch (action.type) {
    case C.COLUMNS_FETCH:
      data = C.identify(action.payload.response)  //._id.$oid -> .id()
      if (data && data.length)                    //sort by id in case DB doesn't
        data.sort((a, b) => a.id().localeCompare(b.id()));

      return Object.assign({}, state, {
        isFetching: false,
        items: data,
      })

    case C.COLUMNS_ADD_SUCCESS:
      data = C.identify([action.payload.response])      //single column instance, hence []
      if (state.items) items = state.items.slice(0)
      items = items.concat(data)

      return Object.assign({}, state, {
        isFetching: false,
        items: items,
      })

      case C.COLUMNS_DELETE_SUCCESS:
        let {id} = action.payload.response
        if (state.items) items = state.items.slice(0)

        items.forEach((v, i) => {
          if (v.id() === id) items.splice(i)
        })

        return Object.assign({}, state, {
          isFetching: false,
          items: items,
        })

    case C.COLUMNS_EDIT_SUCCESS:
      let updatedColumn = action.payload.response
      state.items.forEach((v, i) => {
        if (v._id.$oid === updatedColumn._id.$oid) v.values = updatedColumn.values
        items.push(v);
      })

      return Object.assign({}, state, {
        isFetching: false,
        items: items,
      })

    case C.COLUMNS_EDIT_REQUEST:
      return state

    case C.COLUMNS_ADD_REQUEST:
    case C.COLUMNS_EDIT_REQUEST:
    case C.COLUMNS_DELETE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      })

    case C.COLUMNS_ADD_FAILURE:
    case C.COLUMNS_EDIT_FAILURE:
    case C.COLUMNS_DELETE_FAILURE:
      let {error} = action.payload
      console.error('An error occurred.', error)

      return Object.assign({}, state, {
        isFetching: false,
      })

    default:
      return state
  }
}

export default columns
