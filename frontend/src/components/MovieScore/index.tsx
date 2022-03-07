import MovieStars from "../MovieStarts";
import "./style.css";
function MovieScore() {

    var score = 3.5;
    var count = 14;
  return (
    <div className="dsmovie-stars-container">
      <div className="dsmovie-score-container">
        <p className="dsmovie-score-value">
          {score > 0 ? score.toFixed(1) : "-"}
        </p>
        <MovieStars />
        <p className="dsmovie-score-count">{count} avaliações</p>
      </div>
    </div>
  );
}

export default MovieScore;
