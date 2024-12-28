"use client";
import { PropsModalDay } from "@/types/types";
import "@/styles/modal-day.css";
import { FormEvent, useState } from "react";

export const ModalDay = ({ id, closeModal, addTask }: PropsModalDay) => {
  const [form, setForm] = useState<string>("");

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(form, id);
    setForm("");
  };

  return (
    <form className="form-day" onSubmit={submitForm}>
      <button onClick={closeModal} className="button-close">
        Cerrar
      </button>
      <h2 className="title-form">Agrega la tarea del día</h2>
      <input
        type="text"
        className="input-day"
        name="task"
        value={form}
        onChange={(e) => setForm(e.target.value)}
        placeholder="Escribe aquí..."
      />
      <button type="submit" className="btn-modal">Agregar</button>
    </form>
  );
};
