
import FriendItem from "./FriendItem";
import styles from "./FriendsList.module.css";



const FriendsList = ({ friends }) => {
    return (
      <ul className={styles.list}>
        {friends.map((friend) => (
          <li key={friend.id}>
            <FriendItem friend={friend} />
          </li>
        ))}
      </ul>
    );
  };

export default FriendsList