"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dashboard");
    }, 2200);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-900 via-slate-950 to-black text-white flex items-center justify-center px-4">
      <div className="relative max-w-3xl w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-12 shadow-2xl shadow-emerald-500/20 overflow-hidden backdrop-blur-xl">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(52,211,153,0.18),_transparent_45%)]" aria-hidden />
        <div className="absolute -left-24 -top-24 w-64 h-64 bg-emerald-500/30 blur-3xl" aria-hidden />
        <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-cyan-500/20 blur-3xl" aria-hidden />

        <div className="relative flex flex-col items-center gap-6 text-center">
          <div className="relative">
            <div className="absolute inset-0 animate-ping bg-emerald-400/40 rounded-full blur-lg" aria-hidden />
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center shadow-2xl shadow-emerald-500/50">
              <span className="text-5xl">✅</span>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">You are successfully logged in</h1>
            <p className="text-slate-200/80 text-lg">Redirecting to your dashboard in a moment…</p>
          </div>

          <button
            onClick={() => router.push("/dashboard")}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold shadow-lg shadow-emerald-500/30 hover:translate-y-[-1px] transition-all"
          >
            Go to Dashboard now
          </button>
        </div>
      </div>
    </main>
  );
}
