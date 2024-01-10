class AuthService {
  private API_URL: string = "";

  public async registerUser(userData: object) {
    const response = await fetch(this.API_URL, {
      body: JSON.stringify(userData),
    });
    return response.json();
  }

  public async loginUser(userData: object) {
    const response = await fetch(this.API_URL, {
      body: JSON.stringify(userData),
    });
    return response.json();
  }
}
