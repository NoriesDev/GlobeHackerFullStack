import './TinyCardStyle.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";


export default function TinyCard( {title, imageUrl } ) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/destinations');
  };

return (
    <div className="tC-container" onClick={handleClick}>
      <img className="tC-img" src={imageUrl} alt='' />
      <div className='tC-rightCard'>
        <h3 className="tC-title">{title}</h3>
      </div>
    </div>
);
}

TinyCard.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
};