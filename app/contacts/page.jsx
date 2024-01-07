"use client";
import Navbar from "../components/Navbar/page";
import Footer from "../components/common/Footer";
import useScreenHandling from "../hooks/useScreenHandling";
import SmallDisplay from "./SmallDisplay";
import LargeDisplay from "./LargeDisplay";

const page = () => {
  const { wrapperStyle, screen } = useScreenHandling();

  if (screen === 0) {
    return <div></div>;
  }

  return (
    <div className="flex overflow-hidden max-h-screen flex-col w-full items-center">
      <div
        className={`${wrapperStyle} overflow-auto max-h-screen transition-all duration-500`}
      >
        <Navbar screen={screen} />
        {screen <= 1152 ? <SmallDisplay /> : <LargeDisplay />}
        <Footer screen={screen} />
      </div>
    </div>
  );
};

export default page;
