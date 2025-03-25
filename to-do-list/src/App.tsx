import React, { useState } from "react";

// CSS
import styles from "./App.module.css";

// Interfaces
import { ITask } from "./interfaces/Task";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <div>
          <h2>What to do?</h2>
          <TaskForm
            btnText="Create Task"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>your Tasks: </h2>
          <TaskList taskList={taskList} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
