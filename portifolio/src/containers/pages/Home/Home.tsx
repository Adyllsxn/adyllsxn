import { FiArrowUpRight } from "react-icons/fi";
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
          <h1 className="hero-title">Sou Domingos Nascimento</h1>
          <p className="hero-desc">
          Desenvolvedor Fullstack focado em aplicações web, mobile e design de interfaces. Crio soluções digitais com performance, usabilidade e uma boa experiência de usuário.
          <br /><br />
          Trabalho com .NET, Node.js, TypeScript, React e UI/UX. Experiência com PostgreSQL, Firebase e SQL Server.
        </p>


            <ul className="social-links">
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  LinkedIn <FiArrowUpRight />
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  GitHub <FiArrowUpRight />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  Instagram <FiArrowUpRight />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
