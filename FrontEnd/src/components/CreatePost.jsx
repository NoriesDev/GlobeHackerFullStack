import './CreatePost.css'
import {useState} from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
 const[form, setForm] = useState({title: '', date: '', author:'', imageurl: '', article: '', adventures: '', dining: '', shopping: ''})
  const navigate = useNavigate();
  const [formDataSent, setFormDataSent] = useState(false);
  
  
  const handleChange = (e) => {
    setForm((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://globehackersserver.onrender.com/features', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(form), 
      }).then((response) => {
        console.log('Data updated successfully:', response);
      });
      setFormDataSent(true);
      setTimeout(() => navigate('/destinations'), 5000);
  
    } catch (error) {
      formDataSent(false);
      console.error('Error:', error);
    }
  };

    return (
        <>
<form  className='CreatePostForm' onSubmit={handleSubmit}>
  <div 
  className="Fieldset">
    <h3 className='headline'>Create your Blog post!</h3>
      <div className='creBl-wrap'>
      <div className='left-creBl'>
    <label 
    className='l' htmlFor="title">Blog Title</label>
    <input className='i' type="text" id="title" name="title" placeholder="Your Blog Title here.." required value={form.title} onChange={handleChange}/>
    <label  className='l'htmlFor="text">Blog Article </label>
    <textarea  className='a-i' type="text" id="article" name="article" placeholder="Your Blog Article here.." required value={form.article} onChange={handleChange} />
   
    <label className='l'  htmlFor="name">Your Name:</label>
    <input  className='i' type="text" id="author" name="author" placeholder="Your Name here.." required value={form.author} onChange={handleChange}/>
    </div>
    <div className='right-creBl'>
    <label className='l'  htmlFor="Image">Blog Image:</label>
    <input className='i'  type="text" id="imageurl" name="imageurl" placeholder="Your image url here.." value={form.imageurl} onChange={handleChange}/>
    <label className='l' htmlFor="text">Recommendations</label>
    <input className='i' type="text" id="dining" name="dining" placeholder="Restaurant: Ithaa Undersea Restaurant.." required value={form.dining} onChange={handleChange}/>
    <input className='i' type="text" id="adventures" name="adventures" placeholder="Activity: Snorkeling with Whale Sharks.." required value={form.adventures} onChange={handleChange}/>
    <input className='i' type="text" id="shopping" name="shopping" placeholder="Market: Malé Local Market.." required value={form.shopping} onChange={handleChange}/>
    <label className='l'  htmlFor="date">Date:</label>
    <input className='i'  type="date" id="date" name="date" value={form.date} onChange={handleChange}/>
    </div>
    </div>
    <input  className='createPostBtn' type="submit" value="Submit" onSubmit={handleSubmit}/>
  </div>
</form>
</>
);
}
CreatePost.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  imageurl: PropTypes.string,
  article: PropTypes.string,
  dining: PropTypes.string,
  adventures: PropTypes.string,
  shopping: PropTypes.string
};
