import { Fragment, useState } from "react";
import "./style.css";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const toggleSidebar = () => setShow(!show);

  return (
    <Fragment>
      <div
        className={`sidebar-backdrop ${show && "show"}`}
        onClick={toggleSidebar}
      ></div>

      <nav id="sidebar" className={`sidebar ${show && "show"}`}>
        <h2 className="title">
          <i className="bi bi-view-list"></i>
          Brand
        </h2>

        <ul>
          <li onClick={toggleSidebar} className="active">
            <i className="bi bi-graph-up"></i>
            Dashboard
          </li>
          <li onClick={toggleSidebar}>
            <i className="bi bi-envelope"></i>
            E-mail
          </li>
          <li onClick={toggleSidebar}>
            <i className="bi bi-chat"></i>
            Mensagens
          </li>
          <li onClick={toggleSidebar}>
            <i className="bi bi-calendar-event"></i>
            Calendário
          </li>
          <li onClick={toggleSidebar}>
            <i className="bi bi-bookmark"></i>
            Eventos
          </li>
          <li onClick={toggleSidebar}>
            <i className="bi bi-people"></i>
            Membros
          </li>
        </ul>
      </nav>

      <main id="main">
        <button onClick={toggleSidebar}>Abrir Sidebar</button>
      </main>
    </Fragment>
  );
};

export default Sidebar;
