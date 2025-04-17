'use client'

import { useState } from 'react'

export default function CreateBookPage() {
  const [topic, setTopic] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResponse('')

    try {
      // Симуляция ответа от сервера
      const fakeResponse = `Книга по теме "${topic}" готова! 📖`
      await new Promise(resolve => setTimeout(resolve, 1500))
      setResponse(fakeResponse)
    } catch (error) {
      setResponse('Произошла ошибка при создании книги.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Создай книгу с помощью ChatGPT</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Тема книги:</label>
          <input 
            type="text" 
            value={topic} 
            onChange={(e) => setTopic(e.target.value)} 
            placeholder="Например: Приключения кота в космосе"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <button 
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-[#db574c] transition-colors"
          disabled={loading}
        >
          {loading ? 'Создаём...' : 'Создать книгу'}
        </button>
      </form>

      {response && (
        <div className="mt-6 p-4 bg-gray-100 border rounded">
          {response}
        </div>
      )}
    </div>
  )
}

