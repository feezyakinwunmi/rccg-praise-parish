"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  Banknote, 
  Building2, 
  Copy, 
  CheckCircle,
  ArrowRight,
  CreditCard,
  Smartphone,
  Landmark,
  Gift,
  AlertCircle
} from "lucide-react";

export default function GivePage() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState("");

  const accounts = [
    {
      id: 1,
      bank: "First Bank of Nigeria",
      accountName: "RCCG The Praise Parish",
      accountNumber: "2034567890",
      type: "Current Account",
      icon: Building2,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      bank: "GTBank (Guaranty Trust Bank)",
      accountName: "RCCG The Praise Parish",
      accountNumber: "0123456789",
      type: "Current Account",
      icon: Landmark,
      color: "from-orange-500 to-red-500"
    },
  ];

  const presetAmounts = ["5000", "10000", "20000", "50000", "100000"];

  const handleCopyAccount = (accountNumber: string) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedAccount(accountNumber);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 sm:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
            <Gift className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Give Online</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tithes & 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Offerings
            </span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
          <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            Support the work of God's kingdom through your faithful giving. Honor the Lord with your substance and first fruits.
          </p>
        </motion.div>

        {/* Scripture Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-5 sm:p-6 mb-10 text-white text-center"
        >
          <Heart className="w-8 h-8 mx-auto mb-3 text-pink-200" />
          <p className="text-sm sm:text-base italic max-w-2xl mx-auto">
            "Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this," 
            says the Lord Almighty, "and see if I will not throw open the floodgates of heaven and pour out 
            so much blessing that there will not be room enough to store it."
          </p>
          <p className="text-xs text-blue-200 mt-2">— Malachi 3:10</p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          
          {/* Left Column - Bank Transfer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-green-600 to-teal-600 px-6 py-4">
              <div className="flex items-center gap-3">
                <Building2 className="w-6 h-6 text-white" />
                <h2 className="text-xl font-bold text-white">Bank Transfer / Direct Deposit</h2>
              </div>
              <p className="text-green-100 text-sm mt-1">Make your tithes and offerings via bank transfer</p>
            </div>

            <div className="p-6 space-y-6">
              {/* Tithe & Offering Note */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded">
                <p className="text-amber-800 text-sm">
                  <strong>Note:</strong> For tithe, please specify "TITHE" as reference. 
                  For offering, please specify the purpose (e.g., "OFFERING - Building", "OFFERING - Welfare", etc.)
                </p>
              </div>

              {/* Account Details */}
              {accounts.map((account, index) => {
                const Icon = account.icon;
                const isCopied = copiedAccount === account.accountNumber;
                
                return (
                  <div key={account.id} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${account.color} rounded-full flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{account.bank}</h3>
                          <p className="text-xs text-gray-500">{account.type}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleCopyAccount(account.accountNumber)}
                        className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 transition"
                      >
                        {isCopied ? (
                          <>
                            <CheckCircle className="w-4 h-4" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                        <span className="text-gray-500 text-sm">Account Name</span>
                        <span className="font-semibold text-gray-900 text-sm">{account.accountName}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">Account Number</span>
                        <span className="font-mono font-bold text-gray-900 text-base">{account.accountNumber}</span>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Giving Reminder */}
              <div className="bg-blue-50 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-blue-800">After Transfer</p>
                    <p className="text-xs text-blue-600 mt-1">
                      Please send your proof of payment to <strong>giving@rccgpraiseparish.org</strong> 
                      or WhatsApp <strong>+234 801 234 5678</strong> for proper crediting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Online Payment (Coming Soon) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
              <div className="flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-white" />
                <h2 className="text-xl font-bold text-white">Online Payment</h2>
              </div>
              <p className="text-purple-100 text-sm mt-1">Coming Soon - Pay directly with card or mobile money</p>
            </div>

            <div className="p-6">
              {/* Coming Soon Banner */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 text-center overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30 -mr-16 -mt-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-30 -ml-12 -mb-12" />
                
                <CreditCard className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Online Payment Portal</h3>
                <p className="text-gray-500 mb-4">Secure card and mobile payments</p>
                
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  <span className="text-sm text-gray-600">Launching Soon</span>
                </div>
                
                <div className="flex justify-center gap-3">
                  <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">VISA</span>
                  </div>
                  <div className="w-12 h-8 bg-red-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">MC</span>
                  </div>
                  <div className="w-12 h-8 bg-purple-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">PAY</span>
                  </div>
                  <div className="w-12 h-8 bg-green-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">USSD</span>
                  </div>
                </div>
              </div>

              {/* Quick Give Calculator */}
              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Banknote className="w-4 h-4 text-green-600" />
                  Quick Give Calculator
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount("");
                      }}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                        selectedAmount === amount && !customAmount
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      ₦{parseInt(amount).toLocaleString()}
                    </button>
                  ))}
                  <input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount("");
                    }}
                    className="w-32 px-3 py-2 border border-gray-300 rounded-full text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="bg-green-50 rounded-xl p-3 text-center">
                  <p className="text-green-800 text-sm">
                    {customAmount ? `₦${parseInt(customAmount).toLocaleString()}` : 
                     selectedAmount ? `₦${parseInt(selectedAmount).toLocaleString()}` : 
                     "Select an amount"} 
                    { (customAmount || selectedAmount) && " — Thank you for your generosity!"}
                  </p>
                </div>
              </div>

              {/* Mobile Money Info */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Smartphone className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Mobile Money / USSD</h3>
                </div>
                <p className="text-xs text-gray-500">
                  You can also give via mobile money using the bank transfer details above. 
                  Simply use your mobile banking app or dial the USSD code of your bank.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Giving Promise / Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-10"
        >
          <div className="bg-white rounded-xl p-5 text-center shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Heart className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Blessings Follow</h3>
            <p className="text-gray-500 text-sm">God promises to pour out blessings when we give faithfully</p>
          </div>
          
          <div className="bg-white rounded-xl p-5 text-center shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Building2 className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Kingdom Advancement</h3>
            <p className="text-gray-500 text-sm">Your giving helps spread the gospel and support church ministries</p>
          </div>
          
          <div className="bg-white rounded-xl p-5 text-center shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Cheerful Giver</h3>
            <p className="text-gray-500 text-sm">God loves a cheerful giver. Give with joy and expectancy!</p>
          </div>
        </motion.div>

        {/* Custom Amount Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-6 sm:p-8 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-2">Every Seed Sown Brings a Harvest</h2>
          <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
            Whether you're giving your tithe, offering, or a special seed, know that God sees your sacrifice 
            and will reward you abundantly.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <p className="text-sm">Tithe: 10% of your income</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <p className="text-sm">Offering: As the Lord prospers you</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <p className="text-sm">Seed: Special faith promises</p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}