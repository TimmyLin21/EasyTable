import { Star } from "../Icons/Star";

export const Rating = ({ rating }: { rating: number }) => {
  return (
    <span className="flex items-center gap-x-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} filled={index < rating} />
      ))}
    </span>
  );
};
