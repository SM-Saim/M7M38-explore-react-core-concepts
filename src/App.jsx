import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Task from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import BookStore from "./BookStore";
function App() {
  const heros = [
    "Salman",
    "James Bond",
    "Stathom",
    "Tom",
    "Dasmond",
    "Rock",
    "Bourne",
  ];

  const booksCollection = [
    { id: 1, name: "Physics", price: 126 },
    { id: 2, name: "Math", price: 140 },
    { id: 3, name: "English", price: 160 },
    { id: 4, name: "Chemistry", price: 136 },
  ];

  const singer = [
    { id: 1, name: "Mahafuzur Rahaman", age: 60 },
    { id: 2, name: "Asif", age: 39 },
    { id: 3, name: "Runa", age: 65 },
  ];
  return (
    <>
      <h2>Vite + React</h2>
      <BookStore books={booksCollection}></BookStore>

      {singer.map((guyok) => (
        <Singer naam={guyok}></Singer>
      ))}

      <Actor name={"Bappa Raz"}></Actor>

      {heros.map((action) => (
        <Actor name={action}></Actor>
      ))}

      <Task task="Learn React" isDone={true}></Task>
      <Task task="Core Concepts React" isDone={false}></Task>
      <Task task="Learn jsx and props in React" isDone={true}></Task>
      <Device name="Laptop" price="30000"></Device>
      <Device name="Mobile" price="20000"></Device>
      <Device name="MacBook" price="70000"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade="8" score="33"></Student>
      <Student grade="6" score="55"></Student>
      <Developer></Developer>
    </>
  );
}

function Device(props) {
  return (
    <h2>
      This device is {props.name} and price is {props.price}
    </h2>
  );
}

function Person() {
  const age = 25;
  const newAge = 9;
  const people = { name: "Yusuf", age: 15 };
  return (
    <h2>
      I am {people.name} with age {age + newAge}
    </h2>
  );
}

// const { grade, score } = { grade: "7", score: "98" };
function Student({ grade = 1, score = 0 }) {
  return (
    <div className="student">
      <h3>This is a student profile.</h3>
      <p>Class:{grade}</p>
      <p>Score:{score}</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    border: "2px solid Green",
    padding: "20px",
    margin: "20px",
    borderRadius: "10px",
  };
  return (
    <div style={developerStyle}>
      <h2>I am a developer</h2>
    </div>
  );
}

export default App;
