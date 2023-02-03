export const initialState = {
    user: null,
    playList: [],
    playing: false,
    item: null,
    // token: null
    //only for debugging ... remove after developing
    token: "BQA-Eg-YsmYkm-56dqnsvGom0xqDuIZkSdnf0ZaXWU_gnyWRCK0yyqVVXngSOE-o1UiztV6hj-fCMHLCYEVEDCBUhFng89v1ZModgm0umFFIzOxyfSB9ee_mOzzxlTql46J9V_gnUU-pdg0NclGj4EyXI0dCr6dehi2z2o5J7gZpRfn353g6S7tY2LNjxNPiXz3MSP6i-b83HQaOLaqDUg",
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return{
                ...state, user: action.user
            };
        
        case 'SET_TOKEN':
            return{
                ...state, token: action.token
            };
        default:
            return state;
    }
}
export default reducer;