import Image from 'next/image';
import styles from './DevImg.module.css'; // Import CSS module

const DevImg = ({containerStyles, imgSrc}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt='' className={`${styles.customimg}`} />
    </div>
  )
}

export default DevImg