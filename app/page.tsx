import NavBar from "./components/NavBar";
import NavMessage from "./components/NavMessage";
import Hero from "./components/Hero";
import HomeMessage from "./components/HomeMessage";
import MessageToAction from "./components/MessageToAction";
import CtaPage from "./components/CtaPage";
import ReviewPage from "./components/ReviewPage";
import GetStarted from "./components/GetStarted";
import FooterPage from "./components/FooterPage";

const Page = () => {
  return (
    <>
      <NavBar />
      <NavMessage />
      <Hero />
      <HomeMessage />
      <MessageToAction />
      <CtaPage />
      <ReviewPage />
      <GetStarted />
      <FooterPage />
    </>
  )
}

export default Page