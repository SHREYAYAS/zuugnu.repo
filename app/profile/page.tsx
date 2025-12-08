'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function ProfilePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);
  const [isLoadingCamera, setIsLoadingCamera] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [formData, setFormData] = useState({
    kycType: '',
    kycNumber: '',
    profilePic: '',
    name: '',
    gender: '',
    mobile: '',
    country: '+91',
    email: '',
    dob: '',
    country_name: '',
    state: '',
    district: '',
    pincode: '',
    place: '',
    languages: [] as string[],
    referBy: '',
  });

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMultiSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions, option => option.value);
    setFormData(prev => ({ ...prev, languages: selected }));
  };

  const startCamera = async () => {
    setIsLoadingCamera(true);
    setCameraError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: 'user',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setIsCameraActive(true);
        
        // Wait for video to load and play
        await new Promise((resolve, reject) => {
          const timeout = setTimeout(() => {
            reject(new Error('Camera initialization timeout'));
          }, 5000);
          
          const handleCanPlay = () => {
            clearTimeout(timeout);
            videoRef.current?.removeEventListener('canplay', handleCanPlay);
            videoRef.current?.play().then(() => {
              setIsLoadingCamera(false);
              resolve(true);
            }).catch(err => {
              console.error('Play error:', err);
              setCameraError('Unable to play video stream.');
              setIsLoadingCamera(false);
            });
          };
          
          if (videoRef.current) {
            videoRef.current.addEventListener('canplay', handleCanPlay);
          }
        });
      }
    } catch (error) {
      console.error('Camera error:', error);
      setCameraError(error instanceof Error ? error.message : 'Unable to access camera. Please ensure you have granted camera permissions.');
      setIsLoadingCamera(false);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0);
        const imageData = canvasRef.current.toDataURL('image/jpeg', 0.9);
        setCapturedPhoto(imageData);
        setFormData(prev => ({ ...prev, profilePic: imageData }));
      }
    }
  };

  const retakePhoto = () => {
    setCapturedPhoto(null);
    startCamera();
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsCameraActive(false);
    setIsLoadingCamera(false);
  };

  const validateStep = (): boolean => {
    switch (currentStep) {
      case 1:
        if (!formData.kycType || !formData.kycNumber) {
          alert('Please fill all required fields');
          return false;
        }
        break;
      case 2:
        if (!formData.profilePic || !formData.name || !formData.gender) {
          alert('Please fill all required fields and capture a photo');
          return false;
        }
        break;
      case 3:
        if (!formData.mobile || !formData.email || !formData.dob) {
          alert('Please fill all required fields');
          return false;
        }
        break;
      case 4:
        if (!formData.country_name || !formData.state || !formData.district || !formData.pincode) {
          alert('Please fill all required fields');
          return false;
        }
        break;
      case 5:
        if (!formData.place || formData.languages.length === 0) {
          alert('Please fill all required fields');
          return false;
        }
        break;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep() && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      alert('Profile submitted successfully! ✅');
      console.log('Form Data:', formData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8">
            <h1 className="text-4xl font-bold mb-4">My Profile</h1>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <p className="text-sm leading-relaxed">
                ⚠️ Please update your real time pic (face must be clearly visible) and other info. 
                The account may be disabled if any discrepancy is found at any stage.
              </p>
            </div>
          </div>

          {/* Form Container */}
          <div className="p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-purple-600">Step {currentStep} of {totalSteps}</span>
                <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: KYC Verification */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">KYC ID Type</label>
                    <select
                      name="kycType"
                      value={formData.kycType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-xl text-gray-800 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
                    >
                      <option value="">Select KYC ID Type</option>
                      <option value="aadhar">Aadhar Card</option>
                      <option value="pan">PAN Card</option>
                      <option value="passport">Passport</option>
                      <option value="driving">Driving License</option>
                      <option value="voter">Voter ID</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">KYC ID Number</label>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        name="kycNumber"
                        value={formData.kycNumber}
                        onChange={handleInputChange}
                        placeholder="Enter ID Number"
                        className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
                      />
                      <button
                        type="button"
                        className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all"
                        onClick={() => alert('KYC verification initiated')}
                      >
                        Verify
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Profile Picture, Name, Gender */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">Profile Picture (Selfie)</label>
                    {/* Camera error message */}
                    {cameraError && (
                      <div className="text-red-600 text-center mb-4 p-3 bg-red-50 rounded-lg">{cameraError}</div>
                    )}
                    {/* Loading indicator */}
                    {isLoadingCamera && (
                      <div className="text-center py-8">
                        <div className="animate-spin h-8 w-8 mx-auto mb-2 border-4 border-purple-400 border-t-transparent rounded-full"></div>
                        <div className="text-purple-600 font-semibold">Starting camera...</div>
                      </div>
                    )}
                    {/* Initial state: show camera icon */}
                    {!isCameraActive && !capturedPhoto && !isLoadingCamera && (
                      <div
                        onClick={startCamera}
                        className="border-2 border-dashed border-purple-400 rounded-2xl p-12 text-center bg-purple-50/50 cursor-pointer hover:bg-purple-100/50 transition-all"
                      >
                        <div className="text-5xl mb-4">📷</div>
                        <p className="text-gray-700 font-semibold mb-1">Click to open camera</p>
                        <small className="text-gray-500">Face must be clearly visible</small>
                      </div>
                    )}
                    {/* Camera active: show video and capture/retake buttons */}
                    {isCameraActive && (
                      <div className="space-y-4">
                        <div className="relative w-full rounded-2xl overflow-hidden bg-black">
                          <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            muted
                            className="w-full h-auto block"
                            style={{ display: 'block', width: '100%', height: 'auto' }}
                          />
                          {capturedPhoto && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 rounded-2xl">
                              <div className="text-center">
                                <img src={capturedPhoto} alt="Captured selfie" className="w-full h-auto rounded-lg border-4 border-purple-400" />
                              </div>
                            </div>
                          )}
                        </div>
                        <canvas ref={canvasRef} className="hidden" />
                        <div className="flex gap-3 justify-center">
                          {!capturedPhoto && (
                            <button
                              type="button"
                              onClick={capturePhoto}
                              className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all flex items-center gap-2"
                            >
                              <span>📸</span> Capture Photo
                            </button>
                          )}
                          {capturedPhoto && (
                            <button
                              type="button"
                              onClick={retakePhoto}
                              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all flex items-center gap-2"
                            >
                              <span>📷</span> Retake Photo
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={stopCamera}
                            className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-all"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-3">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-3">Gender</label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-xl text-gray-800 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Information */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">Mobile Number</label>
                    <div className="flex gap-3">
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-32 px-4 py-3 bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-xl text-gray-800 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
                      >
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+971">🇦🇪 +971</option>
                      </select>
                      <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="Enter mobile number"
                        className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
                      />
                      <button
                        type="button"
                        className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all whitespace-nowrap"
                        onClick={() => alert('OTP sent to your mobile')}
                      >
                        Verify
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">Email Address</label>
                    <div className="flex gap-3">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter email address"
                        className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
                      />
                      <button
                        type="button"
                        className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all whitespace-nowrap"
                        onClick={() => alert('Verification link sent to email')}
                      >
                        Verify
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-xl text-gray-800 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Address Details */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-3">Country</label>
                      <select
                        name="country_name"
                        value={formData.country_name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-xl text-gray-800 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
                      >
                        <option value="">Select Country</option>
                        <option value="india">India</option>
                        <option value="usa">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="uae">United Arab Emirates</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-3">State</label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-xl text-gray-800 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
                      >
                        <option value="">Select State</option>
                        <option value="maharashtra">Maharashtra</option>
                        <option value="delhi">Delhi</option>
                        <option value="karnataka">Karnataka</option>
                        <option value="gujarat">Gujarat</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-3">District</label>
                      <select
                        name="district"
                        value={formData.district}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-xl text-gray-800 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
                      >
                        <option value="">Select District</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="pune">Pune</option>
                        <option value="bangalore">Bangalore</option>
                        <option value="delhi">Delhi</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-3">Pin Code</label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        placeholder="Enter pin code"
                        maxLength={6}
                        className="w-full px-4 py-3 bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Additional Details */}
              {currentStep === 5 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">Place</label>
                    <select
                      name="place"
                      value={formData.place}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-xl text-gray-800 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
                    >
                      <option value="">Select Place</option>
                      <option value="andheri">Andheri</option>
                      <option value="bandra">Bandra</option>
                      <option value="whitefield">Whitefield</option>
                      <option value="koramangala">Koramangala</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">Languages (Hold Ctrl/Cmd for multiple)</label>
                    <select
                      multiple
                      value={formData.languages}
                      onChange={handleMultiSelect}
                      className="w-full px-4 py-3 bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-xl text-gray-800 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all h-32"
                    >
                      <option value="english">English</option>
                      <option value="hindi">Hindi</option>
                      <option value="marathi">Marathi</option>
                      <option value="kannada">Kannada</option>
                      <option value="tamil">Tamil</option>
                      <option value="telugu">Telugu</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3">Refer By (Optional)</label>
                    <input
                      type="text"
                      name="referBy"
                      value={formData.referBy}
                      onChange={handleInputChange}
                      placeholder="Enter referral code"
                      className="w-full px-4 py-3 bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8 pt-8 border-t border-gray-200">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={previousStep}
                    className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-xl transition-all"
                  >
                    Previous
                  </button>
                )}
                
                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all transform hover:-translate-y-0.5 shadow-lg"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all transform hover:-translate-y-0.5 shadow-lg"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
