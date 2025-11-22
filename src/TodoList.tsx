import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

function TodoList() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = () => {
    if (inputValue === '') return;

    const newTodo: Todo = {
        id: Date.now(),
        text: inputValue,
        isCompleted: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
    };

    const toggleComplete = (id: number) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isCompleted: !todo.isCompleted };
            }
            return todo;
        });
        setTodos(newTodos);
    }

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">나만의 투두리스트</h1>

                <div className="mb-4 flex gap-2">
                    <input
                    type="text"
                    className="w-full rounded border border-gray-300 p-2 outline-none focus:border-blue-500"
                    placeholder="할 일을 입력하세요."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button
                    onClick={addTodo}
                    className="shrink-0 whitespace-nowrap rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                    >추가</button>
                </div>

                <div className="flex flex-col gap-2">
                    {todos.map((todo) => (
                        <div
                        key={todo.id}
                        className="flex items-center justify-between rounded border p-3 hover:bg-gray-50">
                            <div className="flex items-center gap-2">
                                <input
                                type="checkbox"
                                checked={todo.isCompleted}
                                onChange={() => toggleComplete(todo.id)}
                                className="h-4 w-4 cursor-pointer"
                                />
                                <span
                                onClick={() => toggleComplete(todo.id)}
                                className={`cursor-pointer ${
                                    todo.isCompleted ? 'text-gray-400 line-through' : 'texy-gray-800'
                                }`}
                                >
                                {todo.text}
                                </span>
                                </div>
                                <button
                                onClick={() => deleteTodo(todo.id)}
                                className="text-sm text-red-500 hover:text-red-700"
                                >삭제
                                </button>
                                </div>
                    ))}
                </div>
            </div>
        </div>
    );

  }

  export default TodoList;