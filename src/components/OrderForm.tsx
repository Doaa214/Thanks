import React, { useState } from 'react';
import { Send, Upload, CheckCircle } from 'lucide-react';

const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState<{
    fullName: string;
    phone: string;
    address: string;
    email: string;
    productType: string;
    measurements: string;
    deliveryDate: string;
    notes: string;
    referenceImage: File | null;
  }>({
    fullName: '',
    phone: '',
    address: '',
    email: '',
    productType: '',
    measurements: '',
    deliveryDate: '',
    notes: '',
    referenceImage: null
  });

  // const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitting] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const productTypes = [
    { value: '', label: 'اختاري نوع المنتج' },
    { value: 'مفرش', label: 'مفرش' },
    { value: 'كوفيرته', label: 'كوفيرته' },
    { value: 'سلة', label: 'سلة' },
    { value: 'غير ذلك', label: 'غير ذلك' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      referenceImage: file
    }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'الاسم الكامل مطلوب';
    if (!formData.phone.trim()) newErrors.phone = 'رقم الهاتف مطلوب';
    if (!formData.address.trim()) newErrors.address = 'العنوان التفصيلي مطلوب';
    if (!formData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }
    if (!formData.productType) newErrors.productType = 'نوع المنتج مطلوب';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   if (!validateForm()) return;

  //   setIsSubmitting(true);

  //   const form = new FormData();
  //   form.append("fullName", formData.fullName);
  //   form.append("email", formData.email);
  //   form.append("phone", formData.phone);
  //   form.append("address", formData.address);
  //   form.append("productType", formData.productType);
  //   form.append("measurements", formData.measurements);
  //   form.append("deliveryDate", formData.deliveryDate);
  //   form.append("notes", formData.notes);
  //   if (formData.referenceImage) {
  //     form.append("referenceImage", formData.referenceImage);
  //   }

  //   const scriptURL = "https://script.google.com/macros/s/AKfycbxVmnUG-B0xRQeG-uyIs1BM95TPWwaW57kZTlJemQxf-dO_c3Vn01jWOgTs5epopUz0lw/exec";

  //   try {
  //     const response = await fetch(scriptURL, {
  //       method: "POST",
  //       body: form,
  //     });

  //     const result = await response.text();
  //     alert(result);

  //     setFormData({
  //       fullName: '',
  //       phone: '',
  //       address: '',
  //       email: '',
  //       productType: '',
  //       measurements: '',
  //       deliveryDate: '',
  //       notes: '',
  //       referenceImage: null
  //     });
  //     setShowSuccess(true);
  //   } catch (error: unknown) {
  //     if (error instanceof Error) {
  //       console.error(error.message);
  //     } else {
  //       console.error("Unknown error:", error);
  //     }
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  if (!validateForm()) return;

  const form = event.target as HTMLFormElement;
  form.submit();

  // إعادة ضبط البيانات بعد الإرسال
  setFormData({
    fullName: '',
    phone: '',
    address: '',
    email: '',
    productType: '',
    measurements: '',
    deliveryDate: '',
    notes: '',
    referenceImage: null
  });

  setShowSuccess(true);
};





  return (
    <div className="form-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            
            {showSuccess && (
              <div className="alert alert-success success-alert d-flex align-items-center mb-4" role="alert">
                <CheckCircle size={24} className="me-3" />
                <div>
                  <h5 className="alert-heading mb-1">تم إرسال طلبك بنجاح! 🎉</h5>
                  <p className="mb-0">سنتواصل معك قريباً لتأكيد التفاصيل وموعد التسليم</p>
                </div>
              </div>
            )}
            
            <div className="card form-card">
              <div className="card-body p-4 p-md-5">
                {/* <form
  action="https://formsubmit.co/fatemanasr87@gmail.com"
  method="POST"
  encType="multipart/form-data"
  onSubmit={() => setShowSuccess(true)}
> */}

<form
  onSubmit={handleSubmit}
  action="https://formsubmit.co/harrasdoaa@gmail.com"
  method="POST"
  encType="multipart/form-data"
>

<input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />
  <input type="hidden" name="_autoresponse" value="شكرًا على طلبك! سنتواصل معك قريباً." />
  <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
  

                  <div className="row">
                    
                    {/* الاسم الكامل */}
                    <div className="col-md-6 mb-3">
                      <label htmlFor="fullName" className="form-label required">الاسم الكامل</label>
                      <input
                        type="text"
                        className={`form-control custom-input ${errors.fullName ? 'is-invalid' : ''}`}
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="أدخلي اسمك الكامل"
                      />
                      {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
                    </div>
                    
                    {/* رقم الهاتف */}
                    <div className="col-md-6 mb-3">
                      <label htmlFor="phone" className="form-label required">رقم الهاتف</label>
                      <input
                        type="tel"
                        className={`form-control custom-input ${errors.phone ? 'is-invalid' : ''}`}
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="01xxxxxxxx"
                      />
                      {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                    </div>
                    
                    {/* البريد الإلكتروني */}
                    <div className="col-12 mb-3">
                      <label htmlFor="email" className="form-label required">البريد الإلكتروني</label>
                      <input
                        type="email"
                        className={`form-control custom-input ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="example@email.com"
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                    
                    {/* العنوان التفصيلي */}
                    <div className="col-12 mb-3">
                      <label htmlFor="address" className="form-label required">العنوان التفصيلي</label>
                      <textarea
                        className={`form-control custom-textarea ${errors.address ? 'is-invalid' : ''}`}
                        id="address"
                        name="address"
                        rows={3}
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder=" أدخلي عنوانك التفصيلي مع رقم المبنى والشارع والحي و أقرب بريد لك"
                      ></textarea>
                      {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                    </div>
                    
                    {/* نوع المنتج */}
                    <div className="col-md-6 mb-3">
                      <label htmlFor="productType" className="form-label required">نوع المنتج</label>
                      <select
                        className={`form-select custom-select ${errors.productType ? 'is-invalid' : ''}`}
                        id="productType"
                        name="productType"
                        value={formData.productType}
                        onChange={handleInputChange}
                      >
                        {productTypes.map(type => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                      {errors.productType && <div className="invalid-feedback">{errors.productType}</div>}
                    </div>
                    
                    {/* المقاسات */}
                    <div className="col-md-6 mb-3">
                      <label htmlFor="measurements" className="form-label">المقاسات المطلوبة</label>
                      <input
                        type="text"
                        className="form-control custom-input"
                        id="measurements"
                        name="measurements"
                        value={formData.measurements}
                        onChange={handleInputChange}
                        placeholder="مثال: 150×200 سم"
                      />
                      <div className="form-text">أدخلي المقاسات بالسنتيمتر</div>
                    </div>
                    
                    {/* موعد التسليم */}
                    <div className="col-md-6 mb-3">
                      <label htmlFor="deliveryDate" className="form-label">موعد التسليم المفضل</label>
                      <input
                        type="date"
                        className="form-control custom-input"
                        id="deliveryDate"
                        name="deliveryDate"
                        value={formData.deliveryDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    
                    {/* صورة مرجعية */}
                    <div className="col-md-6 mb-3">
                      <label htmlFor="referenceImage" className="form-label">صورة مرجعية</label>
                      <div className="file-input-wrapper">
                        <input
                          type="file"
                          className="form-control custom-file-input"
                          id="referenceImage"
                          name="referenceImage"
                          onChange={handleFileChange}
                          accept="image/*"
                        />
                        <div className="file-input-icon">
                          <Upload size={20} />
                        </div>
                      </div>
                      <div className="form-text">اختياري - ارفقي صورة للتصميم المطلوب</div>
                    </div>
                    
                    {/* ملاحظات إضافية */}
                    <div className="col-12 mb-4">
                      <label htmlFor="notes" className="form-label">ملاحظات إضافية</label>
                      <textarea
                        className="form-control custom-textarea"
                        id="notes"
                        name="notes"
                        rows={4}
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="أي ملاحظات أو تفاصيل إضافية تودين إضافتها (الألوان المفضلة، نوع الخيط، إلخ...)"
                      ></textarea>
                    </div>

                    
                    
                    {/* زر الإرسال */}
                    <div className="col-12 text-center">
                      <button
                        type="submit"
                        className="btn btn-primary custom-submit-btn"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            جاري الإرسال...
                          </>
                        ) : (
                          <>
                            <Send size={20} className="me-2" />
                            إرسال الطلب
                          </>
                        )}
                      </button>
                    </div>
                    
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .form-section {
          background: linear-gradient(135deg, #fefefe 0%, #f9f4f4 100%);
          min-height: 100vh;
          padding: 40px 0;
        }
        
        .form-card {
          border: none;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(212, 165, 116, 0.15);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
        }
        
        .form-label {
          font-family: 'Cairo', sans-serif;
          font-weight: 600;
          color: #8b4513;
          margin-bottom: 8px;
        }
        
        .required::after {
          content: ' *';
          color: #dc3545;
        }
        
        .custom-input,
        .custom-textarea,
        .custom-select {
          border: 2px solid #e8d5c4;
          border-radius: 12px;
          padding: 12px 16px;
          font-family: 'Cairo', sans-serif;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.8);
        }
        
        .custom-input:focus,
        .custom-textarea:focus,
        .custom-select:focus {
          border-color: #d4a574;
          box-shadow: 0 0 0 0.2rem rgba(212, 165, 116, 0.25);
          background: rgba(255, 255, 255, 1);
        }
        
        .file-input-wrapper {
          position: relative;
        }
        
        .custom-file-input {
          padding-right: 50px;
        }
        
        .file-input-icon {
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #d4a574;
          pointer-events: none;
        }
        
        .custom-submit-btn {
          background: linear-gradient(135deg, #d4a574 0%, #b8956a 100%);
          border: none;
          border-radius: 25px;
          padding: 15px 40px;
          font-family: 'Cairo', sans-serif;
          font-weight: 600;
          font-size: 1.1rem;
          color: white;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(212, 165, 116, 0.3);
        }
        
        .custom-submit-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #b8956a 0%, #a0845e 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(212, 165, 116, 0.4);
        }
        
        .custom-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .success-alert {
          border: none;
          border-radius: 15px;
          background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
          border-left: 5px solid #28a745;
          font-family: 'Cairo', sans-serif;
        }
        
        .form-text {
          font-family: 'Cairo', sans-serif;
          color: #a0522d;
          font-size: 0.875rem;
        }
        
        .invalid-feedback {
          font-family: 'Cairo', sans-serif;
        }
        
        @media (max-width: 768px) {
          .form-section {
            padding: 20px 0;
          }
          
          .card-body {
            padding: 20px !important;
          }
          
          .custom-submit-btn {
            width: 100%;
            padding: 12px 30px;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default OrderForm;
