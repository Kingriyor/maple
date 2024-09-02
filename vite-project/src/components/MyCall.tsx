import React, { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  userId: number;
}

async function fetchTodos(): Promise<Todo[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  let data = await response.json();
  // shorten/paginate
  data = data.slice(0, 10);
  console.log(data);
  return data;
}

function MyCall() {
  const [todos, setTodos] = useState<Todo[] | []>([]);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   try {
  //     fetchTodos().then((data) => setTodos(data));
  //   } catch (e) {
  //     setError(e.Message);
  //   }
  // }, []);

  // useEffect(() => {
  //   fetchTodos()
  //     .then((data) => setTodos(data))
  //     .catch((e) => setError(e.message)); // Corrected error handling
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTodos();
        setTodos(data);
      } catch (e) {
        console.log(e);
        setError(e);
      }
    };

    fetchData();
  }, []);

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
            </p>
          </div>
        ))}
      </div>
    );
  }
}

// export const myCall = () => {
//   return <div>myCall</div>;
// };

export default MyCall;
