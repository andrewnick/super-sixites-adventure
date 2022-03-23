import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faSun from "@fortawesome/fontawesome-free-regular/faSun";

interface Header {
  onOpenArticle: (article: string) => void;
  timeout: boolean;
}

const Header = ({ onOpenArticle, timeout }: Header) => (
  <header id="header" style={timeout ? { display: "none" } : {}}>
    <div className="logo">
      <FontAwesomeIcon icon={faSun} transform="grow-18" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Your Super Sixties Adventure to Great Barrier Island</h1>
        <h3>A partial expenses paid trip! </h3>
        <p>
          Your guide to what to see and do, where to stay and how to get to
          Great Barrier Island.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              onOpenArticle("activities");
            }}
          >
            Activities
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              onOpenArticle("accomodation");
            }}
          >
            Accommodation
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              onOpenArticle("travel");
            }}
          >
            Travel
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              onOpenArticle("tips-and-tricks");
            }}
          >
            Tips and Tricks
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
