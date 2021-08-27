import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "routes/logo.jpg";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ userObj }) => (
  <nav>
    <head style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
      <li className="home-logo">
        <Link to="/" style={{ marginRight: 10 }}>
          <img
            name="logo"
            src={logo}
            width="150"
            height="100"
            border="3"
            alt=""
          />
        </Link>
      </li>
      <li className="home-faUser">
        <Link
          to="/profile"
          style={{
            marginLeft: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: 12,
          }}
        >
          <FontAwesomeIcon icon={faUser} color={"#1e1e1e"} size="2x" />
          <span style={{ marginTop: 10 }}>
            {userObj.displayName
              ? `${userObj.displayName}의 Profile`
              : "Profile"}
          </span>
        </Link>
      </li>
    </head>
  </nav>
);
export default Navigation;
