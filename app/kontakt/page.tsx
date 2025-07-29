export const metadata = {
  title: 'Contact – Ikigami',
  description: 'Contact information and legal details of the Ikigami App.',
};

import { redirect } from 'next/navigation';

export default function KontaktPage() {
  redirect('/legal');
}
