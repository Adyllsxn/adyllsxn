import Footer from '@/components/layout/Footer';
import styles from './style.module.css';

function About() {
  return (
    <section className={styles.sectionAbout}>
      <div className={styles.sectionAboutContent}>
        <div className={styles.layoutContainer}>
          <div className={styles.aboutContent}>
            
            <div className={styles.aboutImage}>
              <img
                src="https://github.com/Adyllsxn.png"
                alt="Adyllsxn - Domingos Nascimento"
                className={styles.profileImage}
              />
            </div>

            <div className={styles.aboutText}>
              <p className={styles.sectionLabel}>ABOUT ME</p>
              <h2 className={styles.title}>My Developer Journey!</h2>
              
              <div className={styles.description}>
                <p>
                  Hey! I'm <strong>Domingos Nascimento</strong>, also known as <strong>Adyllsxn</strong>, a passionate 
                  Full Stack Developer dedicated to creating complete digital solutions. I specialize in building 
                  end-to-end applications that combine powerful backends with engaging user interfaces.
                </p>
                
                <p>
                  On the backend, I architect <strong>robust systems and APIs</strong> using <strong>ASP.NET Core</strong>, with strong focus on performance and scalability. For the frontend, 
                  I develop <strong>modern, responsive interfaces</strong> with <strong>React.js</strong>, 
                  ensuring high-quality user experiences.
                </p>
                
                <p>
                  For mobile development, I create <strong>cross-platform applications</strong> using <strong>React Native </strong>  
                  and <strong>Expo</strong>, delivering native-like performance across devices.
                </p>
                
                <p>
                  I'm constantly exploring new technologies and methodologies to transform innovative ideas 
                  into practical, functional solutions. I thrive in collaborative environments using version 
                  control, agile methodologies, and clear communication.
                </p>
              </div>
              {/*
              <a
                href="/path/to/your-cv.pdf"
                download
                className={styles.downloadBtn}
              >
                <span>DOWNLOAD CV</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 16L12 4M12 16L8 12M12 16L16 12" stroke="currentColor" strokeWidth="2"/>
                  <path d="M4 20H20" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>*/}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;