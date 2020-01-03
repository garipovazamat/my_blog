import React from "react";
import vk from '../../images/icons/009-vk.svg'
import linkedin from '../../images/icons/031-linkedin.svg'
import instagram from '../../images/icons/034-instagram.svg'
import github from '../../images/icons/039-github.svg'

export default () => (
    <div className="row justify-content-center">
        <a href="//vk.com/garipovazamat" target="_blank" rel='noopener noreferrer'>
            <img src={vk} className="social-icons" alt='vk'/>
        </a>
        <a href="//github.com/garipovazamat" target="_blank" rel='noopener noreferrer'>
            <img src={github} className="social-icons" alt='github'/>
        </a>
        <a href="//www.linkedin.com/in/азамат-гарипов-a50333a8/" target="_blank" rel='noopener noreferrer'>
            <img src={linkedin} className="social-icons" alt='linkedin'/>
        </a>
        <a href="//www.instagram.com/garipovazamat/" target="_blank" rel='noopener noreferrer'>
            <img src={instagram} className="social-icons" alt='instagram'/>
        </a>
    </div>
)