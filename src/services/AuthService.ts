import Cookies from "universal-cookie";

class AuthService {
  private API_URL: string = "";
  private cookies = new Cookies();
  public async registerUser(userData: object) {
    const response = await fetch(this.API_URL, {
      body: JSON.stringify(userData),
    });
    return response.json();
  }

  public async loginUser(userData: object) {
    let message = "Login successful!";
    const response = await fetch(this.API_URL, {
      body: JSON.stringify(userData),
    });

    const cookieExpiration = new Date(new Date().getTime() + 15 * 60 * 1000);
    response.json().then((data) => {
      if (data["success"])
        this.cookies.set("token", data["data"]["token"], {
          expires: cookieExpiration,
        });
      else {
        message = data["message"];
      }
    });
    return message;
  }
}

export default AuthService;
