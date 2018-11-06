// This reducer will return the data received by the action
// In this case it's looking for an action called select_library
// once this action is fired, it will return the payload that was sent with it
// in a default case we are returning the state which is set to null

export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};
