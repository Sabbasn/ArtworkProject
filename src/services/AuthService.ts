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
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(userData),
    });
    if (response.ok) {
      this.cookies.set("bearerToken", await response.json());
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
    console.log(data);
    const response = await fetch(this.API_URL + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      this.cookies.set("bearerToken", await response.json());
      return true;
    }
    const json = await response.json();
    return json;
  }
}

export default AuthService;
