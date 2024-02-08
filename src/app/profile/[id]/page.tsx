"use client";
import { fetchProfile } from "@services/ProfileService";
import { useQuery } from "react-query";

export default function ProfilePage() {
  // const params = useParams<{ id: string }>(); // Will be used when backend is updated
  const { data, status } = useQuery("profile", fetchProfile);

  return (
    <div className="container-sm">
      <div className="card">
        <div className="card-body">
          {status === "success" && (
            <div>
              <h1>{data["data"]["userName"]}</h1>
              <p>{data["data"]["id"]}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
