import { useLocation, useNavigate, useParams } from 'react-router-dom'

const withRouter = (Component) => (props) => {
  let location = useLocation()
  let navigate = useNavigate()
  let params = useParams()
  return (
    <Component
      {...props}
      location={location}
      navigate={navigate}
      params={params}
    />
  )
}

export default withRouter

// Component ora ha tutte le props originali, ma ne ha anche di aggiuntive!
// location, navigate e params
