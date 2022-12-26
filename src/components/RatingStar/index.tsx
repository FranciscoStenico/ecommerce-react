import { RiStarFill, RiStarLine } from "react-icons/ri";
import { IRatingProps } from "../../interfaces/components.interface";

const RatingStars = ({ rating }: IRatingProps) => {
  return (
    <div className="card__rating-stars">
      <RiStarFill size={14} />
      {rating >= 2 ? <RiStarFill size={14} /> : <RiStarLine size={14} />}
      {rating >= 3 ? <RiStarFill size={14} /> : <RiStarLine size={14} />}
      {rating >= 4 ? <RiStarFill size={14} /> : <RiStarLine size={14} />}
      {rating === 5 ? <RiStarFill size={14} /> : <RiStarLine size={14} />}
    </div>
  );
};

export default RatingStars;
