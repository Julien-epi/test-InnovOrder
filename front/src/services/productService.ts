import axios from "axios";
import { Product } from "../types/product";
import { API_URL } from "../utils/url";

class ProductServices {
  getOne(id: string) {
    return axios.get<Product>(API_URL + `/auth/searchProduct/${id}`);
  }
}

export default new ProductServices();
