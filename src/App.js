import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/CustomNavbar'
import Home from './components/Home'
import ReservationForm from './components/ReservationForm'
import ReservationList from './components/ReservationList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import Menu from './components/Menu'

// BrowserRouter è un componente che abilita le funzioni di routing ai
// suoi children; non si traspone nella pagina con nessun elemento del DOM

// Routes è un altro contenitore, ma contiene solamente i componenti che
// desideriamo montare dinamicamente a seconda del contenuto della barra URL
// I figli di Routes possono essere solamente delle Route

// il nome del componente (che sia classe o funzione) dovrebbe rispecchiare
// il nome del file
function App() {
  return (
    // JSX
    <BrowserRouter>
      <div>
        <CustomNavbar brand="Aperti di domenica!" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservations" element={<ReservationList />} />
          <Route
            path="/new"
            element={<ReservationForm customClassName="mt-1" />}
          />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
