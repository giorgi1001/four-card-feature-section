import "./App.css";
import Calculator from "./components/Calculator";
import Karma from "./components/Karma";
import Supervisor from "./components/Supervisor";
import TeamBuilder from "./components/TeamBuilder";
import Starter from "./components/starter/Starter";

function App() {
  return (
    <>
      <Starter />
      <main>
        <Supervisor />
        <div className="couple-container">
          <TeamBuilder />
          <Karma />
        </div>
        <Calculator />
      </main>
    </>
  );
}

export default App;
