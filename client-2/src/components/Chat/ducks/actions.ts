export function doInitializeUser(
  initializedName: string,
  initializedRoom: string
) {
  return (dispatch: Function, getState: Function) => {
    dispatch({
      type: "USER_INITIALIZED",
      payload: { name: initializedName, room: initializedRoom },
    });
  };
}

export function doSetMessages(newMessage: any) {
  return (dispatch: Function, getState: Function) => {
    const state = getState();
    let messages = state.messages;
    console.log(messages);
    console.log(newMessage);
    messages = [...messages, newMessage];
    dispatch({
      type: "MESSAGES_SET",
      payload: { messages },
    });
  };
}
