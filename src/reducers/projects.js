import {
  GET_PROJECTS,
  DELETE_PROJECTS,
  ADD_PROJECTS,
  GET_ALL_PROJECTS,
} from "../actions/types.js";

const initialState = {
  projects: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case DELETE_PROJECTS:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.payload
        ),
      };
    case ADD_PROJECTS:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };

    default:
      return state;
  }
}
