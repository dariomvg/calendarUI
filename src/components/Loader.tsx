import { JSX } from "react";
import "@/styles/loader.css";

export const Loader = (): JSX.Element => {
  return (
    <section className="section-loader">
    <div className="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </section>

  );
};
