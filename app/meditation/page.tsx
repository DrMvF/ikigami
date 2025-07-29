import DeviceFrame from '@/components/DeviceFrame';

export const metadata = {
  title: 'Meditation – Ikigami App',
  description:
    'A meditative break to access your inner clarity. Prepare your mind and body for deep reflection.',
  openGraph: {
    title: 'Ikigami Meditation',
    description:
      'A meditative break to access your inner clarity. Prepare your mind and body for deep reflection.',
    url: 'https://www.ikigami.de/meditation',
    siteName: 'Ikigami',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Ikigami Meditation',
    description:
      'The first step on your path to meaning. A calm voice. A deep shift. A moment of clarity.',
  },
};

export default function MeditationPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-32 font-cm">
      <h1 className="text-3xl sm:text-4xl mb-8">Meditation</h1>

      <p className="text-lg leading-relaxed mb-6">
        The start is crucial. Before we reflect, we must arrive.
        The Ikigami meditation is a tailor-made invitation to slow down,
        to silence the noise, and to gently open the gate to your inner clarity.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Meditation is not about emptying the mind – it’s about
        shifting attention. In psychology, this shift from
        sympathetic (fight-or-flight) to parasympathetic (rest-and-digest)
        activity enables deeper access to intuition, emotional regulation, and
        insight-based thinking.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        I recorded this meditation with my own voice – deliberately.
        Because presence cannot be outsourced. It needs resonance, rhythm, and realness.
        What you hear is not a polished studio script – it’s me, holding space for you.
        Gently. Quietly. Bravely.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        Take this short break before each reflection.
        It’s not a habit. It’s a signal: to return.
      </p>

      <hr className="my-12 border-gray-300" />

      <h2 className="text-2xl font-semibold mb-4">How to access</h2>
      <p className="text-lg mb-6">
        The Ikigami Meditation is exclusively available inside the app.
        It is directly integrated into your reflection flow – as the very first step
        before the four questions appear.
        No external audio. No distractions. Just you, your breath, and a quiet space to begin.
      </p>

      <p className="text-lg mb-6 italic">
        → You’ll hear it only when you need it – not before.
      </p>

      {/* 📱 Screenshot in DeviceFrame */}
      <DeviceFrame
        src="/screens/meditation.png"
        alt="Screenshot of Ikigami Meditation screen"
      />

      <div className="mt-16">
        <a href="/" className="text-sm underline hover:opacity-60">
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
