export const metadata = {
  title: 'Navigator – Ikigami App',
  description:
    'Your Ikigai Navigator: nine zones, one center. Stored, visualized, and ready to guide your next decision.',
  openGraph: {
    title: 'Navigator – Ikigami App',
    description:
      'Your Ikigai Navigator: nine zones, one center. Stored, visualized, and ready to guide your next decision.',
    url: 'https://www.ikigami.de/navigator',
    siteName: 'Ikigami',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Ikigami – Navigator',
    description:
      'The myth of finding your Ikigai once? Over. Here’s how you grow it. Iteratively. Intelligently.',
  },
};

export default function NavigatorPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-32 font-cm">
      <h1 className="text-3xl sm:text-4xl mb-8">Navigator</h1>

      <p className="text-lg leading-relaxed mb-6">
        The Ikigai Navigator is your personal map.
        A nine-zone chart that reflects what matters to you — right now.
        Four dimensions, four intersections, and one core.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        After each full reflection cycle, a new Navigator Report is created and saved to your personal profile.
        You can revisit any past version, explore what has shifted, and re-engage with what still holds true.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Each zone is interactive: you can enter any area to review your inputs, the AI reflections,
        and the patterns that emerged across time.
      </p>

      <hr className="my-12 border-gray-300" />

      <h2 className="text-2xl font-semibold mb-4">Why this is not “just journaling”</h2>
      <p className="text-lg leading-relaxed mb-6">
        The common belief that you “find your Ikigai once” is a myth.
        Meaning is not static. It evolves — with your seasons, shifts, and decisions.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Ikigami approaches purpose as a dynamic system: mindful in the small, intentional in the large.
        Your Navigator grows with you — not as a fixed result, but as a living pattern.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        High performers who support this process systematically
        gain a decisive advantage: fewer existential dead ends, clearer decisions,
        and more energy where it truly matters.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        It’s not about more goals. It’s about less waste.
        Less drift. More signal.
      </p>

      <div className="mt-16">
        <a href="/" className="text-sm underline hover:opacity-60">
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
