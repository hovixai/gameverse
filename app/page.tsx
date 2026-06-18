export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-zinc-800">
        <h1 className="text-2xl font-bold text-green-400">
          🎮 GameVerse
        </h1>

        <div className="flex gap-6">
          <a href="#">News</a>
          <a href="#">Reviews</a>
          <a href="#">Esports</a>
          <a href="#">Guides</a>
        </div>
      </nav>

      <section className="text-center py-24 px-6">
        <h1 className="text-6xl font-bold mb-6">
          Welcome to GameVerse
        </h1>

        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Your ultimate destination for gaming news, reviews,
          esports coverage, guides, and trending games.
        </p>

        <button className="mt-8 px-8 py-3 bg-green-500 rounded-lg font-bold">
          Explore Games
        </button>
      </section>

      <section className="px-8 py-12">
        <h2 className="text-3xl font-bold mb-8">
          Featured Games
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold">Minecraft</h3>
            <p className="text-gray-400">
              Build and create anything.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold">Fortnite</h3>
            <p className="text-gray-400">
              Battle Royale action.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold">Cyberpunk 2077</h3>
            <p className="text-gray-400">
              Futuristic open-world RPG.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}