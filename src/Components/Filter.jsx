import React from "react";
import StarRating from "./StarRating";

const Filter = ({
  titleFilter,
  rateFilter,
  handleTitleFiler,
  handleRateFilter,
}) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={(e) => handleTitleFiler(e.target.value)}
      />
      <StarRating rateFilter={rateFilter} handleRateFilter={handleRateFilter} />
    </div>
  );
};

export default Filter;
