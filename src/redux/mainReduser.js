import {
  LIST_MESSAGES,
  EMAIL_USER
} from "./actionsMain.js";

const initialState = {
  users: [
    { email: "denis1990@mail.com", password: 12345 },
    { email: "oleg1986@gmail.com", password: 54321 },
  ],
  messages: [],
  emailUser: "",
  passwordUser: "",
};

const mainReduser = (state = initialState, action) => {
  switch (action.type) {
    case LIST_MESSAGES: {
      return {
        ...state,
        messages: action.payload.list,
      };
    }
    case EMAIL_USER: {
      return {
        ...state,
        emailUser: action.payload.string,
      };
    }

    default:
      return state;
  }
};

export default mainReduser;