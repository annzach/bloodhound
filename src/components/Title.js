import React from 'react'
import {Link} from 'react-router'

const Title = React.createClass({
render(){
    return (
      <div>
        <h1>Bloodhound</h1>
        <Link to = '/home'>Home</Link>
        <Link to = '/registration'>Registration</Link>
        <Link to = '/searchdonors'>Search Donors</Link>
      </div>
    )
  }
})
export default Title;