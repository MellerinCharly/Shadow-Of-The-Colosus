import { useState } from "react";
import "./Card.css";

interface IdolCardProps {
  idolImage: string;
  idolName: string;
  idolDescription: string;
}

const Card: React.FC<IdolCardProps> = ({
  idolImage,
  idolName,
  idolDescription,
}) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="idol-card">
      <img src={idolImage} alt={idolName} className="idol-image" />
      <button
        type="button"
        onClick={toggleDescription}
        className="view-description-button"
      >
        More...
      </button>

      {showDescription && (
        <div className="description-overlay">
          <div className="description-content">
            <h3>{idolName}</h3>
            <p>{idolDescription}</p>
            <button
              type="button"
              onClick={toggleDescription}
              className="close-button"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
