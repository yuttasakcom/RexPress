import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../client/actions'

// components
import Posts from '../components/Posts.vue'
import Search from '../components/Search'
import Category from '../components/Category.vue'
import Sponser from '../components/Sponser.vue'

class Home extends Component {
  componentWillMount() {
    this.props.fetchUsers()
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Posts />
            </div>

            <div className="col-md-4">
              <Search />

              <Category />

              <Sponser />
            </div>
          </div>
        </div>
        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright &copy; Your Website 2017
            </p>
          </div>
        </footer>
      </div>
    )
  }
}

const loadData = store => store.dispatch(fetchUsers())
const mapStateToProps = ({ users }) => ({ users })

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(Home)
}
