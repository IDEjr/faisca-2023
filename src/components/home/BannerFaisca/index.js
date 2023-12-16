import React from 'react'
import styles from './banner.module.css'
import Image from 'next/image';
import logoFaisca from '@img/home/Frame 7.png'

export default function BannerFaisca() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <div>
          <h2 className={styles.title1}>PROPORCIONAMOS<br></br>SOLUÇÕES CRIATIVAS<br></br> PARA PROJETOS<br></br> EXCLUSIVOS</h2>
        </div>
        <div>
          <Image className={styles.imglogo} src={logoFaisca} alt={'nome'} width={1166} height={587}/>
        </div>
        <div>
          <h2 className={styles.title2}>SOMOS <br></br>A FAÍSCA!</h2>
        <h2 className={styles.title3}>UMA EMPRESA JÚNIOR DE DESIGN<br></br> VISUAL E DE PRODUTA DA UFRGS.</h2>
       </div>
       </div>
    </div>
    )
}
