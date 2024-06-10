import Image from "next/image";
import styles from "./DevAboutImg.module.css"; // Import CSS module
const DevAboutImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt="" className={`${styles.customimgAbout}`} />
    </div>
  );
};

export default DevAboutImg;
