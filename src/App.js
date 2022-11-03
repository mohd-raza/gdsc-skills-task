import Agents from "./components/Agents";
import Blog from "./components/Blog";
import Feat from "./components/Feat";
import Find from "./components/Find";
import FindProp from "./components/FIndProp";
import FindPropWithoutHeader from "./components/FindPropWithoutHeader";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Find />
      <Gallery />
      <Feat />
      <FindProp />
      <FindPropWithoutHeader />
      <Recommend />
      <Agents />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
