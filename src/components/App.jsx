import FriendsList from "./FriendsList/FriendsList";
import Profile from "./Profile/Profile";
import profileData from './userData.json'
import friends from './friends.json'


const App = () => {

  return (
    <div>
      <Profile user={profileData}/>
      <FriendsList friends={friends} />
    </div>
  );
};

export default App;
