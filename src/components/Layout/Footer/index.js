import styles from './Footer.module.css';
import pageStyles from '../../../styles/pages.module.css'; 
import Item from "./item"

function Footer({ socialMedia }) {
    return (
        <footer className={`${styles.footer} ${pageStyles.footer}`}>
            <ul className={styles.social_list}>
                {socialMedia.map((item, index) => (
                    <Item 
                        key={index}
                        icon={item.icon}
                        link={item.link}
                        altText={item.altText}
                    />
                ))}
            </ul>
        </footer>
    );
}

export default Footer;