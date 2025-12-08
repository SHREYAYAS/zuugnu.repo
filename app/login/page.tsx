'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<'signin' | 'register'>('signin');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            Discover. Decide. Shine
          </h1>
          <p className="text-lg text-gray-600">Where Science Meets Soul</p>
        </div>

        {/* Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Register Section */}
          <div
            className={`group rounded-2xl p-8 transition-all duration-500 cursor-pointer ${
              activeTab === 'register'
                ? 'bg-white shadow-xl scale-105 ring-2 ring-purple-400 ring-offset-2'
                : 'bg-white/80 shadow-lg hover:shadow-xl hover:scale-102'
            }`}
            onClick={() => setActiveTab('register')}
          >
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                <Image 
                  src="/zuugnu-removebg-preview.png" 
                  alt="Zuugnu Logo" 
                  width={100} 
                  height={50}
                  priority
                  className="transition-transform group-hover:scale-110"
                />
              </div>
              <div className="flex justify-center items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl shadow-lg">
                  👤
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Register</h2>
              </div>
              <p className="text-sm text-gray-600 mb-1">WhatsApp: "Register + Your Full Name"</p>
              <p className="text-lg font-bold text-purple-600 mb-1">+91 8800607598</p>
              <p className="text-xs text-gray-500">To receive Login Password</p>
            </div>

            {activeTab === 'register' && (
              <form className="space-y-5">
                <div className="relative">
                  <input
                    type="text"
                    placeholder='"Register + Your Full Name"'
                    className="w-full bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl px-4 py-4 text-gray-800 placeholder-gray-500 border-2 border-purple-200 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
                  />
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-5 text-center border border-purple-200">
                  <p className="text-sm text-gray-700 mb-1">Example Format</p>
                  <p className="text-base font-bold text-purple-700">Register John Doe</p>
                </div>

                <button type="button" className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-0.5">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.47-.149-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="text-lg">Open WhatsApp Chat</span>
                </button>
              </form>
            )}

            {activeTab !== 'register' && (
              <div className="text-center py-8 text-gray-400">
                <p className="text-sm font-medium">Click to register</p>
              </div>
            )}
          </div>

          {/* Sign In Section */}
          <div
            className={`group rounded-2xl p-8 transition-all duration-500 cursor-pointer ${
              activeTab === 'signin'
                ? 'bg-white shadow-xl scale-105 ring-2 ring-blue-400 ring-offset-2'
                : 'bg-white/80 shadow-lg hover:shadow-xl hover:scale-102'
            }`}
            onClick={() => setActiveTab('signin')}
          >
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                <Image 
                  src="/zuugnu-removebg-preview.png" 
                  alt="Zuugnu Logo" 
                  width={100} 
                  height={50}
                  priority
                  className="transition-transform group-hover:scale-110"
                />
              </div>
              <div className="flex justify-center items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white text-2xl shadow-lg">
                  🔐
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Sign In</h2>
              </div>
            </div>

            {activeTab === 'signin' && (
              <form className="space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-md">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.47-.149-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <select defaultValue="+91" className="w-24 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl px-2 py-4 text-gray-800 font-medium focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all shadow-sm">
                      <option value="+93">AF +93</option>
                      <option value="+355">AL +355</option>
                      <option value="+213">DZ +213</option>
                      <option value="+1">US +1</option>
                      <option value="+376">AD +376</option>
                      <option value="+244">AO +244</option>
                      <option value="+54">AR +54</option>
                      <option value="+374">AM +374</option>
                      <option value="+61">AU +61</option>
                      <option value="+43">AT +43</option>
                      <option value="+994">AZ +994</option>
                      <option value="+973">BH +973</option>
                      <option value="+880">BD +880</option>
                      <option value="+375">BY +375</option>
                      <option value="+32">BE +32</option>
                      <option value="+501">BZ +501</option>
                      <option value="+229">BJ +229</option>
                      <option value="+975">BT +975</option>
                      <option value="+591">BO +591</option>
                      <option value="+387">BA +387</option>
                      <option value="+267">BW +267</option>
                      <option value="+55">BR +55</option>
                      <option value="+673">BN +673</option>
                      <option value="+359">BG +359</option>
                      <option value="+226">BF +226</option>
                      <option value="+257">BI +257</option>
                      <option value="+855">KH +855</option>
                      <option value="+237">CM +237</option>
                      <option value="+1">CA +1</option>
                      <option value="+238">CV +238</option>
                      <option value="+236">CF +236</option>
                      <option value="+235">TD +235</option>
                      <option value="+56">CL +56</option>
                      <option value="+86">CN +86</option>
                      <option value="+57">CO +57</option>
                      <option value="+269">KM +269</option>
                      <option value="+242">CG +242</option>
                      <option value="+506">CR +506</option>
                      <option value="+385">HR +385</option>
                      <option value="+53">CU +53</option>
                      <option value="+357">CY +357</option>
                      <option value="+420">CZ +420</option>
                      <option value="+45">DK +45</option>
                      <option value="+253">DJ +253</option>
                      <option value="+593">EC +593</option>
                      <option value="+20">EG +20</option>
                      <option value="+503">SV +503</option>
                      <option value="+240">GQ +240</option>
                      <option value="+291">ER +291</option>
                      <option value="+372">EE +372</option>
                      <option value="+251">ET +251</option>
                      <option value="+679">FJ +679</option>
                      <option value="+358">FI +358</option>
                      <option value="+33">FR +33</option>
                      <option value="+241">GA +241</option>
                      <option value="+220">GM +220</option>
                      <option value="+995">GE +995</option>
                      <option value="+49">DE +49</option>
                      <option value="+233">GH +233</option>
                      <option value="+30">GR +30</option>
                      <option value="+502">GT +502</option>
                      <option value="+224">GN +224</option>
                      <option value="+245">GW +245</option>
                      <option value="+592">GY +592</option>
                      <option value="+509">HT +509</option>
                      <option value="+504">HN +504</option>
                      <option value="+852">HK +852</option>
                      <option value="+36">HU +36</option>
                      <option value="+354">IS +354</option>
                      <option value="+91">IN +91</option>
                      <option value="+62">ID +62</option>
                      <option value="+98">IR +98</option>
                      <option value="+964">IQ +964</option>
                      <option value="+353">IE +353</option>
                      <option value="+972">IL +972</option>
                      <option value="+39">IT +39</option>
                      <option value="+81">JP +81</option>
                      <option value="+962">JO +962</option>
                      <option value="+7">KZ +7</option>
                      <option value="+254">KE +254</option>
                      <option value="+965">KW +965</option>
                      <option value="+996">KG +996</option>
                      <option value="+856">LA +856</option>
                      <option value="+371">LV +371</option>
                      <option value="+961">LB +961</option>
                      <option value="+266">LS +266</option>
                      <option value="+231">LR +231</option>
                      <option value="+218">LY +218</option>
                      <option value="+423">LI +423</option>
                      <option value="+370">LT +370</option>
                      <option value="+352">LU +352</option>
                      <option value="+853">MO +853</option>
                      <option value="+389">MK +389</option>
                      <option value="+261">MG +261</option>
                      <option value="+265">MW +265</option>
                      <option value="+60">MY +60</option>
                      <option value="+960">MV +960</option>
                      <option value="+223">ML +223</option>
                      <option value="+356">MT +356</option>
                      <option value="+222">MR +222</option>
                      <option value="+230">MU +230</option>
                      <option value="+52">MX +52</option>
                      <option value="+373">MD +373</option>
                      <option value="+377">MC +377</option>
                      <option value="+976">MN +976</option>
                      <option value="+382">ME +382</option>
                      <option value="+212">MA +212</option>
                      <option value="+258">MZ +258</option>
                      <option value="+95">MM +95</option>
                      <option value="+264">NA +264</option>
                      <option value="+977">NP +977</option>
                      <option value="+31">NL +31</option>
                      <option value="+64">NZ +64</option>
                      <option value="+505">NI +505</option>
                      <option value="+227">NE +227</option>
                      <option value="+234">NG +234</option>
                      <option value="+850">KP +850</option>
                      <option value="+47">NO +47</option>
                      <option value="+968">OM +968</option>
                      <option value="+92">PK +92</option>
                      <option value="+970">PS +970</option>
                      <option value="+507">PA +507</option>
                      <option value="+675">PG +675</option>
                      <option value="+595">PY +595</option>
                      <option value="+51">PE +51</option>
                      <option value="+63">PH +63</option>
                      <option value="+48">PL +48</option>
                      <option value="+351">PT +351</option>
                      <option value="+974">QA +974</option>
                      <option value="+40">RO +40</option>
                      <option value="+7">RU +7</option>
                      <option value="+250">RW +250</option>
                      <option value="+966">SA +966</option>
                      <option value="+221">SN +221</option>
                      <option value="+381">RS +381</option>
                      <option value="+248">SC +248</option>
                      <option value="+232">SL +232</option>
                      <option value="+65">SG +65</option>
                      <option value="+421">SK +421</option>
                      <option value="+386">SI +386</option>
                      <option value="+677">SB +677</option>
                      <option value="+252">SO +252</option>
                      <option value="+27">ZA +27</option>
                      <option value="+82">KR +82</option>
                      <option value="+211">SS +211</option>
                      <option value="+34">ES +34</option>
                      <option value="+94">LK +94</option>
                      <option value="+249">SD +249</option>
                      <option value="+597">SR +597</option>
                      <option value="+268">SZ +268</option>
                      <option value="+46">SE +46</option>
                      <option value="+41">CH +41</option>
                      <option value="+963">SY +963</option>
                      <option value="+886">TW +886</option>
                      <option value="+992">TJ +992</option>
                      <option value="+255">TZ +255</option>
                      <option value="+66">TH +66</option>
                      <option value="+228">TG +228</option>
                      <option value="+676">TO +676</option>
                      <option value="+216">TN +216</option>
                      <option value="+90">TR +90</option>
                      <option value="+993">TM +993</option>
                      <option value="+256">UG +256</option>
                      <option value="+380">UA +380</option>
                      <option value="+971">AE +971</option>
                      <option value="+44">GB +44</option>
                      <option value="+598">UY +598</option>
                      <option value="+998">UZ +998</option>
                      <option value="+678">VU +678</option>
                      <option value="+58">VE +58</option>
                      <option value="+84">VN +84</option>
                      <option value="+967">YE +967</option>
                      <option value="+260">ZM +260</option>
                      <option value="+263">ZW +263</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="Enter your whatsapp number"
                      className="flex-1 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl px-4 py-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7zm4 10.723V20h-2v-2.277c-.595-.347-1-.984-1-1.723 0-1.103.897-2 2-2s2 .897 2 2c0 .738-.405 1.376-1 1.723z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl px-4 py-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all shadow-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-4 text-2xl hover:scale-110 transition-transform"
                    >
                      {showPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                  </div>
                </div>

                <button 
                  type="button"
                  onClick={() => router.push('/profile')}
                  className="mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Submit</span>
                </button>

                <div className="text-center">
                  <button type="button" className="text-blue-600 hover:text-blue-700 text-sm font-semibold transition-all hover:underline underline-offset-4">
                    Forgot Password?
                  </button>
                </div>
              </form>
            )}

            {activeTab !== 'signin' && (
              <div className="text-center py-8 text-gray-400">
                <p className="text-sm font-medium">Click to sign in</p>
              </div>
            )}
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 shadow-md hover:shadow-lg transition-all duration-300 group border border-purple-200"
          >
            <svg className="w-6 h-6 text-purple-600 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">© 2025 Zuugnu.com | All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
