"use client";
import { getDate } from "@/libs/getCurrentDay";
import { Days, HookTypes, Month } from "@/types/types";
import { days } from "@/utils/days";
import { useEffect, useState } from "react";

const objCurrentDay = {
  name: "",
  year: 0,
  days: 0,
  firstDay: 0,
};

const objDay = { id: 0, content: [{ id: 0, task: "" }] };

export const useHandleCalendar = (): HookTypes => {
  const [currentDate, setCurrentDate] = useState<Month>(objCurrentDay);
  const [active, setActive] = useState<boolean>(false);
  const [openList, setOpenList] = useState<boolean>(false);
  const [idDay, setIdDay] = useState<number>(0);
  const [content, setContent] = useState<Days>(objDay);
  const [localDays, setLocalDays] = useState<Days[]>(days);

  useEffect(() => {
    const date = new Date();
    const newDate = getDate(date);
    const dataLocal = localStorage.getItem("calendarui");

    if (newDate) {
      setCurrentDate(newDate);
    }

    if (dataLocal && newDate.firstDay !== 1) {
      setLocalDays(JSON.parse(dataLocal));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("calendarui", JSON.stringify(localDays));
  }, [localDays]);

  const addTask = (task: string, id: number) => {
    setLocalDays(
      localDays.map((item) =>
        item.id === id
          ? { ...item, content: [...item.content, { id: Date.now(), task }] }
          : item
      )
    );
    closeModal();
  };

  const deleteTask = (idTask: number, idMain: number) => {
    setLocalDays(
      localDays.map((item) =>
        item.id === idMain
          ? {
              ...item,
              content: item.content.filter((task) => task.id !== idTask),
            }
          : item
      )
    );
    closeList();
  };

  const handleDay = (id: number) => {
    setIdDay(id);
    setActive(!active);
  };

  const handleViewtask = (day: Days) => {
    setContent(day);
    setOpenList(!openList);
  };

  const closeModal = () => setActive(!active);
  const closeList = () => setOpenList(!openList);

  return {
    currentDate,
    active,
    idDay,
    handleDay,
    closeModal,
    openList,
    closeList,
    handleViewtask,
    content,
    addTask,
    deleteTask,
    localDays,
  };
};
