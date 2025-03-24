import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

// CSS
import styles from "./App.module.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import { ITask } from "./interfaces/Task";

function App() {
  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <div>
          <h2>What to do?</h2>
          <TaskForm btnText="Create Task" />
        </div>
        <div>
          <h2>your Tasks: </h2>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
