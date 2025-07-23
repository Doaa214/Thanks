import React from 'react';
// import { Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="logo-container">
          <img src="/MONY.png" alt="MONY STORE" className="logo-image" />
        </div>
        <div className="loading-text">جاري التحميل...</div>
      </div>
      
      <style>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #fdf6f6 0%, #f8f0f0 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          animation: fadeOut 0.5s ease-in-out 2.5s forwards;
        }
        
        .loading-content {
          text-align: center;
          animation: pulse 2s ease-in-out infinite;
        }
        
        .logo-container {
          margin-bottom: 20px;
        }
        
        .logo-image {
  width: 120px;
  height: 120px;
  object-fit: cover; /* أو contain حسب التصميم */
  animation: pulse 2s ease-in-out infinite;
  filter: drop-shadow(0 4px 8px rgba(212, 165, 116, 0.3));
  border-radius: 50%; /* هذا يجعل الصورة دائرية */
  border: 3px solid #d4a574; /* اختياري - لإطار أنيق */
  background-color: white; /* اختياري لو كانت صورة الشعار شفافة */
}

        
        .loading-text {
          color: #8b4513;
          font-size: 1.2rem;
          font-family: 'Cairo', sans-serif;
          margin-top: 20px;
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        
        @keyframes fadeOut {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;