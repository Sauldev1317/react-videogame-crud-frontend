import http from "../http-common";

class VideogameDataService {
  create(data) {
    return http.post("/games", data);
  }
}

export default new VideogameDataService();