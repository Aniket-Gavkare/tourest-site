import React from 'react';

export default function Footer() {
  return (
    <footer className="footer" style={{ backgroundImage: "url('../assets/images/footer-bg.png')" }}>
      <div className="container">
        <div className="footer-top">
          <ul className="footer-list">
            <li><p className="footer-list-title">Top destination</p></li>
            <li><a href="#" className="footer-link">Indonesia, Jakarta</a></li>
            {/* More links */}
          </ul>
          {/* Other Footer Lists */}
        </div>
        <div className="footer-bottom">
          <a href="#" className="logo">Tourest</a>
          <p className="copyright">
            &copy; 2022 <a href="#" className="copyright-link">codewithsadee</a>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
