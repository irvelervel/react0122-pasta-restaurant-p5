import { Badge, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import menu from '../data/menu.json'

const Menu = () => (
  <Container>
    {menu.map((pasta) => (
      <Row className="justify-content-center my-3" key={pasta.id}>
        <Col className="text-center" xs={12} md={6}>
          <Link to={'/detail/' + pasta.id}>
            <img src={pasta.image} alt="pasta offering" className="img-fluid" />
          </Link>
          <h4>{pasta.name}</h4>
          <Badge variant="danger">{pasta.label}</Badge>
          <Badge variant="warning">{pasta.price}</Badge>
        </Col>
      </Row>
    ))}
  </Container>
)

export default Menu
