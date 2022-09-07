import { Col, Container, Row } from 'react-bootstrap'

const NotFound = () => (
  <Container>
    <Row className="justify-content-center mt-4">
      <Col md={6} className="text-center">
        <h2>404 - Pagina non trovata</h2>
        <h4>Clicca qua per tornare alla home</h4>
      </Col>
    </Row>
  </Container>
)

export default NotFound
