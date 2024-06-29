import styles from './FriendsListItem.module.css'

const FriendListItem = ({ friend }) => {
  return (
    <div>
      <img src={friend.avatar} alt="Avatar" width="48" />
      <p className={styles.friend}>{friend.name}</p>
      <p
        className={friend.isOnline ? styles.statusOnline : styles.statusOffline}
      >
        {friend.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
