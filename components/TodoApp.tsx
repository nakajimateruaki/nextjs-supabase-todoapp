import React, { useEffect, useState } from "react";
import TodoList from "@/components/TodoList";
import { getAllTodos } from "@/utils/supabaseFunctions";
import { addTodo } from "@/utils/supabaseFunctions";
import { Todo } from "@/utils/interface";

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]); // Todo型を使用する
  const [title, setTitle] = useState("");

  useEffect(() => {
    const getTodos = async () => {
      const allTodos = await getAllTodos();
      setTodos(allTodos ? (allTodos as Todo[]) : []);
    };
    getTodos();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (title === "") return;

    await addTodo(title);
    let allTodos = await getAllTodos(); //即時反映するために①
    setTodos(allTodos ? (allTodos as Todo[]) : []);
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

      <TodoList todos={todos} setTodos={setTodos} />
    </section>
  );
};
export default TodoApp;
