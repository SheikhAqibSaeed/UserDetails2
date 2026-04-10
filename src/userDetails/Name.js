export default function Name({ name }) {
  return (
    <>
      <div className="row">
        <span className="label">Title:</span>
        <span className="value"> {name.title}</span>
      </div>
      <div className="row">
        <span className="label">First:</span>
        <span className="value"> {name.first}</span>
      </div>
      <div className="row">
        <span className="label">Last:</span>
        <span className="value"> {name.last}</span>
      </div>
    </>
  );
}
