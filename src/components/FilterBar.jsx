import React from "react";

export default function FilterBar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: 0,
          width: "83%",
        }}
      >
        <li style={{ margin: "10px", padding: "10px", borderRadius: "10px" }}>
          All Cute Animals
        </li>
        <li
          style={{
            margin: "10px",
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "#05e685",
          }}
        >
          Selectors Choice
        </li>
      </ul>
      <img src="./redi.png" alt="" width="100px" height="auto" />
    </div>
  );
}
