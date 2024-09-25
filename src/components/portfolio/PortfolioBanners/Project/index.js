import styles from './individualProject.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Project({ path, image, erro, titulo, desc }) {
  return (
    <div className={styles.imageContainer}>
      <Link href={path}>
        <div className={styles.imageOverlay}>
          <Image src={image} alt={erro} className={styles.image} />
        </div>
      </Link>
      <div className={styles.textContainer}>
        <h1 className={styles.textTitle}>{titulo}</h1>
        <p className={styles.textDescription}>{desc}</p>
      </div>
    </div>
  );
}

export default Project;
