
import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendsList.module.css";

const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends.map((friend) => (
        <li key={friend.id} className={styles.listItem}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendsList;
