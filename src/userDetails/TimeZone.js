export default function TimeZone({ offset, description }) {
  return (
    <>
      <div className="row">
        <span className="label">Timezone:</span>
        <span className="value"> {offset}</span>
        <span className="value"> {description}</span>
      </div>
    </>
  );
}
