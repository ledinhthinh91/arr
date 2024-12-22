export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-4">Cảm ơn bạn!</h1>
      <p className="text-lg">Lời chúc của bạn đã được gửi thành công.</p>
      <a
        href="/"
        className="mt-6 px-6 py-2 bg-white text-black rounded hover:bg-gray-200"
      >
        Quay lại trang chính
      </a>
    </div>
	style={{
        backgroundImage: "url('/images/wish-banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
  );
}
