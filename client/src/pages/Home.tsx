import Timeline from '../components/Timeline'
import {Container} from '@mui/material'

import TopBar from './TopBar';

function Home() {


  return (
    <>
    <TopBar/>
    <Container sx={{marginTop: 5}}>
      <Timeline/>
    </Container>
    </>
  )
}

export default Home
