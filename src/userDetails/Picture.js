export default function Picture({ picture }) {
  return (
    <>
      <div className="row">
        <span className="label">Thumbnail picture:</span>
        <span className="value">
          <img src={picture.thumbnail} alt="thumbnail" />
        </span>
      </div>
      <div className="row">
        <span className="label">Medium picture:</span>
        <span className="value">
          <img src={picture.medium} alt="medium" />
        </span>
      </div>
      <div className="row">
        <span className="label">Large picture:</span>
        <span className="value">
          <img src={picture.large} alt="large" />
        </span>
      </div>
    </>
  );
}
