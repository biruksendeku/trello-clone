import NavBar from "./components/NavBar";
import NavMessage from "./components/NavMessage";
import Hero from "./components/Hero";
import HomeMessage from "./components/HomeMessage";
import MessageToAction from "./components/MessageToAction";
import CtaPage from "./components/CtaPage";
import ReviewPage from "./components/ReviewPage";

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
    </>
  )
}

export default Page