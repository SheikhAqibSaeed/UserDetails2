export default function Location({ location }) {
  debugger;

  return (
    <>
      <div className="row">
        <span className="label">City:</span>
        <span className="value"> {location.city}</span>
      </div>
      <div className="row">
        <span className="label">State:</span>
        <span className="value"> {location.city}</span>
      </div>
      <div className="row">
        <span className="label">Country:</span>
        <span className="value"> {location.city}</span>
      </div>
      <div className="row">
        <span className="label">Postcode:</span>
        <span className="value"> {location.postcode}</span>
      </div>
    </>
  );
}
