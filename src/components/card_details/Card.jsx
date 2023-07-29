import Date from "./Date";
import Height from "./Height";
import "./Card.css";

const Card = ({ waveReport }) => {

    let date = waveReport.daily.time.map((date, index) => {
      return <Date key={index} date={date} />;
    });
    let height = waveReport.daily.wave_height_max.map((wave, index) => {
      return <Height key={index} wave={wave} />;
    });



  return (
    <div className="card">
        {date}
        {height}
    </div>
  );
};

export default Card;
