"use client";
import { useParams } from "next/navigation";

export default function ProfileNotFound() {
  const params = useParams<{ username: string }>(); // Will be used when backend is updated
  return (
    <h1 style={{ color: "var(--bs-warning)" }}>
      {params.username} does not exist!
    </h1>
  );
}
