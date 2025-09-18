import React from 'react'

const hero = 'https://github.com/mikelopster/ai-workshop-assignment-sep/raw/main/workshop-3/specs/design/example.jpg'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        <div className="p-10 lg:p-16 flex flex-col justify-center gap-6">
          <div className="flex items-center gap-3">
            <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full">Example</span>
            <span className="text-sm text-gray-400">Design approximation</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">Hello KBTG</h1>

          <p className="text-lg text-gray-600 max-w-xl">This is an approximation of the provided design. It uses Tailwind utilities for layout, spacing, and typography. Resize the window to see responsive behavior.</p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            <li className="flex items-start gap-3">
              <span className="flex-none w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm">✓</span>
              <span className="text-gray-700">Interactive examples</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-none w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm">✓</span>
              <span className="text-gray-700">Fast development with Vite</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-none w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm">✓</span>
              <span className="text-gray-700">Styled with Tailwind</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-none w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm">✓</span>
              <span className="text-gray-700">Responsive layout</span>
            </li>
          </ul>

          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700">Get started</button>
            <button className="px-6 py-3 border border-gray-200 rounded-lg font-semibold text-gray-700">Documentation</button>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-11/12 h-5/6 rounded-2xl overflow-hidden shadow-xl transform rotate-3 scale-100">
              <img src={hero} alt="design example" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
