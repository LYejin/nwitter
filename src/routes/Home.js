import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Home = ({ userObj }) => {
  const history = useHistory();

  const eatTogetherClick = () => {
    history.push("/eatTogether");
  };
  const goodsTogetherClick = () => {
    history.push("/goodsTogether");
  };
  const taxiTogetherClick = () => {
    history.push("/taxiTogether");
  };
  return (
    <div>
      <div className="eatTogetherClick">
        <span onClick={eatTogetherClick}>배달 같이</span>
      </div>

      <div className="goodsTogetherClick">
        <span onClick={goodsTogetherClick}>물건 같이</span>
      </div>

      <div className="taxiTogetherClick">
        <span onClick={taxiTogetherClick}>택시 같이</span>
      </div>
    </div>
  );
};

export default Home;
