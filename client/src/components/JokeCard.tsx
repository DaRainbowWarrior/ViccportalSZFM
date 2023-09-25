import {useState} from 'react'
import {Card, CardContent, Typography, IconButton, List, ListItem, Paper, Stack, Container} from '@mui/material'
import { Joke } from './Timeline'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function JokeCard({title,author,description,dislikes,likes,tags}:Joke) {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);


  return (
    <Card sx={{ minWidth: 500, marginTop: 2 }}>
      <CardContent>
        <Typography variant='h5'>
          {title}
        </Typography>
        <Typography sx={{fontSize: 11, color: 'gray'}}>
          {author}
        </Typography>
        <Typography variant='body2'>
          {description}
        </Typography>

      </CardContent>
        <IconButton onClick={()=>setIsLiked(prev => !prev)}>
          {isLiked ? likes+1  : likes }
          <ArrowUpwardIcon/>
        </IconButton>
        <IconButton onClick={()=>setIsDisliked(prev => !prev)}>
          <ArrowDownwardIcon/>
          {isDisliked ? dislikes+1 : dislikes} 
        </IconButton>
    <CardContent>
      <Stack direction={'row'} gap={1} >
        {tags == null ? null : tags.map((text, index) =>{
          return (
            <Paper sx={{padding: 1}} key={index}>{text}</Paper>
          )
        })}
      </Stack>
    </CardContent>
    </Card>
  )
}

export default JokeCard