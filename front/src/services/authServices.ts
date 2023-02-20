import axios from "axios";
import { LoginForm, RegisterForm, User } from "../types/user";
import { API_URL } from "../utils/url";

class AuthService {
  async login(dataForm: LoginForm) {
    const response = await axios.post<User>(API_URL + "/auth/login", dataForm);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response;
  }

  register(data: RegisterForm) {
    return axios.post<[]>(API_URL + "/users/create", data);
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);
    return null;
  }
}

export default new AuthService();
