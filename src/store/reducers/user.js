
const initialState = {
  name: null,
  email: null
}

const reducer = (state = initialState, { type, payload } ) => {
  switch (type) {
    case 'USER_LOGGED_IN':
      return {
        ...state,
        name: payload.name,
        email: payload.email
      }
    case 'USER_LOGGED_OUT':
      return {
        ...state,
        name: null,
        email: null
      }
    default:
      return state
  }
}

export default reducer