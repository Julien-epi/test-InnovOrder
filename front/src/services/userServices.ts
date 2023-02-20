import axios from 'axios';
import { FormAccount } from "../types/user";
import { API_URL } from "../utils/url";


class UserServices {

  updateUser(id: number, modifyData: FormAccount) {
    return axios.put<FormAccount>(API_URL + `/users/update/${id}`, modifyData);
  }
}

export default new UserServices();