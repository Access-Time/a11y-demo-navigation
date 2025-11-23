import Link from 'next/link';

// NO METADATA EXPORT - Inherits "Navigation A11y Test Suite"

export default function DeltaPage() {
  return (
    <>
        <nav>
            <Link href="/">← Back to Dashboard</Link>
        </nav>
        <div className="main-container">
            <p className="heading-style">Test Case Delta</p>
            <p>This page represents <strong>Complete Accessibility Failure</strong>.</p>
            <ul>
                <li><strong>No <code>&lt;main&gt;</code> landmark</strong>.</li>
                <li><strong>No Headings</strong>.</li>
                <li><strong>Stale/Generic Title</strong> (Inherits Root Layout title).</li>
            </ul>
        </div>
    </>
  );
}
