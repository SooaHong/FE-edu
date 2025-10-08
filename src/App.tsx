import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex h-screen items-center justify-center bg-white">
      <div className="flex w-80 flex-col items-center">
        <img src="/toss-icon.png" alt="토스 로고" className="mb-8 w-16" />

        <h1 className="mb-1 text-2xl font-bold">금융의 모든 것</h1>
        <p className="mb-12 text-lg text-gray-500">토스에서 간편하게</p>

        <div className="mb-4 flex w-full items-center gap-x-3 rounded-lg bg-gray-100 p-3">
          <img src="/exclamation-mark.png" alt="경고 아이콘" className="h-6 w-6" />
          <p className="text-sm text-gray-700">화면 캡처를 감지했어요.</p>
        </div>

        <button type="button" className="w-full rounded-lg bg-blue-500 py-3 font-bold text-white">다음</button>
      </div>
    </main>
  )
}

export default App
