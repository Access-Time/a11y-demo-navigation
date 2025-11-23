import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gamma Case | Next.js',
};

export default function GammaPage() {
  return (
    <>
        <nav>
            <Link href="/">← Back to Dashboard</Link>
        </nav>
        {/* No Main */}
        <div className="main-container">
            <p className="heading-style">Test Case Gamma</p>
            <p>This page represents <strong>Missing Landmarks and Headings</strong>.</p>
            <ul>
                <li><strong>No <code>&lt;main&gt;</code> landmark</strong> (using div).</li>
                <li><strong>No Headings</strong>.</li>
                <li>Updates <code>&lt;title&gt;</code> via metadata export.</li>
            </ul>
        </div>
    </>
  );
}
