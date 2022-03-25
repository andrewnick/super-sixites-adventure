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
              href="https://www.glenfern.org.nz/sanctuary-loop-track"
              target="_blank"
              rel="noopener noreferrer"
            >
              Glen Fern Loop Track
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
        <h3>Getting There</h3>
        <p>
          There are two options. One is to travel by plane and the other by
          ferry. With the plane it is recommended you hire a vehicle preferably
          4wd drive as some accommodation needs one for access.
        </p>
        <h4>Flights</h4>
        <p>
          For shorter weekend stays its a good idea to take a flight from
          Auckland with Barrier Air and hire a car on the island. For longer
          stays a return boat trip or fly in, boat out are also great options.
          The flight from Auckland, either from the domestic terminal in Manukau
          or from the North Shore is just a quick 30 minute journey on a 6-12
          seater plane. There are regular scheduled flights departing from
          Auckland Domestic Terminal for Claris or Okiwi.
        </p>
        <p>
          <a
            href="https://www.greatbarrierislandtourism.co.nz/flights/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Travel Deals
          </a>
        </p>
        <h4>Ferry</h4>
        <p>
          By Sealink ferry, the crossing from Auckland is a relaxing 4 and a
          half hours, docking at Tryphena wharf 7 days a week in the summer and
          3 days in the winter. The ferry is able to transport passengers,
          freight and vehicles.
        </p>
        <p>
          <a
            href="https://www.greatbarrier.co.nz/transport/guide-to-getting-here/"
            target="_blank"
            rel="noopener noreferrer"
          >
            More Information
          </a>
        </p>
        <h3>Getting Around</h3>
        <h4>Car Hire</h4>
        <ul>
          <li>Small cars ~$60 per day</li>
          <li>Smaller 4wd ~$65 per day</li>
          <li>Larger 4wd ~$80 per day</li>
        </ul>
        <p>
          <strong>Top tip:</strong> During peak season be sure to book transport
          long in advance, bookings get filled up very quickly. When we say
          early, for the peak months, this can mean up to a year in advance.
        </p>
        <a
          href="https://www.greatbarrier.co.nz/transport/getting-around/"
          target="_blank"
          rel="noopener noreferrer"
        >
          More Information
        </a>
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
            <ul>
              <li>
                <a
                  href="https://www.greatbarrier.co.nz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Great Barrier
                </a>
              </li>
              <li>
                <a
                  href="https://www.greatbarrierislandtourism.co.nz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Great Barrier Island Tourism
                </a>
              </li>
            </ul>
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
          <li>
            There are also stores in Tryphena, Claris and Port Fitzroy to buy
            food for self catering
          </li>
        </ul>
        {close}
      </article>
    </div>
  );
};

export default Main;
