import DeviceFrame from '@/components/DeviceFrame';

export const metadata = {
  title: 'Reflection – Ikigami App',
  description:
    'This is where your input becomes insight. A psychologically filtered, AI-supported reflection process – designed to extract the essence.',
  openGraph: {
    title: 'Reflection – Ikigami App',
    description:
      'This is where your input becomes insight. A psychologically filtered, AI-supported reflection process – designed to extract the essence.',
    url: 'https://www.ikigami.de/reflection',
    siteName: 'Ikigami',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Ikigami – Reflection',
    description:
      'AI meets intuition: how your words turn into patterns, insights, and meaning.',
  },
};

export default function ReflectionPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-32 font-cm">
      <h1 className="text-3xl sm:text-4xl mb-8">Reflection</h1>

      <p className="text-lg leading-relaxed mb-6">
        This is where everything comes together.
        After your four reflections — one for each Ikigai dimension — your inputs are processed silently in the background.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Unlike traditional journaling, this is not about writing more or phrasing better.
        The goal is not volume. It’s clarity.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Using a psychologically grounded model based on positive psychology,
        your responses are gently filtered, condensed, and interconnected.
        The system looks for overlaps, contradictions, and emerging insights —
        across dimensions and over time.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        What would be hard to see with pen and paper — scattered notes, buried patterns, quiet recurrences —
        becomes visible here. Intelligently. Respectfully. In rhythm with your own voice.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Reflection, in this sense, is not about looking back. It’s about listening in.
        You give presence — and receive perspective.
      </p>

      <hr className="my-12 border-gray-300" />

      <h2 className="text-2xl font-semibold mb-4">What the AI does — and doesn’t do</h2>
      <p className="text-lg leading-relaxed mb-6">
        This is not an answer generator. It doesn’t give advice, summaries, or goals.
        Instead, it reads like a quiet companion — one that listens for truth,
        and mirrors back what you already know, but haven’t yet seen clearly.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        The intelligence here is not artificial. It’s relational.
        Between your voice, your timing, your patterns — and your own growth.
      </p>

      {/* 📱 Screenshot */}
      <DeviceFrame src="/screens/analyze.png" alt="Reflection analysis screenshot" />

      <div className="mt-16">
        <a href="/" className="text-sm underline hover:opacity-60">
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
