export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">

      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-5 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-purple-500">🎮 GameVerse</h1>

        <nav className="flex gap-6 text-gray-300 text-sm">
          <a className="hover:text-white cursor-pointer">News</a>
          <a className="hover:text-white cursor-pointer">Reviews</a>
          <a className="hover:text-white cursor-pointer">Esports</a>
          <a className="hover:text-white cursor-pointer">Guides</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
          Welcome to <span className="text-purple-500">GameVerse</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Your ultimate destination for gaming news, reviews, esports coverage, guides, and trending games.
        </p>

        <button className="mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl transition">
          Explore Games
        </button>
      </section>

      {/* Featured Games */}
      <section className="px-8 pb-20">
        <h3 className="text-3xl font-bold mb-10">🔥 Featured Games</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-gray-900 rounded-2xl p-6 hover:scale-105 transition duration-300 border border-gray-800">
            <h4 className="text-xl font-bold mb-2">Minecraft</h4>
            <p className="text-gray-400">Build and create anything.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 rounded-2xl p-6 hover:scale-105 transition duration-300 border border-gray-800">
            <h4 className="text-xl font-bold mb-2">Fortnite</h4>
            <p className="text-gray-400">Battle Royale action.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 rounded-2xl p-6 hover:scale-105 transition duration-300 border border-gray-800">
            <h4 className="text-xl font-bold mb-2">Cyberpunk 2077</h4>
            <p className="text-gray-400">Futuristic open-world RPG.</p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-10 border-t border-gray-800">
        © {new Date().getFullYear()} GameVerse. Built with passion 🎮
      </footer>

    </div>
  );
}