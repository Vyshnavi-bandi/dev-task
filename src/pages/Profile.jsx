import { FaCamera } from "react-icons/fa";
import styles from "../styles/pages/Profile.module.scss";
import profileImg from "../assets/profile@2x.png";


const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <h2>Account Settings</h2>
      </div>

      <div className={styles.profileInfo}>
        <div className={styles.avatarWrapper}>
          <img
            src={profileImg}
            alt="profile"
            className={styles.avatar}
          />
          <span className={styles.badge}>
            <FaCamera />
          </span>
        </div>

        <div className={styles.userDetails}>
          <h3>Marry Doe</h3>
          <p>Marry@gmail.com</p>
        </div>
      </div>

      <p className={styles.profileDesc}>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
        Erat, Sed Diam
      </p>

      <div className={styles.divider}></div>
    </div>
  );
};

export default Profile;
