"use client";

import { useState, useEffect } from "react";


export default function OrderBook() {
  const [orderBook, setOrderBook] = useState({ bids: [], asks: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/orderbook");
        const data = await response.json();

        if (!response.ok) throw new Error(data.error || "Failed to fetch data");

        setOrderBook(data);
        setError(null);
      } catch (err) {
        setError(err.message || "Failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    };


    fetchData();
    const interval = setInterval(fetchData, 1000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto">
   
    </div>
  );
}
