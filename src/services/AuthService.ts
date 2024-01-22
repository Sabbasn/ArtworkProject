import Cookies from "universal-cookie";

const API_URL: string = "https://localhost:7280/api/user/";
const cookies = new Cookies();

const setCookie = (name: string, data: string) => {
  cookies.set(name, data, { secure: true, httpOnly: true });
};

export const isLoggedIn = () => {
  const token: string = cookies.get("bearerToken");
  return token != null;
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
    setCookie("bearerToken", json["data"]);
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
    setCookie("bearerToken", json["data"]);
  }
  return json;
};

export const logOut = () => {
  cookies.remove("bearerToken");
};
