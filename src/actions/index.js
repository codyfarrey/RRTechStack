export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    };
};

// The function returned is called the Action Creator
// When we call this action creator, the returned action is dispatched and sent to all reducers
// This actions type is 'select_library, a name we gave it to use when performing action

// Payload is also sent to all of reducers, in this case the libraryId
