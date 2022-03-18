import "./Styles/Error.scss";
import ErrorSvg from "../assets/Images/undraw_location_search_re_ttoj.svg";

const Error = ({ error, setError, errorStatement }) => {
  console.log(error);

  return (
    <>
      <div
        className={`error-wrapper ${!error ? "hidden" : ""}`}
        onClick={() => {
          setError(false);
        }}
      ></div>
      <div className={`error ${!error ? "hidden" : ""}`}>
        <div className="error-svg">
          <img src={ErrorSvg} alt="error illustration from undraw.co" />
        </div>
        <h1>Error</h1>
        <p>{errorStatement}</p>
        <button
          className="retry-btn"
          onClick={() => {
            setError(false);
          }}
        >
          Retry
        </button>
      </div>
    </>
  );
};

export default Error;
