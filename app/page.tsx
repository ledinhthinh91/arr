"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [wishes, setWishes] = useState<string[]>([]);
  const [newWish, setNewWish] = useState("");

  const handleAddWish = async () => {
  if (newWish.trim() !== "") {
    // Gửi dữ liệu tới backend
    await fetch("/api/save-wish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ wish: newWish }),
    });

    // Sau khi gửi, cập nhật danh sách ước muốn
    setWishes([...wishes, newWish]);
    setNewWish("");
  }
};

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/wish-banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl font-bold mb-6">Your Wish List</h1>
	  <Image
        src="/images/logo.png" // Đặt file ở public/images/logo.png
        alt="logo"
        width={318.72}
        height={109.56}
        className="rounded-lg mb-6"
      />
	  
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          value={newWish}
          onChange={(e) => setNewWish(e.target.value)}
          placeholder="Input your wishes"
          className="px-4 py-2 rounded text-black"
        />
        <button
          onClick={handleAddWish}
          className="px-6 py-2 bg-pink-600 rounded hover:bg-pink-700"
        >
          SEND
        </button>
      </div>
      <ul className="space-y-3">
        {wishes.map((wish, index) => (
          <li
            key={index}
            className="bg-white text-black px-4 py-2 rounded shadow"
          >
            {wish}
          </li>
        ))}
      </ul>
    </div>
  );
}
