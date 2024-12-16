import "./App.css";
import Card from "./components/Card";

function App() {

  return (
    <>
      <h1 className="bg-green-400 text-black p-2 rounded-xl mb-4">Tailwind test</h1>
      <Card username = "alam" btnText = "click me"/>
      <Card username = "perwej" btnText = "visit me"/>
    </>
  );
}

export default App;
