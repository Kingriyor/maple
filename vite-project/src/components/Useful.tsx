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

// useState renders everytime a change is detected

// useEffect runs at every render.
// BUT runs once on first render of the component when the "[]" is passed at the end

/* 
You can also specify a state to watch for changes in before useEffect re-renders. Eg below

const [name, setName] = useState("Ariyo");

useEffect(() => {
  console.log("re-render");
},[name]);

The above effect renders at the beginning and only when name state changes


*/
