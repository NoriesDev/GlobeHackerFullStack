import TinyCard from './TinyCard';
import {useState, useEffect} from 'react';

import './TinyContainerStyle.css';

export default function TinyCardContainer() {
    const [blogPosts, setBlogPosts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const blogPostData = await // new fetch function here former contentful client();
          setBlogPosts(blogPostData.items);
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
     {blogPosts.map((post, index) => (
        <TinyCard
          key={index}
          title={post.fields.title}
          article={post.fields.article}
          imageUrl={post.fields.imageUrl}
        />
      ))}
    </div>
    </>
  );
}
