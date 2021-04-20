import React from "react";
// Redux
import { useSelector } from "react-redux";
// Components
import CardContainer from "../components/CardContainer";
import BannerWelcome from "../components/BannerWelcome";

const Home = () => {
  const categoriesData = useSelector((state) => state.categorias);
  return (
    <div>
      <BannerWelcome />
      {categoriesData.payload &&
        categoriesData.payload.map((data) => {
          return <CardContainer title={data} key={data} />;
        })}
    </div>
  );
};

export default Home;
