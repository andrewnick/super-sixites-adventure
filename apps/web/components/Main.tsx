import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter";
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook";
import faInstagram from "@fortawesome/fontawesome-free-brands/faInstagram";
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";
import pic01 from "../images/pic01.jpg";
import pic02 from "../images/pic02.jpg";
import pic03 from "../images/pic03.jpg";
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
        id="intro"
        className={`${article === "intro" ? "active" : ""} ${
          articleTimeout ? "timeout" : ""
        }`}
        style={{ display: "none" }}
      >
        <h2 className="major">Intro</h2>
        <span className="image main">
          <Image src={pic01} alt="" />
        </span>
        <p>
          Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
          aliquam facilisis ante interdum congue. Integer mollis, nisl amet
          convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna
          finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the
          way, check out my <a href="#work">awesome work</a>.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus
          rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh
          porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc
          ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit
          sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris,
          fringilla in aliquam at, euismod in lectus. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. In non lorem sit amet elit placerat maximus. Pellentesque
          aliquam maximus risus, vel sed vehicula.
        </p>
        {close}
      </article>

      <article
        id="work"
        className={`${article === "work" ? "active" : ""} ${
          articleTimeout ? "timeout" : ""
        }`}
        style={{ display: "none" }}
      >
        <h2 className="major">Work</h2>
        <span className="image main">
          <Image src={pic02} alt="" />
        </span>
        <p>
          Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at
          eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna
          nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin
          mauris nec lorem luctus ultrices.
        </p>
        <p>
          Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
          libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
          Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas
          laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et
          orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris
          aliquet magna magna sed nunc rhoncus amet feugiat tempus.
        </p>
        {close}
      </article>

      <article
        id="about"
        className={`${article === "about" ? "active" : ""} ${
          articleTimeout ? "timeout" : ""
        }`}
        style={{ display: "none" }}
      >
        <h2 className="major">About</h2>
        <span className="image main">
          <Image src={pic03} alt="" />
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
        id="contact"
        className={`${article === "contact" ? "active" : ""} ${
          articleTimeout ? "timeout" : ""
        }`}
        style={{ display: "none" }}
      >
        <h2 className="major">Contact</h2>
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={4}></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Reset" />
            </li>
          </ul>
        </form>
        {close}
      </article>
    </div>
  );
};

export default Main;
