import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Replace with your preferred crypto exchange API
    const response = await fetch(
      "https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=10"
    );
    const data = await response.json();

    const formattedData = {
      bids: data.bids.map(([price, amount]) => ({
        price: parseFloat(price).toFixed(2),
        amount: parseFloat(amount).toFixed(4),
      })),
      asks: data.asks.map(([price, amount]) => ({
        price: parseFloat(price).toFixed(2),
        amount: parseFloat(amount).toFixed(4),
      })),
    };

    return NextResponse.json(formattedData);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch orderbook data" },
      { status: 500 }
    );
  }
}
