import './index.css';

export const Home = () => {
  return (
    <section className="Home">
      <section className="intro">
        <h1 hidden>DSOCIETY</h1> {/* SEO */}
        <h2 className="intro__title">
          <span>NEW SOCIETY</span> <br /> NEW FUTURE
        </h2>
        <p className="intro__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cum possimus quidem amet sit unde
          praesentium, rerum neque tempora architecto.
        </p>
      </section>

      <section className="about">
        <h2 className="about__title">About</h2>
        <p className="about__description">
          Just a group of those who want to change or create something. No matter your ability, you can do anything for
          our world. Everyone has their own way, you just need to find it. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Earum inventore vel deleniti omnis porro adipisci eos numquam!
        </p>
        <p className="about__description">
          Explicabo mollitia eveniet rerum eius, nisi corrupti esse consequuntur consequatur repellendus reiciendis
          voluptatem exercitationem voluptatibus illum maiores adipisci!
        </p>
      </section>

      <section className="important">
        <h2 className="important__title">For us important</h2>

        <div className="important__block">
          <h3 className="important__block-subtitle">Equality</h3>
          <p className="important__block-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, quisquam blanditiis veniam libero
            laboriosam quos cumque officiis ad adipisci non beatae ipsum error eius voluptatem exercitationem temporibus
            nam nobis praesentium.
          </p>
        </div>
        <div className="important__block">
          <h3 className="important__block-subtitle">Self-development</h3>
          <p className="important__block-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, quisquam blanditiis veniam libero
            laboriosa adipisci non beatae ipsum error eius voluptatem exercitationem temporibus nam nobis praesentium.
          </p>
        </div>
        <div className="important__block">
          <h3 className="important__block-subtitle">Trust</h3>
          <p className="important__block-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, quisquam blanditiis veniam libero
            laboriosam quos cumque officiis ad adipisci non beatae ipsum.
          </p>
        </div>
      </section>
    </section>
  );
};
