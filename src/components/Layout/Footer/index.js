import styles from './Footer.module.css';
import emailIcon from '@img/footerIcons/emailIcon.png';
import instagramIcon from '@img/footerIcons/instagramIcon.png';
import linkedinIcon from '@img/footerIcons/linkedinIcon.png';
import behanceIcon from '@img/footerIcons/behanceIcon.png';
import Image from 'next/image';
import pageStyles from '../../../styles/pages.module.css'; 

function Footer(){
    return (
        <footer className={`${styles.footer} ${pageStyles.footer}`}>
            <ul className={styles.social_list}>
                <li>
                    <a 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=contato@faiscadesignjr.com.br" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <Image src={emailIcon} alt="Email" width={24} height={24} />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/faiscadesignjr/" target="_blank" rel="noopener noreferrer">
                        <Image src={instagramIcon} alt="instagramIcon" width={24} height={24} />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/faiscadesignjunior/" target="_blank" rel="noopener noreferrer">
                        <Image src={linkedinIcon} alt="linkedinIcon" width={24} height={24} /> 
                    </a>
                </li>
                <li>
                    <a href="https://www.behance.net/FaiscaDesignJunior" target="_blank" rel="noopener noreferrer">
                        <Image src={behanceIcon} alt="behanceIcon" width={24} height={24} />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;