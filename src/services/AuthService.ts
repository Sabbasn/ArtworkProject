import Cookies from "universal-cookie";

const API_URL: string = "https://localhost:7280/api/user/";
const cookies = new Cookies();
const tokenStorageName = "token";

const setCookie = (username: string, name: string, data: string) => {
  const expiryDate = new Date();
  expiryDate.setMinutes(expiryDate.getMinutes() + 15);
  cookies.set(name, data, {
    secure: true,
    httpOnly: false,
    expires: expiryDate,
  });
  cookies.set("username", username, {
    secure: true,
    httpOnly: false,
    expires: expiryDate,
  });
};

export const isLoggedIn = async () => {
  const token = cookies.get(tokenStorageName);
  const username = cookies.get("username");
  if (!token || !username) {
    return false;
  }

  const body = {
    token: token,
    username: username,
  };

  const response = await fetch(API_URL + "verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://localhost:7280",
    },
    body: JSON.stringify(body),
  });
  const json = await response.json();
  return json;
};

export const registerUser = async (userData: { [key: string]: string }) => {
  userData = {
    userName: userData["username"],
    password: userData["password"],
  };

  const response = await fetch(API_URL + "register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://localhost:7280",
    },
    body: JSON.stringify(userData),
  });
  const json = await response.json();
  if (json["success"]) {
    setCookie(userData["username"], tokenStorageName, json["data"]);
  }
  return json;
};

export const loginUser = async (userData: { [key: string]: string }) => {
  const data = {
    userName: userData["username"],
    password: userData["password"],
  };
  const response = await fetch(API_URL + "login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://localhost:7280",
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  if (json["success"]) {
    setCookie(userData["username"], tokenStorageName, json["data"]);
    // window.location.reload();
  }
  return json;
};

export const logOut = () => {
  cookies.remove(tokenStorageName);
  cookies.remove("username");
  window.location.reload();
};
