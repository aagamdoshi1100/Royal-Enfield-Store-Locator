import Link from "next/link";
import { IoStarSharp } from "react-icons/io5";
const Store = ({ details }) => {
  const {
    name,
    averageRating,
    address,
    city,
    state,
    pincode,
    phoneNumber,
    storePageUrl,
    dealerOperationHours,
    gmbMapUrl,
  } = details;
  return (
    <div className="store-component">
      <p className="store-name">{name}</p>
      <p className="store-rating">
        {averageRating}{" "}
        <span>
          {" "}
          <IoStarSharp className="rating" />
        </span>
      </p>
      <p>{phoneNumber}</p>
      <p>
        {address}, {city}, {state}, {pincode}
      </p>
      <Link href={gmbMapUrl} target="_blank" rel="noopener noreferrer">
        <button>GET DIRECTIONS {">"}</button>
      </Link>
    </div>
  );
};

export default Store;
