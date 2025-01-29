import "./Grid.scss";
import { dataForTiles } from "./tiles";
import { useRef } from "react";

export const Grid = () => {
  return (
    <div className="offers">
      <p className="offers_title">Offers</p>
      <div className="offers_grid">
        {dataForTiles.map((tile) => (
          <div
            className={`offers_grid__cell ${tile.single ? "single" : "double"}`}
            key={tile.title}
            style={{
              background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(15, 20, 32, 0.79) 100%), url(${tile.picture}) no-repeat`,
              backgroundSize: "cover",
            }}
          >
            <div
              className={`offers_grid__cell-title-${
                tile.single ? "single" : "double"
              }`}
            >
              {tile.title}
            </div>
            <div
              className={`offers_grid__cell-description-${
                tile.single ? "single" : "double"
              }`}
            >
              {tile.description}
            </div>
            <button className="offers_grid__cell-button">Learn more</button>
          </div>
        ))}
      </div>
    </div>
  );
};
