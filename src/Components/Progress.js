import "./Styles/Progress.scss";

const Progress = ({ currentData, hide }) => {
  return (
    <div className={`progress ${hide ? "visibility--hidden" : ""}`}>
      <h1 className="progress-statement">
        {currentData.location !== undefined
          ? "What's the weather ?"
          : "Choose location"}
      </h1>

      <div
        className={`progress-bar ${
          currentData.location !== undefined ? "completed" : ""
        }`}
      >
        <div className="progress-bar--completed"></div>
      </div>
    </div>
  );
};

export default Progress;
