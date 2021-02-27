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
          являемся частью этого общества.
        </p>
      </section>

      <section className="important">
        <h2 className="important__title">Что важно для лучшего общества</h2>

        <div className="important__block">
          <h3 className="important__block-subtitle">Равенство</h3>
          <p className="important__block-description">
            Рвенство не по умственным или физическим способностям, а по правам и условиям жизни. В настоящий момент во
            многом это не так. Необходимо убрать дискриминацию в отношении других людей и следовать более объективным
            оценкам.
          </p>
        </div>
        <div className="important__block">
          <h3 className="important__block-subtitle">Саморазвитие</h3>
          <p className="important__block-description">
            Развитие и улучшение полноценного общества получается из развития каждого его участника. Обучаясь и помогая
            другим мы будем двигаться быстрее. Это лучшая стратегия если вы не один.
          </p>
        </div>
        <div className="important__block">
          <h3 className="important__block-subtitle">Доверие</h3>
          <p className="important__block-description">
            Ни один человек не способен знать все области и темы. Также не выйдет плодотворного окружения в состоянии
            "доверяй только себе". Нам нужно доверие при котором мы можем с уверенность развиваться в "своей области" и
            делиться объективными, корректными знаниями, зная что другие люди делают то же самое.
          </p>
        </div>
      </section>

      <section className="about">
        <h2 className="about__title">О нас</h2>
        <p className="about__description">
          Те кто хочет развивать и улучшать наше общество. Мы считаем что независимо от ваших способностей, вы можете
          сделать что-нибудь полезное. У каждого есть опыт, знания и навыки в какой-либо области, которые помогут ь
          другим людям.
        </p>
      </section>
    </section>
  );
};
