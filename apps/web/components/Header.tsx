import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faGem from "@fortawesome/fontawesome-free-regular/faGem";

interface Header {
  onOpenArticle: () => void;
  timeout: boolean;
}

const Header = ({ onOpenArticle, timeout }: Header) => (
  <header id="header" style={timeout ? { display: "none" } : {}}>
    <div className="logo">
      {/*<span className="icon fa-diamond"></span>*/}
      <FontAwesomeIcon icon={faGem} transform="grow-18" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Dimension</h1>
        <p>
          A fully responsive site template designed by{" "}
          <a href="https://html5up.net">HTML5 UP</a> and released
          <br />
          for free under the{" "}
          <a href="https://html5up.net/license">Creative Commons</a> license.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              onOpenArticle("intro");
            }}
          >
            Intro
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              onOpenArticle("work");
            }}
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              onOpenArticle("about");
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              onOpenArticle("contact");
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
