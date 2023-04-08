import React, { useEffect, useState } from "react";
import TodoList from "@/components/TodoList";
import { getAllTodos } from "@/utils/supabaseFunctions";
import { addTodo } from "@/utils/supabaseFunctions";

export const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const getTodos = async () => {
      const allTodos = await getAllTodos();
      setTodos(allTodos);
    };
    getTodos();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (title === "") return;

    await addTodo(title);
    let todos = await getAllTodos(); //即時反映するために①
    setTodos(todos); //即時反映③
    setTitle(""); //submit後にinputの内容を空にする対応
  };

  return (
    <section>
      <h3>TodoApp</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="mr-2 shadow-lg p-1 outline-none"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        {/* value={title}即時反映② */}
        <button className="shadow-md border-2 px-1 rounded-lg bg-green-200">
          Add
        </button>
      </form>

      <TodoList todos={todos} setTodos={todos} />
    </section>
  );
};
export default TodoApp;
