import { Row, Col, ListGroup } from 'react-bootstrap'

const DishComments = ({ selectedPasta, width }) => (
  <Row className="justify-content-center mt-4">
    <Col xs={12} md={width} className="text-center">
      <ListGroup>
        {selectedPasta?.comments.map((review) => (
          <ListGroup.Item key={review.id}>
            {review.author} - {review.comment}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Col>
  </Row>
)

export default DishComments
