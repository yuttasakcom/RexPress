import React, { Component } from 'react'

class Search extends Component {
  state = {
    isSearch: false,
    count: 0
  }
  searchHandler = event => {
    let search = event.target.value

    if (search != '') {
      this.setState({ isSearch: true })

      setTimeout(() => {
        this.setState({ isSearch: false })
      }, 1000)
    }
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }
  render() {
    return (
      <div className="card my-4">
        <h5 className="card-header">Search</h5>
        <div className="card-body">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for..."
              onKeyUp={this.searchHandler}
            />

            <span className="input-group-btn">
              <button
                className="btn btn-secondary"
                type="button"
                onClick={this.increment}
              >
                Go!
              </button>
            </span>
          </div>
          {this.state.isSearch && <div>กำลังค้นหา...</div>}
        </div>
      </div>
    )
  }
}

export default Search
