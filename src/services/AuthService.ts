import Cookies from "universal-cookie";

class AuthService {
  private API_URL: string = "https://localhost:7280/api/user/";
  private cookies = new Cookies();

  public async registerUser(userData: { [key: string]: string }) {
    userData = {
      userName: userData["username"],
      password: userData["password"],
    };

    const response = await fetch(this.API_URL + "register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://localhost:7280",
      },
      body: JSON.stringify(userData),
    });
    if (response.ok) {
      this.cookies.set("bearerToken", await response.json(), { secure: true });
      return true;
    }
    const json = await response.json();
    return json;
  }

  public async loginUser(userData: { [key: string]: string }) {
    const data = {
      userName: userData["username"],
      password: userData["password"],
    };
    const response = await fetch(this.API_URL + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://localhost:7280",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    if (json["success"]) {
      this.cookies.set("bearerToken", json["data"]);
    }
    return json;
  }

  public logOut() {
    this.cookies.remove("bearerToken");
  }
}

export default AuthService;
