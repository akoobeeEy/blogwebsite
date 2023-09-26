import { Fragment } from "react";
import { HomePosts, HomeTop,HomeCategoryPost } from "../index";
const Home = () => {
  return (
    <Fragment>
      <HomeTop />
      <div className="container mx-auto">
          <HomePosts/>
          <HomeCategoryPost/>
      </div>
    </Fragment>
  );
};

export default Home;
