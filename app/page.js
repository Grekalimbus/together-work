"use client";
import FirstDisplay from "./components/FirstDisplay";
import SecondDisplay from "./components/SecondDisplay";
import ThirdDisplay from "./components/ThirdDisplay";
import {Navbar} from "./components/Navbar";
import useScreenHandling from "./hooks/useScreenHandling";
import FourthDisplay from "./components/FourthDisplay";
import FifthDisplay from "./components/FifthDisplay";
import SixthDisplay from "./components/SIxthDisplay";
import Footer from "./components/Footer";


const page = () => {
  const {screenWidth, wrapperStyle, screen} =  useScreenHandling();
  if (screenWidth == 0 || screen === 0){
    return <div></div>
  }
  else{
    return (
      <main className="flex overflow-hidden max-h-screen flex-col w-full items-center">       
        <div
          className={`${wrapperStyle} overflow-auto max-h-screen transition-all duration-500`}
        >
          <Navbar screen={screen} screenWidth={screenWidth} />
          <FirstDisplay screen={screen} screenWidth={screenWidth} />
          <SecondDisplay screen={screen} screenWidth={screenWidth} />
          <ThirdDisplay screen={screen} screenWidth={screenWidth} />
          <FourthDisplay screen={screen} screenWidth={screenWidth} />
          <FifthDisplay screen={screen} screenWidth={screenWidth} />
          <SixthDisplay screen={screen} screenWidth={screenWidth} />
          <Footer screen={screen} screenWidth={screenWidth} />
        </div>
      </main>
    );
  }
};

export default page;
