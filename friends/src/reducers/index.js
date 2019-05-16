

const initialState = {
    friend: []
}

const reducer = (state = initialState, action) => {
    console.log("Help! I'm in the reducer!", action, state)
}

export default reducer;