
import {  Facebook } from 'lucide-react';
import { CheckCircle, Heart, Star, ArrowRight, Gift } from 'lucide-react';

function App() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{ 
        background: 'linear-gradient(135deg, #0f4c4c 0%, #134e4a 50%, #1e5c5c 100%)'
      }}
    >
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-orange-300 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-orange-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-4 h-4 bg-orange-300 rounded-full opacity-50 animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-orange-400 rounded-full opacity-60 animate-pulse delay-1500"></div>
        <div className="absolute top-1/2 left-5 w-3 h-3 bg-orange-300 rounded-full opacity-40 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        {/* Main thank you card */}
        <div 
          className="bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden"
          style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)' }}
        >
          {/* Decorative top border */}
          <div 
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: 'linear-gradient(90deg, #f97316, #fb923c, #fdba74)' }}
          ></div>
          
          {/* Success icon with animation */}
          <div className="relative mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full shadow-xl relative">
              <CheckCircle className="w-12 h-12 text-white" />
              <div className="absolute inset-0 rounded-full bg-orange-400 animate-ping opacity-25"></div>
            </div>
          </div>

          {/* Main heading */}
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 tracking-wide"
            style={{ 
              color: '#0f4c4c',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              fontFamily: '"Arial", sans-serif'
            }}
          >
            شكراً لك!
          </h1>

          {/* Subtitle */}
          <h2 
            className="text-xl md:text-2xl mb-8 font-medium"
            style={{ color: '#134e4a' }}
          >
            نقدر ثقتك وتعاملك معنا
          </h2>

          {/* Thank you message */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-8 border border-gray-100">
            <p 
              className="text-lg md:text-xl leading-relaxed mb-4"
              style={{ color: '#0f4c4c', lineHeight: '1.8' }}
            >
              عزيزنا العميل، يسعدنا أن نشكرك على اختيارك لمتجر موني للحرف اليدوية. 
              ثقتك بنا تحفزنا لتقديم أفضل المنتجات والخدمات.
            </p>
            <p 
              className="text-base md:text-lg opacity-80"
              style={{ color: '#134e4a' }}
            >
              نتطلع لخدمتك مرة أخرى وتقديم تجربة تسوق مميزة تليق بذوقك الرفيع.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
              <Heart className="w-8 h-8 text-orange-500 mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">جودة عالية</h3>
              <p className="text-sm text-gray-600 text-center">منتجات حرفية مصنوعة بعناية وحب</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200">
              <Star className="w-8 h-8 text-teal-600 mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">خدمة مميزة</h3>
              <p className="text-sm text-gray-600 text-center">دعم عملاء على مدار الساعة</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
              <Gift className="w-8 h-8 text-orange-500 mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">عروض حصرية</h3>
              <p className="text-sm text-gray-600 text-center">خصومات وهدايا للعملاء المميزين</p>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            <a 
    href="https://monystoreform3.netlify.app/"
    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
    style={{ boxShadow: '0 10px 25px rgba(249, 115, 22, 0.3)' }}
  >
    تسوق مرة أخرى
    <ArrowRight className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </a>
            

            <a 
    href="https://www.facebook.com/100090729376546/posts/708897418811231/ "
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-8 py-4 border-2 border-teal-600 text-teal-700 font-semibold rounded-full hover:bg-teal-50 transition-all duration-300"
  >
    <Facebook className="ml-2 w-5 h-5" />
    تابعنا على وسائل التواصل
  </a>
          </div>

          {/* Contact info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-2">
              للاستفسارات والدعم الفني
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-600">
              <span>📧 fatemanasr87@gmail.com</span>
              <span className="hidden sm:inline">|</span>
              <span>📱 +20 101 673 6770</span>
              <span className="hidden sm:inline">|</span>
              <span>🌐 https://monystoreform3.netlify.app/</span>
            </div>
          </div>
        </div>

        {/* Bottom decorative text */}
        <div className="mt-8">
          <p 
            className="text-lg font-medium opacity-90"
            style={{ color: '#fef3e2' }}
          >
            ✨ متجر موني للحرف اليدوية - حيث الإبداع يلتقي بالجودة ✨
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;