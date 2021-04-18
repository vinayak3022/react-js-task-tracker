import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from "react";
import AddTask  from "./components/AddTask";

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([
        {id: 1,
            text: 'Practice',
            day: 'Monday',
            reminder: true,
        },
        {id: 2,
            text: 'Perform',
            day: 'Tuesday',
            reminder: true,
        },
        {id: 3,
            text: 'Overcome',
            day: 'Wednesday',
            reminder: true,
        }
    ])

    //Add task
    const addTask=(task)=>{
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
    }

    //Delete task
    const deleteTask=(id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    //Toggle reminder
    const toggleReminder=(id) => {
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }

  return (
    <div className="container">
      <Header
          onAdd={()=>setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
      > </Header>
        {showAddTask && <AddTask onAdd={addTask}></AddTask>}
        {tasks.length > 0 ? (<Tasks tasks={tasks}
                                   onDelete={deleteTask} onToggle={toggleReminder}>
        </Tasks>): ('No tasks')}
    </div>
  );
}

export default App;
