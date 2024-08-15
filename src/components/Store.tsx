import Link from "next/link";
import { IoStarSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { StorePropTypes } from "@/types/store";
import { IoStarOutline } from "react-icons/io5";
import { IoIosStarHalf } from "react-icons/io";

const Store: React.FC<StorePropTypes> = ({ details }) => {
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
          {[...Array(5)].map((element, i) => {
            if (Math.floor(averageRating) > i) {
              return <IoStarSharp className="rating" key={i} />;
            } else if (averageRating - Math.floor(averageRating) >= 0.5) {
              return <IoIosStarHalf className="rating" key={i} />;
            } else {
              return <IoStarOutline className="rating" key={i} />;
            }
          })}
        </span>
      </p>
      <p>{phoneNumber}</p>
      <p className="store-address">
        {address}, {city}, {state}, {pincode}
      </p>
      <Link href={gmbMapUrl} target="_blank" rel="noopener noreferrer">
        <button>
          GET DIRECTIONS <IoIosArrowForward />
        </button>
      </Link>
    </div>
  );
};

export default Store;
