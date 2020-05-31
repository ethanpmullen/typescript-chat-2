interface IChat {
  name: string;
  room: string;
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
    default:
      return state;
  }
}
