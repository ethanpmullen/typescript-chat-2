type event = {
  preventDefault: () => void;
  target: { value: HTMLInputElement };
};

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

// export function doSetCurrentMessage(event: any) {
//   event.preventDefault();
//   return (dispatch: Function, getState: Function) => {
//     dispatch({
//       type: "CURRENT_MESSAGE_SET",
//       payload: {
//         updatedMessage: event.target.value ? event.target.value : null,
//       },
//     });
//   };
// }

export function doSendMessage(event: event) {
  event.preventDefault();
  return (dispatch: Function, getState: Function) => {
    dispatch({
      type: "CURRENT_MESSAGE_SET",
      payload: {
        updatedMessage: event.target.value ? event.target.value : null,
      },
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
