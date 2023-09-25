import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useState} from 'react'
import { useAuth } from '../utils/auth';
import TopBar from './TopBar';
import { useNavigate } from 'react-router-dom';


function CreatePost() {

    const [isAnon, setIsAnon] = useState(false);
    const {user} = useAuth();
    const nav = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': user.authentication.sessionToken },
            body: JSON.stringify({title: data.get('title'), description: data.get('description'), author: isAnon? 'Anonymous': user.username, tags: tag})
        };
        fetch('http://localhost:6969/jokes', requestOptions)
            .then(response => response.json())
            .then(data =>{
                nav('/')
                console.log(data)
            });
      };
  
    const [tag, setTag] = useState<string[]>([]);

    const handleChange = (event:any) => {
        const {
        target: { value },
        } = event;
        setTag(
        typeof value === 'string' ? value.split(',') : value,
        );
    };

    const names = [
      "funny",
      "random",
      "humor",
      "gardening",
      "jokes",
      "laughter",
      "comedy",
      "entertainment",
      "laughs",
      "amusement"
    ]
    

    return (
        <>
        <TopBar/>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Create A Joke
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title of the joke"
                name="title"
                autoFocus
              />
              <TextField
                margin="normal"
                multiline
                minRows={5}
                required
                fullWidth
                name="description"
                label="Description of the joke"
                type="description"
                id="description"
              />
              Post Anonymously?
              <Checkbox onClick={()=>setIsAnon(prev=>!prev)}/>
              <br/>
              Tags:
              <Select
                labelId="tags"
                label="Tags"
                id="tags"
                name='tags'
                multiple
                fullWidth  
                value={tag}
                onChange={handleChange}
                >
                {names.map((name) => (
                    <MenuItem
                    key={name}
                    value={name}
                    >
                    {name}
                    </MenuItem>
                ))}
                </Select>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {isAnon ? "Post Anonymously" : "Post Joke"}
              </Button>
            </Box>
          </Box>
        </Container>
        </>
    );
}

export default CreatePost