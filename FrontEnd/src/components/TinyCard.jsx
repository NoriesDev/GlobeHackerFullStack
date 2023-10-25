import './TinyCardStyle.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function TinyCard( {title, imageUrl, description } ) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/destinations');
  };

return (
    <div className="tC-container" onClick={handleClick}>
      <img className="tC-img" src={imageUrl} alt={description} />
      <div className='tC-rightCard'>
        <h3 className="tC-title">{title}</h3>
      </div>
    </div>
);
}

TinyCard.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
};