import { PropsListTasks } from "@/types/types";
import { JSX } from "react";
import "@/styles/list-tasks.css";

export const ListTasks = ({
  tasks,
  closeList,
  deleteTask,
}: PropsListTasks): JSX.Element => {
  return (
    <section className="list-tasks">
      <button className="btn-list" onClick={closeList}>
        Cerrar lista
      </button>
      <div className="cont-tasks">
        {tasks.content.length > 0 ? (
          tasks.content.map(({ id, task }) => (
            <div key={id} className="item-task">
              <p>{task}</p>
              <button onClick={() => deleteTask(id, tasks.id)}>Eliminar</button>
            </div>
          ))
        ) : (
          <h2 className="title-not-tasks">Sin tareas agregadas</h2>
        )}
      </div>
    </section>
  );
};
