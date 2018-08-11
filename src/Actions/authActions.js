import * as types from "../constants/actionTypes";
import Api, { Action } from "../utils/apiUtils";
const url = "http://localhost:3000/users";

export function register(data) {
  return dispatch => {
    dispatch(Action(types.REGISTER_LOAD));
    Api.jsonService(url, "POST", data)
      .then(res => dispatch(Action(types.REGISTER_SUCCESS, res)))
      .catch(err => dispatch(Action(types.REGISTER_FAIL, err)));
  };
}