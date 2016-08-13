import React from 'react'
const Registration = React.createClass({
  render(){
    console.log('Registration');
    return (
      <div>
        <form >
          <li><input type="text" placeholder = "First Name"/></li>
          <li><input type="text" placeholder = "Last Name"/></li>
          <li><input type="text" placeholder = "Blood Type"/></li>
          <li><input type="text" placeholder = "Address"/></li>
          <li><input type="text" placeholder = "Phone Number"/></li>
        </form>
      </div>
    )
  }
});

export default Registration;