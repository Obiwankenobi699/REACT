const Sidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "280px" }}
    >
      <a
        href="#"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        onClick={(e) => {
          e.preventDefault();
          setSelectedTab("Home");
        }}
      >
        <svg
          className="bi pe-none me-2"
          width="40"
          height="32"
          aria-hidden="true"
        >
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>

      <hr />

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Home" ? "active" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab("Home");
            }}
          >
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#home" />
            </svg>
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Create post" ? "active" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab("Create post");
            }}
          >
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#speedometer2" />
            </svg>
            Create post
          </a>
        </li>
      </ul>

      {/* this is user card below*/}
      <hr />

      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={(e) => e.preventDefault()}
        >
          <img
            src="https://github.com/mdo.png"
            alt="mdo"
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              New project...
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Settings
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
