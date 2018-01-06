import { createStore, applyMiddleware } from 'redux'
import reducers from '../../client/reducers'

export default () => {
  const store = createStore(reducers, {}, applyMiddleware())

  return store
}
