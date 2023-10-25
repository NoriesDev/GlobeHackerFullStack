
import SmCard from "../components/SmCard";
import { useState, useEffect } from "react";
import { getBlogPostData } from "../components/lib/contentfulClient";
import './DestinationsStyling.css'

export default function Destinations() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogPostData = await getBlogPostData();
        setBlogPosts(blogPostData.items);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = blogPosts.filter((post) =>
      post.fields.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchQuery, blogPosts]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
            title={post.fields.title}
            date={post.fields.date}
            author={post.fields.author}
            article={post.fields.article}
            imageUrl={post.fields.imageUrl}
            post={post}
          />
        ))
      ) : ( blogPosts.map((post, index) => (
        <SmCard
          key={index}
          title={post.fields.title}
          date={post.fields.date}
          author={post.fields.author}
          article={post.fields.article}
          imageUrl={post.fields.imageUrl}
          post={post}
        />
      )))}
    </div>
  );
}
