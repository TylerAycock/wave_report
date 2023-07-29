import { useState, useEffect } from "react";
import axios from "axios";
import Card from '../components/card_details/Card'

const HomeScreen = () => {
  const [waveReport, setWaveReport] = useState({
    "latitude": 32.5,
    "longitude": -117.5,
    "generationtime_ms": 0.3529787063598633,
    "utc_offset_seconds": -25200,
    "timezone": "America/Los_Angeles",
    "timezone_abbreviation": "PDT",
    "daily_units": {
        "time": "iso8601",
        "wave_height_max": "m",
        "wave_direction_dominant": "°",
        "wave_period_max": "s"
    },
    "daily": {
        "time": [
            "2023-07-03",
            "2023-07-04",
            "2023-07-05",
            "2023-07-06",
            "2023-07-07"
        ],
        "wave_height_max": [
            1.32,
            1.40,
            1.46,
            1.54,
            1.56
        ],
        "wave_direction_dominant": [
            223,
            221,
            216,
            217,
            239
        ],
        "wave_period_max": [
            11.50,
            10.75,
            11.10,
            10.90,
            9.50
        ]
    }
});

//   let getWaves = async () => {
//     try {
//       let res = await axios.get(
//         "https://marine-api.open-meteo.com/v1/marine?latitude=32.7157&longitude=-117.1647&start_date=2023-07-03&end_date=2023-07-07&daily=wave_height_max,wave_direction_dominant,wave_period_max&timezone=America%2FLos_Angeles"
//       );
//       console.log(res.data);
//       setWaveReport(res.data.daily);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getWaves();
//   }, []);

  return (
    <div>
      <p>Welcome!</p>
      <Card waveReport={waveReport}></Card>
      <Date waveReport={waveReport}/>
      {/* <ul>{theDate}</ul> */}
    </div>
  );
};

export default HomeScreen;


