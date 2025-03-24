import React from "react";

// CSS
import styles from "./TaskForm.module.css";

interface Props {
  btnText: string;
}

const TaskForm = ({ btnText }: Props) => {
  return (
    <form className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" placeholder="Task Title" />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">difficulty: </label>
        <input type="text" name="difficulty" placeholder="Task Difficulty" />
      </div>
      <input type="Submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
