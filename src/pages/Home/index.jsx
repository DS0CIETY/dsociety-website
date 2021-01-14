import './index.css';

export const Home = () => {
  return (
    <section className="home">
      <div className="home__intro">
        <h1 hidden>DSOCIETY</h1> {/* SEO TITLE */}
        {/* TOGETHER WE CREATE OUR NEW FUTURE */}
        <h2 className="home__title">OUR NEW FUTURE</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cum
          possimus quidem amet sit unde praesentium, rerum neque tempora
          architecto.
        </p>
      </div>

      <div className="home__about">
        <h2 className="home__about__title">About</h2>
        <p className="home__about__description">
          Just a group of those who want to change or create something. No
          matter your ability, you can do anything for our world. Everyone has
          their own way, you just need to find it.
        </p>
      </div>

      <div className="home__important">
        <h2 className="home__important__title">For us important</h2>

        <div className="home__important__block">
          <h3 className="home__important__subtitle">Equality</h3>
          <p className="home__important__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
            quisquam blanditiis veniam libero laboriosam quos cumque officiis ad
            adipisci non beatae ipsum error eius voluptatem exercitationem
            temporibus nam nobis praesentium.
          </p>
        </div>

        <div className="home__important__block">
          <h3 className="home__important__subtitle">Self-development</h3>
          <p className="home__important__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
            quisquam blanditiis veniam libero laboriosa adipisci non beatae
            ipsum error eius voluptatem exercitationem temporibus nam nobis
            praesentium.
          </p>
        </div>

        <div className="home__important__block">
          <h3 className="home__important__subtitle">Trust</h3>
          <p className="home__important__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
            quisquam blanditiis veniam libero laboriosam quos cumque officiis ad
            adipisci non beatae ipsum.
          </p>
        </div>
      </div>
    </section>
  );
};
