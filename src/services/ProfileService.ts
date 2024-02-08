import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const fetchProfile = async () => {
  const response = await fetch("https://localhost:7280/api/user/currentUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://localhost:7280",
      Authorization: `Bearer ${cookies.get("token")}`,
    },
  });
  return response.json();
};
