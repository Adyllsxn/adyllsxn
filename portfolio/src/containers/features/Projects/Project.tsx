import Footer from '../../../components/Footer/Footer';
import './Project.css';

const Project = () => {
  return (
    <section className='sectionProject'>
      <div className='sectionProjectContant'>
        <div className='layoutContainer'>
          <div className='projectContainer'>
            <div className="projectsContext">
                <h1>Featured projects</h1>
                <p>Projects and solutions I’ve developed, focused on real impact and tangible results.</p>
            </div>
            <div className="projetsCards">

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Project

