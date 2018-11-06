import React from 'react';
import { View } from 'react-native'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import { Header } from './components/common';
import LibraryList from './components/LibraryList'

// Provider is a React component to wrap around entire application
// this is what holds the store which has my application states
// it's basically the connection between react and redux

// We pass our reducers into the createStore function to connect with redux
// so we are creating a new store with all of my reducers from the reducer folder

// NOTE: View style prop is set to flex: 1 so that it fills the entire window
// See notes on Flex in React documentation

// We are displaying our custom header component with prop headerText set to Tech Stack
// Then we are displaying a LibraryList which was created with this app

const App = () => {
    return(
        <Provider store={createStore(reducers)}>
            <View style={{ flex: 1 }}>
                <Header headerText="Tech Stack" />
                <LibraryList />
            </View>
        </Provider>
    );
};

export default App;