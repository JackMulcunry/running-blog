import React from "react";
import "./App.css";

function App() {
  return (
    console.log("App is rendering!")
    <div className="app">
      <header className="header">
        <h1 className="title">My Running Log</h1>
        <p className="subtitle">Tracking daily performance and progress</p>
      </header>

      <main className="main-content">
        <div id="blog-posts" className="blog-posts">
          {/* Sample blog post cards for demonstration */}
          <article className="post-card">
            <div className="post-header">
              <time className="post-date">December 15, 2024</time>
            </div>
            <div className="post-content">
              <p className="post-summary">
                Morning 5K run through Central Park. Perfect weather conditions
                with a slight tailwind. Focused on maintaining consistent pace
                and improving cadence.
              </p>
            </div>
            <div className="chart-container">
              <div className="chart-placeholder">
                <span>Performance Chart</span>
              </div>
            </div>
          </article>

          <article className="post-card">
            <div className="post-header">
              <time className="post-date">December 14, 2024</time>
            </div>
            <div className="post-content">
              <p className="post-summary">
                Interval training session: 8x400m repeats at track. Strong
                finish with negative splits on the final three intervals.
                Recovery time improving.
              </p>
            </div>
            <div className="chart-container">
              <div className="chart-placeholder">
                <span>Split Times Chart</span>
              </div>
            </div>
          </article>

          <article className="post-card">
            <div className="post-header">
              <time className="post-date">December 13, 2024</time>
            </div>
            <div className="post-content">
              <p className="post-summary">
                Long run day: 12 miles at conversational pace. Excellent
                endurance building session with steady heart rate throughout.
                Hydration strategy worked well.
              </p>
            </div>
            <div className="chart-container">
              <div className="chart-placeholder">
                <span>Heart Rate Zone Chart</span>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

export default App;
