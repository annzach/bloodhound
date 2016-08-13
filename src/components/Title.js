import React from 'react'
import {render} from 'react-dom'
import {Link} from 'react-router'


const Title = React.createClass({
render(){
    return (
      <div>
        <h1>Bloodhound</h1>
        <hr/>
        <h4>live strong</h4>
        <button>
        <Link to = '/home'>Home</Link>
        </button>
        
        
        <button>
        <Link to = '/registration'>Registration</Link>
        </button>

        
        <button>
        <Link to = '/searchdonors'>Search Donors</Link>
        </button>
        <br/>

        
       
      </div>
    )
  }
})
export default Title;