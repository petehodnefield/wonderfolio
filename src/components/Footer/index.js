import React from 'react'
import githubIcon from '../../assets/icons/logo-github.svg'
import linkedInIcon from '../../assets/icons/logo-linkedin.svg'
import emailIcon from '../../assets/icons/mail-outline.svg'

function Footer() {
    return (
        <div className='footer'>
            <ul className='footer-list'>
                <li>
                    <img 
                        src={githubIcon}
                        className='icon'
                    />
                </li>
                <li>
                    <img 
                        src={linkedInIcon}
                        className='icon'

                    />
                </li>
                <li>
                    <img 
                        src={emailIcon}
                        className='icon'

                    />
                </li>
              

            </ul>

        </div>
    )
}

export default Footer