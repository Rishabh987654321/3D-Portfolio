import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  // Function to handle resume download
  const handleDownloadResume = () => {
    
    const resumePath = '/resume.pdf';
    
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Rishabh_Kumar_Resume.pdf'; // Name that will appear when downloading
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='flex flex-col justify-center items-center md:items-start'>
                <button 
                  onClick={handleDownloadResume}
                  className='underline cursor-pointer'
                >
                  Download My Resume
                </button>
            </div>
            <div className='socials'>
                {socialImgs.map((img)=>(
                    <a href={img.url} key={img.url} className='icon' target='_blank' rel="noreferrer">
                        <img src={img.imgPath} alt={img.alt || "Social icon"} />
                    </a>
                ))}
            </div>
            <div className='flex flex-col justify-center'>
                <p className='text-center md:text-end'>
                © {new Date().getFullYear()} Rishabh | Kumar. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer