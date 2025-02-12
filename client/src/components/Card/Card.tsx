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
    <article className="idol-card-container">
      <section className="idol-card">
        <figure>
          <img src={idolImage} alt={idolName} className="idol-image" />
          <figcaption>{idolName}</figcaption>
          <button
            type="button"
            onClick={toggleDescription}
            className="view-description-button"
          >
            More...
          </button>
        </figure>

        {showDescription && (
          <section className="description-overlay active">
            <header className="description-content">
              <h3>{idolName}</h3>
              <p>{idolDescription}</p>
              <button
                type="button"
                onClick={toggleDescription}
                className="close-button"
              >
                Fermer
              </button>
            </header>
          </section>
        )}
      </section>
    </article>
  );
};

export default Card;
