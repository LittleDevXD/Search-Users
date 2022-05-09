import UserFinder from './components/UserFinder';
import UsersContext from './store/user-context';

function App() {
  const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
  ];
  
  return (
    <UsersContext.Provider value={{users: DUMMY_USERS}}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
