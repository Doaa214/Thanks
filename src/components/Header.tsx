import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header-section">
      <div className="container">
        <div className="row justify-content-center align-items-center py-4">
          <div className="col-auto">
            <div className="logo-container d-flex align-items-center">
              <img src="/MONY.png" alt="MONY STORE" className="logo-image me-3" />
              <div>
                <h1 className="logo-text mb-0">MONY STORE</h1>
                <p className="logo-subtitle mb-0">للكروشيه و الخرز المخصص</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="page-title">نموذج الطلب المخصص</h2>
            <p className="page-subtitle">اطلبي قطعتك المفضلة بالمقاسات والألوان التي تحبينها</p>
          </div>
        </div>
      </div>
      
      <style>{`
        .header-section {
          background: linear-gradient(135deg, #fdf6f6 0%, #f8f0f0 100%);
          border-bottom: 3px solid #d4a574;
          box-shadow: 0 2px 10px rgba(212, 165, 116, 0.1);
        }
        
        .logo-image {
          width: 50px;
          height: 50px;
          object-fit: contain;
          filter: drop-shadow(0 2px 4px rgba(212, 165, 116, 0.3));
        }
        
        .logo-text {
          font-family: 'Cairo', sans-serif;
          font-size: 2rem;
          font-weight: bold;
          color: #8b4513;
          letter-spacing: 2px;
        }
        
        .logo-subtitle {
          font-family: 'Cairo', sans-serif;
          font-size: 0.9rem;
          color: #a0522d;
          text-align: right;
        }
        
        .page-title {
          font-family: 'Cairo', sans-serif;
          font-size: 2.2rem;
          font-weight: bold;
          color: #8b4513;
          margin-bottom: 10px;
        }
        
        .page-subtitle {
          font-family: 'Cairo', sans-serif;
          font-size: 1.1rem;
          color: #a0522d;
          margin-bottom: 0;
        }
        
        @media (max-width: 768px) {
          .logo-text {
            font-size: 1.5rem;
          }
          
          .page-title {
            font-size: 1.8rem;
          }
          
          .page-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;