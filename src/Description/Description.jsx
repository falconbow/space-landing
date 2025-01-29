import "./Description.scss";

export const Description = () => {
  return (
    <div className="title">
      <div className="title_header">
        <div className="title_header__title">
          Discover the vast expanses of{" "}
          <span className="title_header__title-highlight">space</span>
        </div>
        <div className="title_header__subheader">
          Where the possibilities are{" "}
          <span className="title_header__subheader-highlight">endless!</span>
        </div>
        <button className="title_header__button">Learn more</button>
      </div>
      <div className="title_image"></div>
    </div>
  );
};
