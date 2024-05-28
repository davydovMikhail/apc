import Post from "../src/img/post.png";
import Autismcat from "../src/img/autismcat.png";
import Lightning from "../src/img/lightning.svg";
import PlushOne from "../src/img/plush1.png";
import PlushTwo from "../src/img/plush2.png";

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

        <div className="join">
          <div className="join__title">
            join us
          </div>
          <div className="join__text">
            to push crypto cat <br /> autism worldwide.
          </div>

          <div className="join__infoblock infoblock infoblock__supply">
            <div className="infoblock__title">
              420.69k
            </div>
            <div className="infoblock__text">
              total supply
            </div>
          </div>
          <div className="join__infoblock infoblock infoblock__taxes">
            <div className="infoblock__title">
              zero
            </div>
            <div className="infoblock__text">
              buy & sell taxes
            </div>
          </div>
          <div className="join__infoblock infoblock infoblock__tiker">
            <div className="infoblock__title">
              $Pacf
            </div>
            <div className="infoblock__text">
              token tiker
            </div>
          </div>
          <img className="join__cat" src={PlushTwo} alt="PlushTwo" />
        </div>
      </div>
    </main>
  );
}

export default App;
