import FriendsList from "./FriendsList/FriendsList";
import Profile from "./Profile/Profile";
import profileData from "./userData.json";
import friends from "./friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import items from "./transactions.json";

const App = () => {
  return (
    <div>
      <Profile user={profileData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
};

export default App;
