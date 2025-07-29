export const metadata = {
  title: 'Imprint – Ikigami',
  description: 'Legal details and imprint of the Ikigami App.',
};

import { redirect } from 'next/navigation';

export default function ImpressumPage() {
  redirect('/legal');
}
