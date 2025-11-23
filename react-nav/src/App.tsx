import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

const Dashboard = () => {
  const navigate = useNavigate();

  return (
      <main>
        <h1>React Navigation A11y Test Suite</h1>
        <p>Client-Side Navigation (SPA) using React Router</p>

        <p>
          This is a Single Page Application. Navigation between pages should not
          trigger a full page reload unless specified.
        </p>

        <section aria-labelledby="framework-link" className="nav-section">
          <h2 id="framework-link">Framework Link</h2>
          <p>
            Standard <code>&lt;Link&gt;</code> component.
          </p>
          <ul>
            <li>
              <Link to="/alpha">Alpha</Link>
            </li>
            <li>
              <Link to="/beta">Beta</Link>
            </li>
            <li>
              <Link to="/gamma">Gamma</Link>
            </li>
            <li>
              <Link to="/delta">Delta</Link>
            </li>
          </ul>
        </section>

        <section aria-labelledby="programmatic" className="nav-section">
          <h2 id="programmatic">Programmatic</h2>
          <p>
            Button triggering <code>navigate()</code>.
          </p>
          <ul>
            <li>
              <button onClick={() => navigate("/alpha")}>Alpha</button>
            </li>
            <li>
              <button onClick={() => navigate("/beta")}>Beta</button>
            </li>
            <li>
              <button onClick={() => navigate("/gamma")}>Gamma</button>
            </li>
            <li>
              <button onClick={() => navigate("/delta")}>Delta</button>
            </li>
          </ul>
        </section>
      </main>
  );
};

const Alpha = () => {
  useTitle("Alpha Case | React SPA");
  return (
    <>
      <nav>
        <Link to="/">← Back to Dashboard</Link>
      </nav>
      <main>
        <h1>Test Case Alpha</h1>
        <p>
          This page represents the <strong>Ideal Structure</strong>.
        </p>
        <ul>
          <li>
            Has a <code>&lt;main&gt;</code> landmark.
          </li>
          <li>
            Has a correct <code>&lt;h1&gt;</code>.
          </li>
          <li>
            Updates <code>&lt;title&gt;</code> via effect.
          </li>
        </ul>
      </main>
    </>
  );
};

const Beta = () => {
  useTitle("Beta Case | React SPA");
  return (
    <>
      <nav>
        <Link to="/">← Back to Dashboard</Link>
      </nav>
      <main>
        {/* Missing H1 */}
        <h2>Test Case Beta</h2>
        <p>
          This page represents <strong>Structural Hierarchy Issues</strong>.
        </p>
        <ul>
          <li>
            Has a <code>&lt;main&gt;</code> landmark.
          </li>
          <li>
            <strong>
              Missing <code>&lt;h1&gt;</code>
            </strong>{" "}
            (starts with h2).
          </li>
          <li>
            Updates <code>&lt;title&gt;</code> via effect.
          </li>
        </ul>
      </main>
    </>
  );
};

const Gamma = () => {
  useTitle("Gamma Case | React SPA");
  return (
    <>
      <nav>
        <Link to="/">← Back to Dashboard</Link>
      </nav>
      {/* No Main */}
      <div className="main-container">
        <p className="heading-style">Test Case Gamma</p>
        <p>
          This page represents <strong>Missing Landmarks and Headings</strong>.
        </p>
        <ul>
          <li>
            <strong>
              No <code>&lt;main&gt;</code> landmark
            </strong>{" "}
            (using div).
          </li>
          <li>
            <strong>No Headings</strong>.
          </li>
          <li>
            Updates <code>&lt;title&gt;</code> via effect.
          </li>
        </ul>
      </div>
    </>
  );
};

const Delta = () => {
  // Intentionally Stale Title
  return (
    <>
      <nav>
        <Link to="/">← Back to Dashboard</Link>
      </nav>
      <div className="main-container">
        <p className="heading-style">Test Case Delta</p>
        <p>
          This page represents <strong>Complete Accessibility Failure</strong>.
        </p>
        <ul>
          <li>
            <strong>
              No <code>&lt;main&gt;</code> landmark
            </strong>
            .
          </li>
          <li>
            <strong>No Headings</strong>.
          </li>
          <li>
            <strong>Stale Title</strong> (Title remains "Dashboard").
          </li>
        </ul>
      </div>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/alpha" element={<Alpha />} />
        <Route path="/beta" element={<Beta />} />
        <Route path="/gamma" element={<Gamma />} />
        <Route path="/delta" element={<Delta />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
