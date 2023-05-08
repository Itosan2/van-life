import React from "react";
/** useLocation to use the state pass by Vans.js */
import { Link, useParams, useLocation, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";

export function loader({ params }) {
  return getVans(params.id);
}

export default function VanDetail() {
  // const params = useParams(); // remove as no longer using useEffect
  const location = useLocation();
  //  const [van, setVan] = React.useState(null); replaced by useLoaderData()

  const van = useLoaderData();

  const search = location.state?.search || "";
  /** ?.state if location.state not null  */
  /** alternatively  const search = location.state && location.state.search || "" */
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>

      <div className="van-detail">
        <img src={van.imageUrl} />
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
        <h2>{van.name}</h2>
        <p className="van-price">
          <span>${van.price}</span>/day
        </p>
        <p>{van.description}</p>
        <button className="link-button">Rent this van</button>
      </div>
    </div>
  );
}

// const params = useParams();
/** useLocation hook has absolute path & state {form Vans.js} */
/** is still maitain even we refresh the page */
