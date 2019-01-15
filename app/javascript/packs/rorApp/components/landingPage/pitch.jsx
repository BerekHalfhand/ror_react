import React from 'react';
import {Api} from '../../middleware/api'

class Pitch extends React.Component {
  componentDidMount() {

    Api.helloWorld();

  }

  render() {
    return(
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

export default Pitch
