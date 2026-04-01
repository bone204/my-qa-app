import { Metadata } from 'next';
import BlogAdminClient from './BlogAdminClient';

export const metadata: Metadata = {
  title: "Quản trị Blog | QKIT Software",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <BlogAdminClient />;
}
