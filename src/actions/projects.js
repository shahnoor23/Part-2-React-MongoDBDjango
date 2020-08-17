import axios from "axios";
import { tokenConfig } from "./auth";
import {
  GET_PROJECTS,
  DELETE_PROJECTS,
  ADD_PROJECTS,
  GET_ALL_PROJECTS,
} from "./types";

//action method for get projects
export const getallProjects = () => (dispatch) => {
  axios
    .get("/record")
    .then((res) => {
      dispatch({
        type: GET_ALL_PROJECTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getProjects = () => (dispatch, getState) => {
  axios
    .get("/adminrecord", tokenConfig(getState))
    .then((res) => {
      console.log(res);
      dispatch({
        type: GET_PROJECTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
//delete Projects

export const deleteProjects = (id) => (dispatch, getState) => {
  axios
    .delete("adminrecord/" + id, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_PROJECTS,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const addProjects = (project) => (dispatch, getState) => {
  axios
    .post("/record/", project, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_PROJECTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
