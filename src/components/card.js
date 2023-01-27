export default function Card(props) {
  let badgeText;
  console.log(props);
  if (props.data.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.data.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      <div className="status">{badgeText}</div>
      <div className="card-header">
        <img
          src={`../images/${props.data.coverImg}`}
          alt="somthing went wrong"
          className="card-poster"
        />
      </div>
      <div className="card-body">
        <span className="star">&#9733;</span> {props.data.stats.rating}
        <span className="text-muted">
          ({props.data.stats.reviewCount}) . {props.data.country}
        </span>
        <div className="card-content">
          <p>{props.data.body}</p>
          <div className="price">
            From ${props.data.price} /{" "}
            <span className="text-muted">person</span>
          </div>
        </div>
      </div>
    </div>
  );
}
