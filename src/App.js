import "./scss/_reset.scss";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";
import Footer from "./components/Footer";

// console.log(data);
function App() {
  return (
    <>
      <Header />
      <Card data={data} />
      <Footer />
    </>
  );
}

export default App;
