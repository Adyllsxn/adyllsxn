import Footer from '@/components/layout/Footer';
import './About.css';

function About ()  {
  return (
    <section className='sectionAbout'>
      <div className='sectionAboutContant'>
        <div className='layoutContainer'>
          <div className="aboutContent" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            
            <div className="aboutImage" style={{ flex: '1', minWidth: '250px', textAlign: 'center' }}>
              <img
                src="https://github.com/Adyllsxn.png"
                alt="Adyllsxn"
                style={{ maxWidth: '300px', width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
              />
            </div>

            <div className="aboutText" style={{ flex: '2', minWidth: '300px', padding: '20px' }}>
              <p className="sectionLabel" style={{ letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>ABOUT ME</p>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>
                A Little About Me!
              </h2>
              <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>
                Hi! I'm Domingos Nascimento, also known as Adyllsxn, a passionate Full Stack developer who creates complete web applications by combining intuitive and responsive interfaces with efficient and secure back-ends.
                I'm always exploring new technologies and creative ways to turn ideas into practical and functional solutions.
                In addition to solo projects, I've worked in creative and collaborative teams, involving version control, agile methodologies, and constant communication.
              </p>

              <a
                href="/path/to/your-cv.pdf"
                download
                className="downloadBtn"
                style={{
                  padding: '12px 24px',
                  border: '1px solid var(--text-color)',
                  borderRadius: '6px',
                  color: 'var(--text-color)',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                }}
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
