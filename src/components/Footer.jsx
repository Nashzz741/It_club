export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-10 mt-20 text-xs text-gray-500">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <p className="font-bold text-gray-700 dark:text-gray-300">
            IT Club
          </p>
          <p>
            © {new Date().getFullYear()} IT Club. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
