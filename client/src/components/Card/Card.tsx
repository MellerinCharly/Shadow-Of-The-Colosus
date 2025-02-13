import { useState } from "react";
import type { IdoleGameI } from "../../types/app";
import "./Card.css";

function Card({ name, image, text }: IdoleGameI) {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <article className="idol-card-container">
      <section className="idol-card">
        <figure>
          <img
            src={image}
            alt={`Colosse named ${name}`}
            className="idol-image"
          />
          <figcaption>{name}</figcaption>

          {/* Bouton "More..." ou "Close" en fonction de l'état */}
          <button
            type="button"
            onClick={toggleDescription}
            className="view-description-button"
          >
            {showDescription ? "Close" : "More..."}
          </button>
        </figure>

        {/* Affichage de la description avec un overlay */}
        {showDescription && (
          <section className="description-overlay active">
            <header className="description-content">
              <h3>{name}</h3>
              <p>{text}</p>

              {/* Bouton "Retour" pour fermer la description */}
              <button
                type="button"
                onClick={toggleDescription}
                className="close-button"
              >
                Close
              </button>
            </header>
          </section>
        )}
      </section>
    </article>
  );
}

export default Card;
