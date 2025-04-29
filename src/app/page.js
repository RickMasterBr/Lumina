// src/app/page.jsx (se estiver usando App Router)
// ou pages/index.jsx (se estiver usando Pages Router)

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-purple-700 mb-4">
        Bem-vindo ao Lumina Lab
      </h1>
      <p className="text-gray-600 text-lg">
        Seu portal de aprendizado e inovação.
      </p>
    </main>
  );
}
