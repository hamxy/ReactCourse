import Card from "./components/Card/Card";
import { CARD } from "./data.js";

import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="cardWrapper">
          <Card title={CARD[0].title} paragraph={CARD[0].paragraph} />
          <Card {...CARD[1]} />
          <Card {...CARD[2]} />
          <Card {...CARD[3]} />
        </div>
      </main>
    </>
  );
}

export default App;
