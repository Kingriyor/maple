// Component function which must be PascalCasing
function Message() {
  // JSX javascript XML
  const name = "Ariyo";
  if (name) {
    // used just because
    // await fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //     return <h6>hola {JSON.stringify(json)}</h6>;
    //   });

    return <h1>Hello {name}</h1>;
  }
  return <h1>Hello Secret Agent</h1>;
}
export default Message;
