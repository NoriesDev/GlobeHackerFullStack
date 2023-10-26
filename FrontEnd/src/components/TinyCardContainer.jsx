import TinyCard from './TinyCard';
import {useState, useEffect} from 'react';

import './TinyContainerStyle.css';

export default function TinyCardContainer() {
    const [loading, setLoading] = useState(true);
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const getBlogData = await fetch(
            'http://localhost:8000/destinations'
          );
          if (!getBlogData.ok)
            throw new Error(
              'The request failed with a status of ' + getBlogData.status
            );
          const parsedPosts = await getBlogData.json();
  
          setAllPosts(parsedPosts);
          console.log(parsedPosts);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
  return (
    <>
    <h3 className='grid-headline'>Find Amazing Travel Destinations:</h3>
    <div className="grid-container">
     {allPosts.map((post, index) => (
        <TinyCard
          key={index}
          title={post.title}
          article={post.article}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
    </>
  );
}
