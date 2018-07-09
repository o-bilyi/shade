const initialState = {
  deviceType: "desktop"
};

export default function globalState(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_DEVICE_TYPE" : {
      return {
        ...state,
        deviceType: action.payload,
      };
    }
    default :
      return state;
  }
}
