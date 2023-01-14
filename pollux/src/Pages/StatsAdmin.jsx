import React from "react";
//import "./statsCounter.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Statistics = () => {
  return (
    <div>
      <div className="stats">
        <ul className="stats-bar">
          <li className="column post1">
            {/* <MdEditCalendar size={'4em'}/> */}
            <h6>Active Posts</h6>
            <h4>50</h4>
          </li>

          <li className="column post1">
            {/* <BsPatchCheck size={'4em'}/> */}
            <h6>Visits per day</h6>
            <h4>100</h4>
          </li>

          <li className="column post1">
            {/* <BsEye size={'4em'}/> */}
            <h6>Login per Day</h6>
            <h4>5</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Statistics;