import React, { useState } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignUp: () => void;
  onLoginSuccess: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ 
  isOpen, 
  onClose, 
  onSwitchToSignUp, 
  onLoginSuccess 
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);           // ADD THIS
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // ADD THIS
  

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (email && password) {
        if (email === "demo@greenhabit.com" && password === "demo123") {
          console.log("Login successful!", { email, rememberMe });
          onClose();
          onLoginSuccess();
        } else {
          setError("Invalid email or password. Try: demo@greenhabit.com / demo123");
        }
      } else {
        setError("Please enter both email and password");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center animate-fadeIn">
      <div
        className="bg-gradient-to-br from-[#0A2F1F] to-[#1B5E20] rounded-2xl w-full max-w-md p-8 shadow-2xl border border-green-500/30 mx-4 transform transition-all animate-slideUp max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-green-400 hover:text-white text-2xl transition transform hover:scale-110 w-8 h-8 flex items-center justify-center rounded-full hover:bg-green-800/50"
          >
            ✕
          </button>
        </div>

        <div className="flex justify-center mb-4">
          <img 
          src="/glogo.png" 
          alt="GreenHabit Logo"
          className="w-16 h-16 rounded-full shadow-lg object-cover"
        />
        </div>

        <h2 className="text-3xl font-bold text-center text-white font-spartan mb-2">
          Welcome Back!
        </h2>
        <p className="text-green-300 text-center mb-6 font-fredoka">
          Sign in to continue your green journey
        </p>

        {error && (
          <div className="bg-red-500/20 border border-red-500 rounded-lg p-3 mb-4 animate-shake">
            <p className="text-red-200 text-sm text-center">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-green-200 mb-2 font-fredoka">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-green-900/30 border border-green-500/30 rounded-lg text-white placeholder-green-300/50 focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/50 transition"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div>
            <label className="block text-green-200 mb-2 font-fredoka">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-green-900/30 border border-green-500/30 rounded-lg text-white placeholder-green-300/50 focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/50 transition pr-12"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-400 hover:text-green-200 transition"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06l-1.745-1.745a10.029 10.029 0 0 0 3.3-4.38 1.651 1.651 0 0 0 0-1.185A10.004 10.004 0 0 0 9.999 3a9.956 9.956 0 0 0-4.744 1.194L3.28 2.22ZM7.752 6.69l1.092 1.092a2.5 2.5 0 0 1 3.374 3.373l1.091 1.092a4 4 0 0 0-5.557-5.557Z" clipRule="evenodd" />
                    <path d="m10.748 13.93 2.523 2.523a9.987 9.987 0 0 1-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 0 1 0-1.186A10.007 10.007 0 0 1 2.839 6.02L6.07 9.252a4 4 0 0 0 4.678 4.678Z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 accent-[#2E7D32] rounded"
              />
              <span className="text-green-200 text-sm font-fredoka">Remember me</span>
            </label>
            <button
              type="button"
              onClick={() => alert("Password reset link sent to your email! (Demo)")}
              className="text-[#81C784] text-sm hover:text-white transition font-fredoka"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white font-semibold rounded-lg hover:from-[#1B5E20] hover:to-[#2E7D32] transition shadow-md font-spartan disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging in...
              </span>
            ) : (
              "Log In"
            )}
          </button>
        </form>

        <div className="mt-4 p-3 bg-green-800/30 rounded-lg border border-green-500/20">
          <p className="text-green-300 text-xs text-center font-fredoka">
            Demo: demo@greenhabit.com / demo123
          </p>
        </div>

        <div className="mt-6 text-center pb-2">
          <p className="text-green-200 font-fredoka">
            Don't have an account?{" "}
            <button
              onClick={() => {
                onClose();
                onSwitchToSignUp();
              }}
              className="text-[#81C784] font-semibold hover:text-white transition underline decoration-green-500/50"
            >
              Sign Up for free
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;