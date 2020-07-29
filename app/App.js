import 'react-native-gesture-handler';
import React from 'react';
import { AuthContext } from './context';
import { NavigationContainer } from '@react-navigation/native';

import SideScreenDriver from './router/SideScreenDriver';
import SideScreenProvider from './router/SideScreenProvider';
import AuthStackScreen from './router/AuthStack';
import LoadingScreen from './screens/LoadingScreen';

console.log(process.env.REACT_APP_GOOGLE_API_KEY)

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const [isDriver, setIsDriver] = React.useState(false);

  const authContext = React.useMemo(() => {
    return {
      signInDriver: () => {
        setIsLoading(false);
        setUserToken('abc');
        setIsDriver(true);
      },
      signInProvider: () => {
        setIsLoading(false);
        setUserToken('abc');
        setIsDriver(false);
      },      
      registerDriver: () => {
        setIsLoading(false);
        setUserToken('abc');
        setIsDriver(true);
      },
      registerProvider: () => {
        setIsLoading(false);
        setUserToken('abc');
        setIsDriver(false);
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
        setIsDriver(false);
      },
      switchAccount: () => {
        setIsLoading(false);
        setIsDriver(!isDriver);
      }
    }
  })

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [])

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!userToken) { return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
          <AuthStackScreen />
        </NavigationContainer>
    </AuthContext.Provider>
  )}

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {isDriver ? (
          <SideScreenDriver />) : (
            <SideScreenProvider />
          )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
  
};

export default App;


// Go to station -- book -- confirmation from other party
// List station