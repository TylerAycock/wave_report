import "./Date.css";
const Date = ({ date }) => {
  let months = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    '10': "October",
    '11': "November",
    '12': "December",
  };

  console.log(date);
  let ind = date.split("-");
  let month = months[ind[1]];
  let day = ind[2];
  return (
    <div className="date">
      <h2 className="month">{month}</h2>
      <p className="day">{day}</p>
    </div>
  );
};
export default Date;
