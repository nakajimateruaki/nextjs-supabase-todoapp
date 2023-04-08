import { type } from "os";
import React from "react";
import { deleteTodo, getAllTodos } from "@/utils/supabaseFunctions";
import { Todo } from "@/utils/interface";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const TodoList = (props: Props) => {
  const { todos, setTodos } = props;

  const handleDelete = async (id: number) => {
    await deleteTodo(id);
    const allTodos = await getAllTodos();
    console.log(allTodos);
    setTodos(allTodos ? (allTodos as Todo[]) : []);
  };
  return (
    <div>
      <ul className="mx-auto">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex bg-orange-200 rouded-md mt-2 mb-2 p-2 justify-between"
          >
            <div>{todo.title}</div>
            <span
              className="cursor-pointer"
              onClick={() => handleDelete(todo.id)}
            >
              ❎
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
