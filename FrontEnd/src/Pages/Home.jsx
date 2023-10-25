import HeaderVideo from "../components/HeaderVideo";
import StorySection from "../components/StorySection";
import FeaturesSection from "../components/FeaturesSection";
import Header from "../components/Header";
import TinyCardContainer from "../components/TinyCardContainer";


export default function Home() {

  return (
    <div>
      <Header />
      <TinyCardContainer />
      <HeaderVideo />
      <FeaturesSection />
      <StorySection />
    </div>
  );
}
