export const metadata = {
  title: 'Questions – Ikigami App',
  description:
    'The second step in your reflection. Choose what resonates. Write what matters.',
  openGraph: {
    title: 'Ikigami Questions',
    description:
      'The second step in your reflection. Choose what resonates. Write what matters.',
    url: 'https://www.ikigami.de/questions',
    siteName: 'Ikigami',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Ikigami – Questions',
    description:
      'After meditation comes resonance. One question per dimension. Four moments of clarity.',
  },
};

export default function QuestionsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-32 font-cm">
      <h1 className="text-3xl sm:text-4xl mb-8">Questions</h1>

      <p className="text-lg leading-relaxed mb-6">
        After the meditation, you enter the second phase: focused reflection.
        Four dimensions guide the structure — rooted in the classical Ikigai model:
      </p>

      <ul className="list-disc ml-6 text-base mb-6">
        <li><strong>Love</strong> – what you deeply care about</li>
        <li><strong>Skill</strong> – what you're good at</li>
        <li><strong>World</strong> – what the world needs from you</li>
        <li><strong>Finance</strong> – what sustains and supports you</li>
      </ul>

      <p className="text-lg leading-relaxed mb-6">
        For each of these four dimensions, you will receive a small set of carefully selected questions — drawn from a psychological question bank based on purpose, well-being, and self-leadership research.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        You pick the one question that resonates most. No overthinking — just intuition. This one question becomes your anchor.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Then, you write. Three brief aspects. Free form. Unfiltered. Honest. You do this four times — once per dimension. It’s not about perfection. It’s about presence.
      </p>

      <hr className="my-12 border-gray-300" />

      <h2 className="text-2xl font-semibold mb-4">Why this matters</h2>
      <p className="text-lg leading-relaxed mb-6">
        This is not just journaling. And it’s definitely not just ChatGPT in a pretty wrapper.
        The AI here doesn’t give you the answers — it holds space, recognizes patterns, and reflects what’s already within.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        The structure creates safety. The questions unlock resonance. The act of writing reclaims meaning. This is where your Ikigai becomes real — not as a concept, but as lived experience.
      </p>

      <div className="mt-16">
        <a href="/" className="text-sm underline hover:opacity-60">
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
