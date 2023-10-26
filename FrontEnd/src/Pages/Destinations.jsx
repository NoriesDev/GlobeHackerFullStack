
import SmCard from "../components/SmCard";
import { useState, useEffect } from "react";
import './DestinationsStyling.css'
import PropTypes from "prop-types";

export default function Destinations() {
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");


  //fetching all data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getBlogData = await fetch('http://localhost:8000/destinations');
        if (!getBlogData.ok)
          throw new Error(
            'The request failed with a status of ' + getBlogData.status
          );
        const parsedPosts = await getBlogData.json();

        setAllPosts(parsedPosts);
        console.log(parsedPosts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  //search for blogPost
  useEffect(() => {
    const filtered = allPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };


  return (
    <div>
      <div className="head-Desti">
        <div className="search-con">
        <input
          type="text"
          placeholder="Search articles..."
          className="search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      </div>
     {searchQuery ? ( 
        filteredPosts.map((post, index) => (
          <SmCard
            key={index}
            title={post.title}
            date={post.date}
            author={post.author}
            article={post.article}
            imageUrl={post.imageUrl}
            post={post}
          />
        ))
      ) : 
( allPosts.map((post, index) => (
        <SmCard
          key={index}
          id={index +1}
          title={post.title}
          date={post.date}
          author={post.author}
          article={post.article}
          imageUrl={post.imageUrl}
        />
      )))}
    </div>
  );
}


Destinations.propTypes = {
  title: PropTypes.string,
  date: PropTypes.number,
  author: PropTypes.string,
  imageUrl: PropTypes.string,
  article: PropTypes.string,
};
