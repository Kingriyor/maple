import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
// import TimeC from "./components/TimeC";
import { useState } from "react";
import Alert from "./components/Alert";
import MyButton from "./components/MyButton";
// import { Fragment } from "react/jsx-runtime"; // or use <></>
import MyCall from "./components/MyCall";
import MyTime from "./components/MyTime";
import Car from "./components/Car";
import Car2 from "./components/Car2";

function App() {
  const BaseUrl = "https://jsonplaceholder.typicode.com";
  let cities = ["Lagos", "Abuja", "Portharcourt", "Asaba", "Owerri"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [isAlertVisible, setAlertVisibility] = useState(false);

  const onClose = () => {
    setAlertVisibility(false);
  };

  return (
    <>
      {/* <Car2 brand="Ford" model="Mustang" color="red" year={1994}></Car2> */}
      {/* <MyTime /> */}
      <MyCall />
      <Car />
      {/* <Message /> */}
      {/* <TimeC /> */}
      {/* <ListGroup
        items={cities}
        title="Cities"
        onSelectedItem={() => handleSelectItem("Riyo")}
      /> */}

      {/* {<Alert text="Ariyo" />} */}
      {/* {isAlertVisible && (
        <Alert onClose={onClose}>
          <p>Ariyo Children</p>
        </Alert>
      )} */}

      {/* <MyButton
        onClick={() => {
          console.log("Clicked");
          setAlertVisibility(true);
        }}
        color="primary"
      >
        Ariyo
      </MyButton> */}
    </>
  );
}
export default App;
