import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

// CSS
import styles from "./TaskForm.module.css";

// Interfaces
import { ITask } from "../interfaces/Task";

interface Props {
  btnText: string;
  taskList: ITask[];
  // alterando o state de uma lista
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);

    const newTask: ITask = { id, title, difficulty };

    setTaskList!([...taskList, newTask]);

    setTitle("");
    setDifficulty(0);
    console.log(taskList);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }

    console.log(title);
    console.log(difficulty);
  };
  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          onChange={handleChange}
          value={title}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">difficulty: </label>
        <input
          type="number"
          name="difficulty"
          placeholder="Task Difficulty"
          onChange={handleChange}
          value={difficulty}
        />
      </div>
      <input type="Submit" value={btnText} onChange={handleChange} />
    </form>
  );
};

export default TaskForm;
