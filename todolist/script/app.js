const todos = [];

function addTodo() {
  const todoName = document.getElementById("todoInput").value;
  const currentTime = new Date();

  const todo = {
    name: todoName,
    createdTime: `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`,
  };

  todos.push(todo);
  console.log(todos);
}
