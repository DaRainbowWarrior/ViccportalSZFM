import Timeline from '../components/Timeline'
import {Container} from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Home() {

  const nav = useNavigate();
  return (
    <>
    <Container>
      <button onClick={()=>nav('/login')}>Login</button>
      <button onClick={()=>nav('/register')}>Register</button>
      <Timeline/>
    </Container>
    </>
  )
}

export default Home
