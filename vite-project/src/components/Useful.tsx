//  Spread Operators ------------------------------------------------------------------------------------------
const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;

// Destructuring ------------------------------------------------------------------------------------------
const vehicles = ["mustang", "f-150", "expedition"];
const [car, truck, suv] = vehicles;

// Array --------------------------------------------------------------------------------------------------------
const myArray = ["apple", "banana", "orange"];
const myList = myArray.map((item) => <p>{item}</p>);

// Ternary Operator -----------------------------------------------------------------------------------------

const authenticated = "";
const renderApp = () => {
  console.log("Render Authenticated App");
};
const renderLogin = () => {
  console.log("Reder Authention page");
};

// Before
if (authenticated) {
  renderApp();
} else {
  renderLogin();
}

// Using ternary operator
authenticated ? renderApp() : renderLogin();
