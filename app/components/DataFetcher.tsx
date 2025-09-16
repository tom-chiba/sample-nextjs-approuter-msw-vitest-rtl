"use client";

import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const DataFetcher: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/user");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data: User = await response.json();
        setUser(data);
      } catch (err: unknown) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div data-testid="loading">Loading user...</div>;
  }

  if (error) {
    return <div data-testid="error">Error: {error}</div>;
  }

  return (
    <div data-testid="user-data">
      <h2>User Data</h2>
      <p>ID: {user?.id}</p>
      <p>Name: {user?.name}</p>
    </div>
  );
};

export default DataFetcher;
