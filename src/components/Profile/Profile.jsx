import clsx from "clsx";
import styles from "./Profile.module.css";

export const Profile = ({ user }) => {
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.card)}>
        <div className={styles.nameCard}>
          <div className={styles.imageWrapper}>
            <img className={styles.img} src={user.avatar} alt="User avatar" />
          </div>
          <p className={styles.name}>{user.username}</p>
          <p className={styles.tag}>{user.tag}</p>
          <p className={styles.location}>{user.location}</p>
        </div>
        <ul className={styles.info}>
          <li className={styles.infoItem}>
            <span className={styles.follViewLike}>Followers</span>
            <span>{user.stats.followers}</span>
          </li>
          <li className={styles.infoItem}>
            <span className={styles.follViewLike}>Views</span>
            <span>{user.stats.views}</span>
          </li>
          <li className={styles.infoItem}>
            <span className={styles.follViewLike}>Likes</span>
            <span>{user.stats.followers}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
