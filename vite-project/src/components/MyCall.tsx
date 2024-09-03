import React, { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  userId: number;
}

// async function fetchTodosOld(): Promise<Todo[]> {
//   const baseUrl = "https://jsonplaceholder.typicode.com";
//   const response = await fetch(baseUrl + "/todos");

//   let data = await response.json();

//   // shorten/paginate
//   // data = data.slice(0, 10);

//   // Filter json
//   data = data.filter((dataItem: { id: number }) => dataItem.id <= 10);

//   console.log(data);
//   return data;
// }

const MyCall = () => {
  const [todos, setTodos] = useState<Todo[] | []>([]);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = (Id: number) => {
    setTodos(todos.filter((todo) => todo.id != Id));
  };

  async function fetchTodos() {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    fetch(baseUrl + "/todos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // Filter json
        data = data.filter((dataItem: { id: number }) => dataItem.id <= 10);
        setTodos(data);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  }

  // This runs once on first render of the component (bacause of the "[]" passed at the end")
  useEffect(() => {
    fetchTodos();
  }, []);

  // // This runs once on first render of the component (bacause of the "[]" passed at the end")
  // useEffect(() => {
  //   async function executeFunc() {
  //     try {
  //       const data = await fetchTodosOld();
  //       setTodos(data);
  //     } catch (e) {
  //       console.log(e);
  //       setError(e);
  //     }
  //   }
  //   executeFunc();
  // }, []);

  if (error) {
    return <div>Error: {error}</div>;
  } else {
    return (
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <p className="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
              Id : {todo.id}
              <br></br>
              Title : {todo.title}
              <br></br>
              UserId : {todo.userId}
              <br></br>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </p>
          </div>
        ))}
      </div>
    );
  }
};

export default MyCall;
