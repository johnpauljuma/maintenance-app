import './globals.css';

export const metadata = {
  title: 'Maintenance App',
  description: 'A maintenance job management system',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-800">
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="bg-gray-600 text-white py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
              <h1 className="text-xl font-bold">Maintenance App</h1>
              <nav>
                <ul className="flex space-x-4">
                  <li>
                    <a href="/" className="hover:underline">Home</a>
                  </li>
                  <li>
                    <a href="/about" className="hover:underline">About</a>
                  </li>
                  <li>
                    <a href="/jobs" className="hover:underline">Jobs</a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          {/* Main Content */}
          <main style={{backgroundColor:'red'}} className="w-full">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-blue-900 text-white py-4 mt-auto">
            <div className="max-w-7xl mx-auto text-center">
              &copy; 2024 Maintenance App. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
