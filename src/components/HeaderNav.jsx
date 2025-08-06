import "./styles/HeaderNav.css";

const HeaderNav = ({ title, sub_title, btn1, btn2, btn3, btn4, about }) => (
  <ul className="header-nav-box">
    <div className="header-nav-title-box">
      <li className="header-nav-title">{title}</li>
      <li className="header-nav-sub-title">{sub_title}</li>
    </div>
    <div className="header-nav-decs-box">
      <li className="header-nav-decs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-house-icon lucide-house"
        >
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
          <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
        <a href="#home" className="header-nav-link">
          {btn1}
        </a>
      </li>
    </div>
    <div className="header-nav-decs-box">
      <li className="header-nav-decs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-user-round-icon lucide-user-round"
        >
          <circle cx="12" cy="8" r="5" />
          <path d="M20 21a8 8 0 0 0-16 0" />
        </svg>
        <a href="#profile" className="header-nav-link">
          {btn2}
        </a>
      </li>
    </div>

    <div className="header-nav-decs-box">
      <li className="header-nav-decs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-computer-icon lucide-computer"
        >
          <rect width="14" height="8" x="5" y="2" rx="2" />
          <rect width="20" height="8" x="2" y="14" rx="2" />
          <path d="M6 18h2" />
          <path d="M12 18h6" />
        </svg>
        <a href="#portpolio" className="header-nav-link">
          {btn3}
        </a>
      </li>
    </div>
    <div className="header-nav-decs-box">
      <li className="header-nav-decs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-link-icon lucide-link"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
        <a href="#link" className="header-nav-link">
          {btn4}
        </a>
      </li>
    </div>
    <li className="header-nav-ps">{about}</li>
  </ul>
);

export default HeaderNav;
