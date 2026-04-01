import { Metadata } from 'next';
import LifeAdminClient from './LifeAdminClient';

export const metadata: Metadata = {
  title: "Quản trị Life | QKIT Software",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <LifeAdminClient />;
}
