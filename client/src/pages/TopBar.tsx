import { AppBar, Toolbar, Box, Container, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/auth';

function TopBar() {

  const nav = useNavigate();
  const {isAuthenticated, logout, user} = useAuth();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <button onClick={()=>nav('/')}>ViccPortál</button>
        <Container>
          {!isAuthenticated ?  (
          <Stack sx={{float: 'right'}} direction={"row"} gap={2}>
          <button onClick={()=>nav('/login')}>Login</button>
          <button onClick={()=>nav('/register')}>Register</button>
          </Stack>
          ) : (
            <Stack sx={{float: 'right'}} direction={"row"} gap={2}>
            <Box marginY={'auto'}>
              Welcome, {user.username}
            </Box>
            <button onClick={()=>nav('/create')}>Make a Joke</button>
            <button onClick={()=>logout()}>Log out</button>
            </Stack>
          )}
        </Container>
        </Toolbar>
    </AppBar>
  );
}

export default TopBar;
