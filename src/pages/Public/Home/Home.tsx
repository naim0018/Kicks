import CommonWrapper from "@/common/CommonWrapper";
import Banner from "./Components/Banner";
import NewDrops from "./Components/NewDrops";
import Categories from "./Components/Categories";
import Reviews from "./Components/Reviews";
// import JoinKickPlus from "./Components/JoinKickPlus";

const Home = () => {
  return (
    <>
      <CommonWrapper>
        <Banner />
        <NewDrops />
      </CommonWrapper>

      <Categories />

      <CommonWrapper>
        <Reviews />
      </CommonWrapper>
    </>
  );
};

export default Home;
