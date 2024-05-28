import Post from "../src/img/post.png";
import Autismcat from "../src/img/autismcat.png";
import Lightning from "../src/img/lightning.svg";
import PlushOne from "../src/img/plush1.png";

function App() {
  return (
    <main>
      <div className="bg-wrapper">
        <div className="yes">
          <div className="yes__text">
            yes, we are Plush
          </div>
          <div className="yes__circle">
            <div className="yes__circle_inner">
            </div>
          </div>
          <div className="yes__text">
            yes, we are autistic
          </div>
          <div className="yes__circle">
            <div className="yes__circle_inner">
            </div>
          </div>
          <div className="yes__text">
            but we are
          </div>
        </div>

        <div className="title">
          Cats friends
        </div>

        <div className="post">
          <img className="post__img" src={Post} alt="" />
          <div className="post__links">
            <a className="post__link" href="#">telegram</a>
            <a className="post__link" href="#">twitter</a>
            <a className="post__link" href="#">buy now</a>
          </div>
          <img className="post__cat" src={Autismcat} alt="Autismcat" />
        </div>

        <div className="looking">
          <div className="looking__title">
            what are you looking at?
          </div>
          <div className="looking__text">
            it's just a plush cat, probably nothing.
          </div>
          <a className="looking__link" href="#">buy now</a>
          <img className="looking__lightning" src={Lightning} alt="Lightning" />
          <img className="looking__plush" src={PlushOne} alt="PlushOne" />
        </div>

      </div>
    </main>
  );
}

export default App;
