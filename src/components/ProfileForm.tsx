'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface ProfileFormProps {
  onClose?: () => void;
}

export default function ProfileForm({ onClose }: ProfileFormProps) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [profilePic, setProfilePic] = useState('');
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [photoPreview, setPhotoPreview] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [formData, setFormData] = useState({
    kycType: '',
    kycNumber: '',
    name: '',
    gender: '',
    mobile: '',
    email: '',
    dob: '',
    country: '',
    state: '',
    district: '',
    pincode: '',
    place: '',
    languages: [] as string[],
    referBy: '',
  });

  const totalSteps = 5;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setFormData(prev => ({
      ...prev,
      languages: selectedOptions
    }));
  };

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      });

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
        setCameraActive(true);
        setPhotoPreview(false);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Unable to access camera. Please ensure you have granted camera permissions.');
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setCameraActive(false);
    setPhotoPreview(false);
  };

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (context) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageData = canvas.toDataURL('image/jpeg', 0.9);
      setProfilePic(imageData);
      setFormData(prev => ({ ...prev, profilePic: imageData }));

      if (stream) {
        stream.getTracks().forEach(track => track.stop());
        setStream(null);
      }

      setCameraActive(false);
      setPhotoPreview(true);
    }
  };

  const retakePhoto = () => {
    setProfilePic('');
    setPhotoPreview(false);
    startCamera();
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile data:', { ...formData, profilePic });
    // Show success screen before entering dashboard
    router.push('/success');
  };

  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 text-center rounded-t-2xl">
          <h1 className="text-4xl font-black mb-4 text-white drop-shadow-lg">My Profile</h1>
        </div>

        {/* Form Container */}
        <div className="p-8">
          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-gray-200 rounded-full mb-8 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: KYC Verification */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center text-indigo-600 font-semibold mb-6">Step 1 of 5</div>

                <div>
                  <label className="block font-semibold text-gray-800 mb-2">KYC ID Type</label>
                  <select
                    id="kycType"
                    value={formData.kycType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none bg-gray-50"
                    required
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
                  <label className="block font-semibold text-gray-800 mb-2">KYC ID Number</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      id="kycNumber"
                      value={formData.kycNumber}
                      onChange={handleInputChange}
                      placeholder="Enter ID Number"
                      className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none bg-gray-50"
                      required
                    />
                    <button
                      type="button"
                      className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 whitespace-nowrap font-semibold"
                    >
                      Verify
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Profile Picture, Name, Gender */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center text-indigo-600 font-semibold mb-6">Step 2 of 5</div>

                <div className="bg-yellow-400 p-4 rounded-lg text-sm font-semibold text-gray-900">
                  ⚠️ Face must be clearly visible in the photo
                </div>

                <div>
                  <label className="block font-semibold text-gray-800 mb-4">Profile Picture (Selfie)</label>

                  {!cameraActive && !photoPreview && (
                    <button
                      type="button"
                      onClick={startCamera}
                      className="w-full border-2 border-dashed border-indigo-600 rounded-lg p-8 text-center bg-blue-50 cursor-pointer hover:bg-blue-100 transition"
                    >
                      <div className="text-5xl mb-3">📷</div>
                      <p className="font-semibold text-gray-800">Click to open camera</p>
                      <p className="text-sm text-gray-600">Face must be clearly visible</p>
                    </button>
                  )}

                  {cameraActive && (
                    <div className="space-y-4">
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        className="w-full rounded-lg bg-black"
                      />
                      <div className="flex gap-3 justify-center">
                        <button
                          type="button"
                          onClick={capturePhoto}
                          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-semibold"
                        >
                          📸 Capture Photo
                        </button>
                        <button
                          type="button"
                          onClick={stopCamera}
                          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-semibold"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}

                  {photoPreview && (
                    <div className="space-y-4 text-center">
                      {profilePic && (
                        <img src={profilePic} alt="Captured" className="w-full max-w-sm mx-auto rounded-lg" />
                      )}
                      <button
                        type="button"
                        onClick={retakePhoto}
                        className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-semibold"
                      >
                        📷 Retake Photo
                      </button>
                    </div>
                  )}

                  <canvas ref={canvasRef} style={{ display: 'none' }} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-gray-800 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none bg-gray-50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-gray-800 mb-2">Gender</label>
                    <select
                      id="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none bg-gray-50"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={previousStep}
                    className="flex-1 py-3 bg-gray-400 text-white rounded-lg font-semibold hover:bg-gray-500 transition flex items-center justify-center gap-2"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center text-indigo-600 font-semibold mb-6">Step 3 of 5</div>

                <div>
                  <label className="block font-semibold text-gray-800 mb-2">Mobile Number</label>
                  <div className="flex gap-2">
                    <select className="w-24 px-3 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none bg-gray-50">
                      <option>🇮🇳 +91</option>
                      <option>🇺🇸 +1</option>
                      <option>🇬🇧 +44</option>
                    </select>
                    <input
                      type="text"
                      id="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="Enter mobile number"
                      className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none bg-gray-50"
                      required
                    />
                    <button
                      type="button"
                      className="px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 whitespace-nowrap font-semibold text-sm"
                    >
                      Verify
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-gray-800 mb-2">Email Address</label>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter email address"
                      className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none bg-gray-50"
                      required
                    />
                    <button
                      type="button"
                      className="px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 whitespace-nowrap font-semibold text-sm"
                    >
                      Verify
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-gray-800 mb-2">Date of Birth</label>
                  <input
                    type="date"
                    id="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none bg-gray-50"
                    required
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={previousStep}
                    className="flex-1 py-3 bg-gray-400 text-white rounded-lg font-semibold hover:bg-gray-500 transition flex items-center justify-center gap-2"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Address Details */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center text-indigo-600 font-semibold mb-6">Step 4 of 5</div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-gray-800 mb-2">Country</label>
                    <select
                      id="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none bg-gray-50"
                      required
                    >
                      <option value="">Select Country</option>
                      <option value="india">India</option>
                      <option value="usa">United States</option>
                      <option value="uk">United Kingdom</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold text-gray-800 mb-2">State</label>
                    <select
                      id="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none bg-gray-50"
                      required
                    >
                      <option value="">Select State</option>
                      <option value="maharashtra">Maharashtra</option>
                      <option value="delhi">Delhi</option>
                      <option value="karnataka">Karnataka</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-gray-800 mb-2">District</label>
                    <select
                      id="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none bg-gray-50"
                      required
                    >
                      <option value="">Select District</option>
                      <option value="mumbai">Mumbai</option>
                      <option value="pune">Pune</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold text-gray-800 mb-2">Pin Code</label>
                    <input
                      type="text"
                      id="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      placeholder="Enter pin code"
                      maxLength={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none bg-gray-50"
                      required
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={previousStep}
                    className="flex-1 py-3 bg-gray-400 text-white rounded-lg font-semibold hover:bg-gray-500 transition flex items-center justify-center gap-2"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Additional Details */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="text-center text-indigo-600 font-semibold mb-6">Step 5 of 5</div>

                <div>
                  <label className="block font-semibold text-gray-800 mb-2">Place</label>
                  <select
                    id="place"
                    value={formData.place}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none bg-gray-50"
                    required
                  >
                    <option value="">Select Place</option>
                    <option value="andheri">Andheri</option>
                    <option value="bandra">Bandra</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-gray-800 mb-2">Languages (Hold Ctrl/Cmd for multiple)</label>
                  <select
                    id="languages"
                    multiple
                    value={formData.languages}
                    onChange={handleLanguageChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none bg-gray-50 h-32"
                    required
                  >
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="marathi">Marathi</option>
                    <option value="kannada">Kannada</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-gray-800 mb-2">Refer By (Optional)</label>
                  <input
                    type="text"
                    id="referBy"
                    value={formData.referBy}
                    onChange={handleInputChange}
                    placeholder="Enter referral code"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none bg-gray-50"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={previousStep}
                    className="flex-1 py-3 bg-gray-400 text-white rounded-lg font-semibold hover:bg-gray-500 transition flex items-center justify-center gap-2"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition"
                  >
                    Submit Profile
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
