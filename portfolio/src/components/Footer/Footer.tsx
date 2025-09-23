import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <main className='footer'>
      <div className='layoutContainer'>
        <div className='footerContant'>
          <p>© Copyright {currentYear}. All rights reserved.</p>
          <p>Developed by Adyllsxn.</p>
        </div>  
      </div>
    </main>
  )
}

export default Footer;
