import React from "react";

const TodosPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();
  return (
    <div>
      <h1 className="text-4xl font-bold">Todos</h1>
      <div className="grid grid-cols-3 gap-4">
        {todos &&
          Array.isArray(todos) &&
          todos.map((todo: Any) => (
            <div key={todo.id} className="border p-5 shadow-lg rounded-lg">
              <h4>{todo.title}</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodosPage;
