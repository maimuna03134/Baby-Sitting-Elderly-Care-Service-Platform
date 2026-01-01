"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";

export default function BookingForm({ service }) {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center flex-1">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                step >= s
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {step > s ? <Check className="h-6 w-6" /> : s}
            </div>
            {s < 3 && (
              <div
                className={`flex-1 h-1 mx-2 ${
                  step > s ? "bg-orange-500" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Step 1: Select Duration</h2>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <button className="py-4 rounded-lg border-2 border-orange-500 bg-orange-50 text-orange-600 font-medium">
                Hourly
              </button>
              <button className="py-4 rounded-lg border-2 border-gray-300 font-medium">
                Daily
              </button>
            </div>

            <input
              type="number"
              placeholder="Number of hours/days"
              className="w-full px-4 py-3 border rounded-lg"
            />

            <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
              <p className="text-xl font-bold text-orange-600">৳1200</p>
              <p className="text-sm text-gray-600">Estimated Cost</p>
            </div>
          </div>

          <button
            onClick={() => setStep(2)}
            className="w-full mt-8 bg-orange-500 text-white py-4 rounded-lg font-semibold"
          >
            Next: Location
          </button>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Step 2: Select Location</h2>

          <div className="space-y-4">
            <select className="w-full px-4 py-3 border rounded-lg">
              <option>Select Division</option>
              <option>Dhaka</option>
              <option>Chattogram</option>
            </select>

            <select className="w-full px-4 py-3 border rounded-lg">
              <option>Select District</option>
            </select>

            <input
              type="text"
              placeholder="City"
              className="w-full px-4 py-3 border rounded-lg"
            />

            <select className="w-full px-4 py-3 border rounded-lg">
              <option>Select Area</option>
            </select>

            <textarea
              rows="3"
              placeholder="Complete Address"
              className="w-full px-4 py-3 border rounded-lg"
            />
          </div>

          <div className="flex gap-4 mt-8">
            <button
              onClick={() => setStep(1)}
              className="flex-1 bg-gray-200 py-4 rounded-lg font-semibold"
            >
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="flex-1 bg-orange-500 text-white py-4 rounded-lg font-semibold"
            >
              Next: Confirm
            </button>
          </div>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Step 3: Confirm Booking</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <p><b>Service:</b> Baby Care</p>
              <p><b>Duration:</b> 5 Hours</p>
              <p><b>Rate:</b> ৳250/hour</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <p>Dhaka, Mirpur</p>
              <p>House 12, Road 5</p>
            </div>

            <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 flex justify-between">
              <span className="text-xl font-semibold">Total:</span>
              <span className="text-3xl font-bold text-orange-600">৳1200</span>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setStep(2)}
              className="flex-1 bg-gray-200 py-4 rounded-lg font-semibold"
            >
              Back
            </button>
            <button className="flex-1 bg-orange-500 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin" />
              Confirm Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
