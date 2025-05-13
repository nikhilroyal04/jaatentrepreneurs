import Link from "next/link";
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-fuchsia-50">
      <div className="text-7xl font-extrabold text-blue-600 mb-4">404</div>
      <div className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</div>
      <div className="text-lg text-gray-600 mb-6">Sorry, the page you are looking for does not exist.</div>
      <Link href="/" className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-bold shadow hover:shadow-lg transition">Go Home</Link>
    </div>
  );
}
