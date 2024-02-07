import { useEffect, useState } from "react";
import Navbar from "../components/navbar/index";
import KeyBoard from "../components/KeyBoard/KeyBoard";
import Try from "../components/Try/index";
import axios from 'axios'
import Modal from "../components/modal/modal";
import React from "react";

function Home() {
  const [currentTry, setCurrentTry] = useState(0);
  const [tries, setTries] = useState([""]);
  const [message, setMessage] = useState<string>("");
  const [randomWord, setRandomWord] = useState<string>("");

  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word?length=5").then(res => res.json()).then(words=>setRandomWord(words[0])).catch((err) => {
      console.log(err.message);
    });
  }, []);

  const handleKeyClick = (key) => {
    let temp_tries; // using this variable to introduce changes without directly mutating the state
    if (key === "enter" && tries[currentTry].length === 5) {
      if (tries[currentTry] === randomWord.toUpperCase()) {
        setMessage("You Won!!!"); // TODO: add animation and styles to modal
        return;
      }
      fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+tries[currentTry], {
        'method': 'HEAD'
      })
        .then((res) => {
          temp_tries = [...tries, ""];
          setTries(temp_tries);
          setCurrentTry(currentTry + 1);
          setMessage("Wrong word! Try again");
          setTimeout(() => setMessage(""), 1500);
        })
        .catch((err) => {
          console.error(err.message);
          setMessage("word doesn't exist"); // TODO: add animation and styles to modal
          setTimeout(() => setMessage(""), 1500);
        });
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
      setTimeout(() => setMessage(""), 1500);
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
