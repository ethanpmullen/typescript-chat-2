interface IChat {
  name: string;
  room: string;
  currentMessage: string;
  messages: { user: string; text: string }[];
}

interface IAction {
  type: string;
  payload?: {
    [name: string]: any;
  };
}

const initialState: IChat = {
  name: "",
  room: "",
  currentMessage: "",
  messages: [],
};

export default function chatReducer(state = initialState, action: IAction) {
  const { type, payload } = action;
  switch (type) {
    case "MESSAGES_SET":
      return {
        ...state,
        messages: payload ? payload.messages : state.messages,
      };
    case "USER_INITIALIZED":
      return {
        ...state,
        name: payload ? payload.name : state.name,
        room: payload ? payload.room : state.room,
      };
    case "CURRENT_MESSAGE_SET":
      return {
        ...state,
        currentMessage: payload ? payload.updatedMessage : null,
      };
    default:
      return state;
  }
}
