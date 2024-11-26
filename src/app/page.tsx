import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="purple-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-violet-100">
              Full-stack developer crafting beautiful digital experiences
            </p>
            <button className="bg-white text-primary hover:bg-violet-100 transition-colors px-8 py-3 rounded-lg font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="purple-gradient-soft p-6 rounded-xl">
              <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-content">
                Building responsive and performant web applications using modern
                technologies.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="purple-gradient-soft p-6 rounded-xl">
              <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
              <p className="text-content">
                Creating intuitive and beautiful user interfaces with attention to
                detail.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="purple-gradient-soft p-6 rounded-xl">
              <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Performance</h3>
              <p className="text-content">
                Optimizing applications for speed and efficiency across all devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-violet-50 dark:bg-violet-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to start your project?
          </h2>
          <div className="flex gap-4 justify-center">
            <button className="bg-primary hover:bg-primary-dark text-white transition-colors px-8 py-3 rounded-lg font-semibold">
              Contact Me
            </button>
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors px-8 py-3 rounded-lg font-semibold">
              View Work
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
