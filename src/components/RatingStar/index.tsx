import { RiStarFill, RiStarLine } from "react-icons/ri";
import { IRatingProps } from "../../interfaces/components.interface";

const RatingStars = ({ rating }: IRatingProps) => {
  return (
    <div className="card__rating-stars">
      <RiStarFill size={14} color="var(--tile-blue)" />
      {rating >= 2 ? (
        <RiStarFill size={14} color="var(--tile-blue)" />
      ) : (
        <RiStarLine size={14} color="var(--tile-blue)" />
      )}
      {rating >= 3 ? (
        <RiStarFill size={14} color="var(--tile-blue)" />
      ) : (
        <RiStarLine size={14} color="var(--tile-blue)" />
      )}
      {rating >= 4 ? (
        <RiStarFill size={14} color="var(--tile-blue)" />
      ) : (
        <RiStarLine size={14} color="var(--tile-blue)" />
      )}
      {rating === 5 ? (
        <RiStarFill size={14} color="var(--tile-blue)" />
      ) : (
        <RiStarLine size={14} color="var(--tile-blue)" />
      )}
    </div>
  );
};

export default RatingStars;
