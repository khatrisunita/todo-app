import logo from "./logo.svg";
import "./App.css";
import TestingItem from "./Testingitem";
import "bootstrap/dist/css/bootstrap.min.css";
import { List, Typography } from "antd";
import Item from "antd/es/list/Item";
import { useEffect, useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button } from "bootstrap";

function App() {
  const [taskName, setTaskName] = useState("");
  const [editItem, setEditItem] = useState(false);

  //let [myTodoList ,setTodolist]=useState([])
  //   {
  //     id: 1,
  //     task_name: "(Major task 1)",
  //     completed: false,
  //   },
  //   {
  //     id: 2,
  //     task_name: "(Major task 2)",
  //     completed: false,
  //   },
  //   {
  //     id: 3,
  //     task_name: "(Major task 3)",
  //     completed: false,
  //   },
  // ]);
  const [myTodoList, setTodolist] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setTodolist(data.todos));
  }, []);
  // fetch("http://dummyjson.com/todos")
  // .then((res) => console.log("success"))
  // .catch((e) => console.log("failure"))
  // .finally((res) => console.log("everything done"));

  const changefun = (id) => {
    let updatedArray = myTodoList.map((item) => {
      if (item.id == id) {
        return { ...item, completed: !item.completed };
      } else {
        return item;
      }
    });
    setTodolist(updatedArray);

    // myTodoList[index].completed=true;
    // setTodolist([...myTodoList, {
    //  ...myTodoList[index],
    // completed=true,
  };
  const deleteItems = (id) => {
    const filteredItems = myTodoList.filter((item) => {
      return item.id != id;
    });
    setTodolist(filteredItems);
  };

  const updateTaskList = () => {
    setTodolist([
      ...myTodoList,
      {
        id: 4,
        task_name: taskName,
        completed: false,
      },
    ]);
  };
  function changeFunc(id) {}
  return (
    <div className="all_wrapper">
      <h1> My name is Sunita Khatri </h1>
      <div className="creating">
        <ul className={"todo_wrapper"}>
          {myTodoList.map((item, index) => {
            return (
              <li
                key={item.id}
                className={`single_task ${
                  item.completed ? "complete" : "uncomplet"
                }`}
              >
                {item.task_name}
                <div className="action_wrapper">
                  <div className="action">
                    <input
                      type="checkbox"
                      onChange={(e) => changeFunc(item.id)}
                    />
                  </div>
                  <DeleteOutlined onClick={() => deleteItems(item.id)} />
                  <EditOutlined onClick={() => editItem(item.id)} />
                </div>
              </li>
            );
          })}
        </ul>
        <div className="input_wrapper">
          <input
            type="text"
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
          />
          <button
            className=" ml-3 btn btn-primary"
            disable={taskName == "" ? true : false}
            onClick={() => updateTaskList()}
          >
            ceate new task
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
