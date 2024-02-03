import { useEffect, useState } from "react";
import Navbar from "../components/navbar/index";
import KeyBoard from "../components/KeyBoard/KeyBoard";
import Try from "../components/Try/index";
import instance from "../axios";
import axios from 'axios'
import Modal from "../components/modal/modal";

function Home() {
  const [currentTry, setCurrentTry] = useState(0);
  const [tries, setTries] = useState([""]);
  const [message, setMessage] = useState(null);
  const [randomWord, setRandomWord] = useState(null);

  useEffect(() => {
    axios.get("https://random-word-api.herokuapp.com/word?length=5").then(res => {
      setRandomWord(res.data[0]);
    }).catch((err) => {
      console.log(err.message);
    });
  }, []);

  const handleKeyClick = (key) => {
    let temp_tries; // using this varibales to introduce changes without directly mutating the state
    if (key === "enter") {
      if (tries[currentTry].length === 5) {
        if (tries[currentTry] === randomWord.toUpperCase()) {
          setMessage("You Won!!!"); // TODO: add animation and styles to modal
        } else {
          instance
            .get(tries[currentTry])
            .then((res) => {
              // 200 ok status means word exists
              temp_tries = [...tries, ""];
              setTries(temp_tries);
              setCurrentTry(currentTry + 1);
              setMessage("Wrong word! Try again");
              setTimeout(() => {
                setMessage(null);
              }, 1500);
            })
            .catch((err) => {
              console.log(err.message);
              setMessage("word doesn't exist"); // TODO: add animation and styles to modal
              setTimeout(() => {
                setMessage(null);
              }, 1500);
            });
        }
      }
    } else if (key === "erase") {
      temp_tries = [...tries];
      temp_tries[currentTry] = temp_tries[currentTry].slice(0, -1);
      setTries(temp_tries);
    } else if (tries[currentTry].length < 5) {
      temp_tries = [...tries];
      temp_tries[currentTry] += key;
      setTries(temp_tries);
    } else {
      setMessage("You can only enter 5 letters");
      setTimeout(() => {
        setMessage(null);
      }, 1500);
    }
  };

  return (
    <>
      <Navbar />
      <div className="content">
        {message && <Modal message={message} />}
        {tries.map((word, index) => {
          return <Try word={word} key={index} />;
        })}

        <KeyBoard onKeyClick={handleKeyClick} />
      </div>
    </>
  );
}
export default Home;
