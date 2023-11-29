// Working with COMPONENTS, PROPS and JSX of building React apps.

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
    displayCurrency: " $",
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10.5,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
    displayCurrency: " $",
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12.5,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
    displayCurrency: " $",
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
    displayCurrency: " $",
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15.5,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
    displayCurrency: " $",
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
    displayCurrency: " $",
  },
];

// Nesting Components: Pizza function was nested in the App.
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = {
  //   color: "darkblue",
  //   fontSize: "42px",
  //   textTransform: "uppercase",
  //   fontFamily: "verdana",
  // };

  const style = {};

  return (
    <header className="header">
      <h1 style={style}> Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cusine. 6 creative dishes to choose from. All from
            our oven, all organic and all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We`re still working on pur manu. Please come back later ;-)</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price={12}
        photoName="pizzas/spinaci.jpg"
        altName="Pizza Spinaci on the table"
      />

      <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        price={14 + 3}
        photoName="pizzas/focaccia.jpg"
        altName="Pizza focaccia on the table"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.altName} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>
          {pizzaObj.soldOut ? "Sold out" : pizzaObj.price}
          {pizzaObj.soldOut ? "" : pizzaObj.displayCurrency}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We`re currently open!");
  // else alert("Sorry, currently we`re not open!");

  // return (
  //   <footer className="footer">
  //     {new Date().toLocaleTimeString()}. We`re currently open!
  //   </footer>
  // );
  // return React.createElement(`footer`, null, "We`re currently open!");

  //

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We`re happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We`re open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// const Test = () =>

// React v18
// Strict mode does that during development it will render all components twice
// in order to find certain bugs and also React will check if we`re using outdated
// parts of the React API.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// JSX: extension of JS that allows us to embed JavaScript,
// CSS and React components into HTML.
// So, Decorative syntax to Describe what components Look like
// adn How they work.
