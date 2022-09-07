import { useState } from 'react'
import { useEffect } from 'react'
import { Container, Row, Col, Spinner, Badge, Alert } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import menu from '../data/menu.json'
import DishComments from './DishComments'

const PastaDetails = () => {
  const params = useParams()
  console.log('params', params)
  // params è un oggetto che raccoglie al suo interno tutte le coppie
  // key/value delle sezioni parametriche della vostra rotta

  const [pasta, setPasta] = useState(null)

  useEffect(() => {
    // devo trovare nel menu.json la pasta che ha un id === params.pastaId
    let pastaDetails = menu.find(
      (pasta) => pasta.id.toString() === params.pastaId
    ) // se non trova un match, torna undefined
    console.log('pastaDetails', pastaDetails)
    setTimeout(() => {
      // ritardo il setPasta per migliorare la UX
      setPasta(pastaDetails)
    }, 1000)
  }, [params.pastaId])

  return (
    <Container>
      <Row className="justify-content-center my-3">
        <Col className="text-center" xs={12} md={6}>
          {pasta ? (
            <div>
              <img src={pasta.image} alt={pasta.name} className="img-fluid" />
              <h2>{pasta.name}</h2>
              <p>{pasta.description}</p>
              <Badge variant="danger">{pasta.label}</Badge>
              <Badge variant="warning">{pasta.price}</Badge>
              {/* le recensioni vanno qui */}
              <DishComments selectedPasta={pasta} width={12} />
            </div>
          ) : typeof pasta === 'undefined' ? (
            <Alert variant="danger">Pasta non trovata</Alert>
          ) : (
            <Spinner animation="border" variant="success" />
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default PastaDetails
