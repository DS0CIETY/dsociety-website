import './index.css';

export const About = () => {
  return (
    <section className="about">
      <h2 className="about__title">Our movement</h2>
      <p className="about__description">
        Just a group of those who want to change or create something. We're
        trying to start doing something useful, and it doesn't depend on your
        ability. It's like a hobby that can become something big. There are no
        deadlines, no clear rules.
      </p>
      <p className="about__description">
        Everyone has their own, but everyone can offer something to improve our
        society, change something, maybe the whole world. Or is it better to
        create a new society? Your choice.
      </p>

      <h2 className="about__title">For us important</h2>

      <div className="about__block">
        <h3 className="about__subtitle">Equality</h3>
        <p className="about__description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
          quisquam blanditiis veniam libero laboriosam quos cumque officiis ad
          adipisci non beatae ipsum error eius voluptatem exercitationem
          temporibus nam nobis praesentium.
        </p>
      </div>

      <div className="about__block">
        <h3 className="about__subtitle">Self-development</h3>
        <p className="about__description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
          quisquam blanditiis veniam libero laboriosa adipisci non beatae ipsum
          error eius voluptatem exercitationem temporibus nam nobis praesentium.
        </p>
      </div>

      <div className="about__block">
        <h3 className="about__subtitle">Trust</h3>
        <p className="about__description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
          quisquam blanditiis veniam libero laboriosam quos cumque officiis ad
          adipisci non beatae ipsum.
        </p>
      </div>
    </section>
  );
};
