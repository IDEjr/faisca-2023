import styles from "./bannerHome.module.css";
import StyledText from "@/components/textoEstilizado/textoEstilizado"

import Image from 'next/image';

export default function BannerHome({purpose, tittle, companyDesc, logo}) {
    return (
        <div className={styles.bannerWrapper}>
            <div className={styles.banner}>
                <div className={styles.textContainer}>
                    <h1 className={styles.text}>
                       <StyledText text={purpose}/>
                    </h1>
                </div>
                <Image className={styles.image} src={logo} width={0} height={0} alt="logo faísca" />
                <div className={styles.subTextContainer}>
                    <h2 className={styles.subTextTitle}><StyledText text={tittle}/></h2>
                    <p className={styles.subTextDescription}>
                    <StyledText text={companyDesc}/>
                    </p>
                </div>
            </div>
        </div>
    );
}
