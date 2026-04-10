export default function LoginDetails({ login }) {
  return (
    <>
      <div className="row">
        <span className="label">Username:</span>
        <span className="value"> {login.username}</span>
      </div>
      <div className="row">
        <span className="label">Password:</span>
        <span className="value"> {login.password}</span>
      </div>
    </>
  );
}
