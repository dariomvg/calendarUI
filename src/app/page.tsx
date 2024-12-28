"use client";
import { useHandleCalendar } from "@/hooks/useHandleCalendar";
import "./page.css";
import iconAdd from "@/assets/add-circle.svg";
import iconInfo from "@/assets/info-circle.svg";
import { ModalDay } from "@/components/ModalDay";
import { ListTasks } from "@/components/ListTasks";
import { Loader } from "@/components/Loader";
import { Footer } from "@/components/Footer";

export default function Home() {
  const {
    currentDate,
    active,
    openList,
    handleViewtask,
    handleDay,
    closeModal,
    closeList,
    content,
    addTask,
    deleteTask,
    idDay,
    localDays,
  } = useHandleCalendar();

  return currentDate.name ? (
    <main className="page-calendar">
      <h1 className="title-calendar">CalendarUI</h1>
      <p className="title-month">{currentDate.name}</p>
      <table>
        <tbody>
          <tr>
            {currentDate.days &&
              localDays.slice(0, currentDate.days).map((day) => (
                <td key={day.id}>
                  <div className="header-td">
                    <p className="title-day">{day.id}</p>
                    <div>
                      <img
                        src={iconAdd.src}
                        alt="icon add circle"
                        width={25}
                        height={25}
                        onClick={() => handleDay(day.id)}
                        className="icon-day"
                      />
                      <img
                        src={iconInfo.src}
                        alt="icon information circle"
                        width={25}
                        height={25}
                        onClick={() => handleViewtask(day)}
                        className="icon-day"
                      />
                    </div>
                  </div>
                  <div className="container-tasks">
                    {day.content.length > 0
                      ? day.content.map(({ id, task }) => (
                          <p key={id} className="content-day">
                            {task}
                          </p>
                        ))
                      : null}
                  </div>
                </td>
              ))}
          </tr>
        </tbody>
      </table>

      {active && (
        <section className="section-modal">
          <ModalDay id={idDay} closeModal={closeModal} addTask={addTask} />
        </section>
      )}

      {openList && (
        <section className="section-modal">
          <ListTasks
            tasks={content}
            closeList={closeList}
            deleteTask={deleteTask}
          />
        </section>
      )}
      <Footer />
    </main>
  ) : (
    <Loader />
  );
}
