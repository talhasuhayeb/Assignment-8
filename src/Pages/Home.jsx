import { Outlet, useLoaderData } from "react-router-dom";
import Heading from "../Components/Heading";
import Hero from "../Components/Hero";
import Category from "../Components/Category";

const Home = () => {
  const categories = useLoaderData();
  return (
    <>
      <Hero />
      <Heading title={"Explore Cutting-Edge Gadgets"} />
      {/* Chategory Tab */}
      <div className="flex space-x-20">
        <Category categories={categories} />
        {/* Dynamic Component */}
        <Outlet />
      </div>
    </>
  );
};

export default Home;
