const Home = () => {
  const myImage = require("../assets/images/me.png");

  return (
    <div className="main">
      <section className="home__section align-center">
        <div className="container">
          <div className="row align-center">
            <div className="home__text">
              <p>Hello, I'm</p>
              <h1>Amirhosein Gharaati</h1>
              <h2>Frontend Developer</h2>
            </div>
            <div className="home__img">
              <div className="img-box">
                <img src={myImage} alt="me" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
