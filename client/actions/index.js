export const FETCH_USERS = 'fetch_users'
export const fetchUsers = () => async dispatch => {
  const res = await { data: [{ name: 'YoProgrammer' }] }
  dispatch({
    type: FETCH_USERS,
    payload: res
  })
}
