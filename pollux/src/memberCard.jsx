import React from "react";

function Member(props) {
  return (
    <img
      class="member"
      style={{ borderRadius: "50%" }}
      src={props.img}
      alt=""
    />
  );
}

export default Member;
