import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import accommodationImage from "../images/Great-Barrier-accomodation.jpeg";
import activitiesImage from "../images/great-barrier-view-people-1200.jpeg";
import travelImage from "../images/gbi-plane.jpeg";
import tipsAndTricksImage from "../images/gbi-tips-and-tricks.jpeg";
import Image from "next/image";
interface Main {
  // route: any;
  article: string;
  articleTimeout: boolean;
  onCloseArticle: () => void;
  timeout: boolean;
}

const Main = ({ article, articleTimeout, onCloseArticle, timeout }) => {
  let close = (
    <div
      className="close"
      onClick={() => {
        onCloseArticle();
      }}
    ></div>
  );

  return (
    <div id="main" style={timeout ? { display: "flex" } : { display: "none" }}>
      <article
        id="activities"
        className={`${article === "activities" ? "active" : ""} ${
          articleTimeout ? "timeout" : ""
        }`}
        style={{ display: "none" }}
      >
        <h2 className="major">Activities</h2>
        <span className="image main">
          <Image src={activitiesImage} alt="" />
        </span>
        <ul>
          <li>
            <a
              href="https://www.greatbarrierislandtourism.co.nz/thingstodo/bushwalks-and-tramping/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bush Walks
            </a>
          </li>
          <li>
            <a
              href="https://www.greatbarrierisland.nz/walking-tracks/kaitoke-hot-springs-track/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kaitoke Hot Springs Track
            </a>
          </li>
          <li>
            <a
              href="https://www.greatbarrierislandtourism.co.nz/dark-sky-sanctuary-great-barrier-island/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dark Sky Experience
            </a>
          </li>
          <li>
            <a
              href="https://www.greatbarrier.co.nz/activities-directory/listing/milk-honey-grain-museum/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Milk, Honey & Grain Museum
            </a>
          </li>
        </ul>
        {close}
      </article>

      <article
        id="accomodation"
        className={`${article === "accomodation" ? "active" : ""} ${
          articleTimeout ? "timeout" : ""
        }`}
        style={{ display: "none" }}
      >
        <h2 className="major">Accommodation</h2>
        <span className="image main">
          <Image src={accommodationImage} alt="" />
        </span>
        <p>
          We know how much you like sharing a bathroom so we have done our best
          to find the most shared bathrooms we could. 😉
        </p>
        <ul>
          <li>
            <a
              href="https://www.canopycamping.co.nz/fantail-stories"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fantail stories
            </a>
          </li>
          <li>
            <a
              href="https://www.bookabach.co.nz/holiday-accommodation/p9511961"
              target="_blank"
              rel="noopener noreferrer"
            >
              An Asian inspired haven on Aotea Great Barrier Island
            </a>
          </li>
          <li>
            <a
              href="https://www.bookabach.co.nz/holiday-accommodation/p7568888"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fun and Funky - fully restored genuine 1940&apos;s handmade
              caravan
            </a>
          </li>
          <li>
            <a
              href="https://www.waterfrontlodge.co.nz/great-barrier-island-accommodation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Waterfront Cottage
            </a>
          </li>
          <li>
            <a
              href="https://www.pigeonslodge.co.nz/rooms-rates"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pigeons Lodge
            </a>
          </li>
          <li>
            <a
              href="https://www.shoalbay.co.nz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shoal Bay Estate
            </a>
          </li>
          <li>
            <a
              href="http://www.shearersquarters.co.nz/accommodation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shearers Quarters
            </a>
          </li>
        </ul>
        {close}
      </article>

      <article
        id="travel"
        className={`${article === "travel" ? "active" : ""} ${
          articleTimeout ? "timeout" : ""
        }`}
        style={{ display: "none" }}
      >
        <h2 className="major">Travel</h2>
        <span className="image main">
          <Image src={travelImage} alt="" />
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
          eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat
          volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam.
          Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero
          et malesuada fames ac ante ipsum primis in faucibus. Cras viverra
          ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.
        </p>
        {close}
      </article>

      <article
        id="tips-and-tricks"
        className={`${article === "tips-and-tricks" ? "active" : ""} ${
          articleTimeout ? "timeout" : ""
        }`}
        style={{ display: "none" }}
      >
        <h2 className="major">Tips and Tricks</h2>
        <span className="image main">
          <Image src={tipsAndTricksImage} alt="" />
        </span>
        <ul>
          <li>
            Go to these sites for more information
            <p>
              <a
                href="https://www.greatbarrier.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Great Barrier
              </a>
            </p>
            <p>
              <a
                href="https://www.greatbarrierislandtourism.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Great Barrier Island Tourism
              </a>
            </p>
          </li>
          <li>
            Bring a written copy of any accommodation access information as
            reception can be patchy across the island.
          </li>
          <li>
            Some accommodation requires 4wd access - so check before you book
            anything
          </li>
          <li>
            Food - there are lots of places to eat out, but opening hours seem
            to vary across the year. The great barrier website has an up to date
            guide to help with this{" "}
            <a
              href="https://www.greatbarrier.co.nz/eat-drink/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.greatbarrier.co.nz/eat-drink/
            </a>
          </li>
        </ul>
        {close}
      </article>
    </div>
  );
};

export default Main;
