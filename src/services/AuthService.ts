import Cookies from "universal-cookie";

class AuthService {
  private API_URL: string = "";
  private cookies = new Cookies();

  public async registerUser(userData: object) {
    const response = await fetch(this.API_URL, {
      method: "POST",
      body: JSON.stringify(userData),
    });
    return response.json();
  }

  public async loginUser(userData: object) {
    const response = await fetch(this.API_URL, {
      method: "POST",
      body: JSON.stringify(userData),
    });
    const json = await response.json();
    const data = json["data"];
    this.cookies.set("token", data["token"]);
    return data;
  }
}

export default AuthService;
