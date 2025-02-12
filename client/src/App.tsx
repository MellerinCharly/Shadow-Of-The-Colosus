import { Route, BrowserRouter as Routes } from "react-router-dom";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manage-idole" element={<ManageIdole />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

const Home: React.FC = () => <div>Page d'accueil</div>;
const ManageIdole: React.FC = () => <div>Gestion des Idoles</div>;
const Login: React.FC = () => <div>Page de connexion</div>;

export default App;
