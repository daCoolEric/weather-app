const Detail = ({ title, data }) => {
  return (
    <>
      <h3 className="details-title">{title}</h3>
      <div className="details-wrapper">
        {data.map((item) => (
          <div className="detail" key={item.id}>
            <span className="detail--title">{item.name}</span>
            <span className="detail--value">{item.value}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Detail;
