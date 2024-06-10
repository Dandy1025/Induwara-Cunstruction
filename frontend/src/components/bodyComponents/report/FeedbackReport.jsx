import React, { useState } from "react";
import '../../../styles/Setting.css';



const FeedbackReport = ({ feedback }) => {
  const [sortKey, setSortKey] = useState("date");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const filteredFeedback = feedback.filter((fb) => fb.rating >= ratingFilter);

  const sortedFeedback = [...filteredFeedback].sort((a, b) => {
    if (sortKey === "date") {
      return new Date(a.date) - new Date(b.date);
    }
    if (sortKey === "rating") {
      return a.rating - b.rating;
    }
    return 0;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedFeedback = sortedFeedback.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="feedback-report">
      <h2>Feedback Report</h2>
      <div className="controls">
        <label>
          Sort by:
          <select onChange={(e) => setSortKey(e.target.value)}>
            <option value="date">Date</option>
            <option value="rating">Rating</option>
          </select>
        </label>
        <label>
          Filter by rating:
          <input
            type="number"
            min="0"
            max="5"
            value={ratingFilter}
            onChange={(e) => setRatingFilter(Number(e.target.value))}
          />
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Date</th>
            <th>Rating</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {paginatedFeedback.map((fb, index) => (
            <tr key={index}>
              <td>{fb.username}</td>
              <td>{fb.date}</td>
              <td>{fb.rating}</td>
              <td>{fb.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={startIndex + itemsPerPage >= filteredFeedback.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FeedbackReport;
