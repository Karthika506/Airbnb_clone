import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
// import image from "./images/katie-zaferes.png";
import data from "./data";
// console.log(data);

function App() {
  // const date = new Date();
  // const hours = new Date().getHours();
  // let timeOfDay;

  // if (hours < 12) {
  //   timeOfDay = "morning";
  // } else if (hours >= 12 && hours < 17) {
  //   timeOfDay = "afternoon";
  // } else {
  //   timeOfDay = "night";
  // }

  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  console.log("new");
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
      {/* <h1>Good {timeOfDay}!</h1> */}
    </div>
  );
}

export default App;
