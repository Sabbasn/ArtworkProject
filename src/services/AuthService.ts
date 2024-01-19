import Cookies from "universal-cookie";

class AuthService {
  private API_URL: string = "https://localhost:7280/api/user/";
  private cookies = new Cookies();
  private loggedIn = false;

  public isLoggedIn() {
    return this.loggedIn;
  }

  private setCookie(name: string, data: string) {
    this.cookies.set(name, data, { secure: true, httpOnly: false });
  }

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
    const json = await response.json();
    if (json["success"]) {
      this.setCookie("bearerToken", json["data"]);
    }
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
      this.setCookie("bearerToken", json["data"]);
    }
    return json;
  }

  public logOut() {
    this.cookies.remove("bearerToken");
  }
}

export default AuthService;
