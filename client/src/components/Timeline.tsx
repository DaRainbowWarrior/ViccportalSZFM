import { useState, useEffect } from 'react';
import JokeCard from './JokeCard';
import {Box} from '@mui/material'

export interface Joke {
  _id: string;
  author: string;
  title: string;
  likes: number;
  dislikes: number;
  description: string;
  tags: string[];
}

function Timeline() {
  const [timelineData, setTimelineData] = useState<Joke[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [isBottom, setIsBottom] = useState(false);

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;

        const threshold = 100;

        if (documentHeight - (scrollTop + windowHeight) < threshold) {
        setIsBottom(true);
        } else {
        setIsBottom(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isBottom) {
        fetchData();
        }
    }, [isBottom]);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = () => {
    if (loading) return;

    setLoading(true);

    fetch(`http://localhost:6969/jokes/pages?page=${page}&limit=5`)
      .then((response) => {
        console.log(response)
        return response.json()})
      .then((newData) => {
        console.log(newData)
        setTimelineData([...timelineData, ...newData.data]);
        setPage(prev=> {
            if(newData.pagination.totalPages === newData.pagination.currentPage){
                return 1
            }else{
                return prev+1
            }
        })
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  return (
    <Box>
      {timelineData.map((item, index) => (
        <JokeCard {...item} key={item._id + index} />
      ))}
      {loading && <p>Loading...</p>}
    </Box>
  );
}

export default Timeline;
