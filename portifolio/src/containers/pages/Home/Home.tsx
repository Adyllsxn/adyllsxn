import './Home.css';

const Home = () => {
  return (
    <section className="wrapperContainer">
      <div className="wrapper">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} style={{ left: `${10 + i * 10}%`, animationDelay: `${i * 1.2}s` }} />
        ))}
      </div>
      <div className="layoutContainer">
        <div className="banner">
          <div className="content">
            <h3>
                Olá, Eu sou Domingos Nascimento
            </h3>
            <ul>
                <li>
                    <a href="#">Linkdin</a>
                </li>
                <li>
                    <a href="#">GitHub</a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
