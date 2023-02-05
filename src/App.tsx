import  {FC, useState, useEffect } from "react";
import "./App.css";

const App: FC = () => {
  const [joke, setJoke] = useState<string>("");

  useEffect(() => {
    generateJoke();
  }, []);

  const generateJoke = async (): Promise<void> => {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    const res = await fetch("https://icanhazdadjoke.com", config);
    const data = await res.json();

    setJoke(data.joke);
  };

  return (
    <div className="container">
      <h3>Don't Laugh Challenge</h3>
      <div id="joke" className="joke">
        {joke}
      </div>
      <button id="jokeBtn" className="btn" onClick={generateJoke}>
        Get Another Joke
      </button>
    </div>
  );
};

export default App;
