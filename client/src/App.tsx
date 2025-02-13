import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css";
import { useEffect, useState } from "react";
import type { IdoleGameI } from "./types/app";

function App() {
  const [data, setData] = useState<IdoleGameI[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/idole")
      .then((res) => res.json())
      .then((idoleGame) => setData(idoleGame));
  }, []);

  return (
    <>
      <header>
        <nav>
          <Header />
        </nav>
      </header>

      <main id="app">
        {data.map((el) => (
          <Card key={el.name} name={el.name} image={el.image} text={el.text} />
        ))}
      </main>

      <Footer />
    </>
  );
}

export default App;
