import './index.css';

export const Home = () => {
  return (
    <section className="Home">
      <section className="intro">
        <h1 hidden>DSOCIETY</h1> {/* SEO */}
        <h2 className="intro__title">
          <span>НОВОЕ ОБЩЕСТВО</span> <br /> НОВОЕ БУДУЮЩЕЕ
        </h2>
        <p className="intro__description">
          Создать все с нуля? Изменить то что уже есть? В любом случае нужно что-то менять в лучшую сторону, ведь все мы
          являемся частью нашего общества.
        </p>
      </section>

      <section className="about">
        <h2 className="about__title">О нас</h2>
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
        <h2 className="important__title">Что важно для лучшего общества</h2>

        <div className="important__block">
          <h3 className="important__block-subtitle">Равенство</h3>
          <p className="important__block-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, quisquam blanditiis veniam libero
            laboriosam quos cumque officiis ad adipisci non beatae ipsum error eius voluptatem exercitationem temporibus
            nam nobis praesentium.
          </p>
        </div>
        <div className="important__block">
          <h3 className="important__block-subtitle">Саморазвитие</h3>
          <p className="important__block-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, quisquam blanditiis veniam libero
            laboriosa adipisci non beatae ipsum error eius voluptatem exercitationem temporibus nam nobis praesentium.
          </p>
        </div>
        <div className="important__block">
          <h3 className="important__block-subtitle">Доверие</h3>
          <p className="important__block-description">
            Ни один человек не способен знать все области и темы. Также мы не можем жить в обществе в состоянии "доверяй
            только себе". Конечно мы можем не доверять друг другу, но тогда нормального общества не будет (если это
            можно назвать обществом). К сожелению на данный момент слишком много мнений среди которых приходиться
            выбирать. И многие пользуются этим не из хороших побуждений. Поэтому нам нужно доверие при котором мы можем
            с уверенность развиваться в "своей области", делиться объективными, корректными знаниями, зная что другие
            люди делают, то же самое.
          </p>
        </div>
      </section>
    </section>
  );
};
