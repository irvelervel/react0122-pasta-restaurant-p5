import { Component } from 'react'
import withRouter from '../helpers/withRouter'

class ClassComponent extends Component {
  render() {
    console.log(this.props)
    return <h3>Componente a classe</h3>
  }
}

export default withRouter(ClassComponent)

// HOC
// Higher Order Component
