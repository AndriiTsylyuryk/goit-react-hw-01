
const FriendItem = ({friend}) => {
  return (
    <div>
  <img src={friend.avatar} alt="Avatar" width="48" />
  <p>{friend.name}</p>
  <p>{friend.isOnline}</p>
</div>
  )
}

export default FriendItem;
