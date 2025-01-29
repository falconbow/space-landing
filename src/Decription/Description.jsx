import "./Description.scss";
import { useState } from "react";

export const Description = () => {
  const [shouldShowMoreText, setShouldShowMoreText] = useState(false);

  const toggleMoreText = () => {
    setShouldShowMoreText(!shouldShowMoreText);
  };

  return (
    <div className="description">
      <h1 className="description_title">Embark on a space journey</h1>
      <p className="description_content">
        Travelling into space is one of the most exciting and unforgettable
        adventures that can change your life forever. And if you have ever
        dreamed of exploring stars, planets and galaxies, then our company is
        ready to help you realize this dream. We offer a unique experience that
        will allow you to go on a space journey and see all the secrets of the
        universe. We guarantee that every moment in space will be filled with
        incredible impressions, excitement and new discoveries. Our team of
        professionals takes care of your safety and comfort so that you can
        fully enjoy your adventure in space. We offer various options for space
        excursions.
      </p>
      {shouldShowMoreText && (
        <p className="description_content">More text here</p>
      )}
      <div className="description_link" onClick={toggleMoreText}>
        {shouldShowMoreText ? "Collapse" : "Read more"}
      </div>
    </div>
  );
};
