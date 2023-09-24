import {useState} from 'react'
import {Card, CardContent, Typography, IconButton, List, ListItem, Paper} from '@mui/material'
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
    <List>
      {tags.map((text, index) =>{
        return (
        <ListItem key={index}>
          <Paper>{text}</Paper>
        </ListItem>
        )
      })}
    </List>
    </Card>
  )
}

export default JokeCard