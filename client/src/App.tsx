import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Card
        idolImage="https://i.ibb.co/Mx6q21Np/1-guide-shadow-of-the-colossus-nom-colosse-01-valus.webp"
        idolName="Valus"
        idolDescription="The 1st Colossus, resembling a minotaur, is one of sixteen bosses fought in Shadow of the Colossus. Located a short way directly south of the Shrine of Worship, this humanoid colossus makes its home on a flat area accessible only from climbing the vines and ruins dotting a tall cliff."
      />
      <Footer />
    </>
  );
}

export default App;
