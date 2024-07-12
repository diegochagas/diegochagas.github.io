'use client'

import { useEffect, useState } from 'react'

interface TypedCodeProps {
  text: string
  isTyped?: boolean
  startCounter?: boolean
}

export function TypedCode({ text, isTyped, startCounter }: TypedCodeProps) {
  const [newText, setNewText] = useState('')
  const [count, setCount] = useState(0)
  const [showTyper, setShowTyper] = useState(true)
  const maxCount = 3 + text.length

  useEffect(() => {
    if (!startCounter) {
      setNewText(text)
    } else {
      if (isTyped && count < maxCount) {
        const interval = setInterval(() => {
          if (text.length && count > 1 && count < maxCount - 1) {
            setNewText(prev => prev + text[count - 2])
          }
          setCount(prevCount => prevCount + 1)
        }, 250)
  
        return () => clearInterval(interval)
      }
    }
  }, [count, maxCount, text, startCounter, isTyped])

  useEffect(() => {
    if (count >= maxCount)
    setTimeout(() => setShowTyper(false), 1500)
  }, [count, maxCount])

  function show(value: number) {
    return (!startCounter || (isTyped && count >= value)) ? 'block' : 'hidden'
  }
  
  return (
    <>
      <span className={`${show(1)} text-3xl ${isTyped ? 'md:text-5xl xl:text-6xl' : ''}`}>&#60;</span>
      <span className={`text-4xl ${isTyped ? 'md:text-6xl xl:text-7xl' : ''}`}>{newText}</span>
      <span className={`${show(maxCount - 1)} text-4xl ${isTyped ? 'md:text-6xl xl:text-7xl' : ''}`}>&#47;</span>
      <span className={`${show(maxCount)} text-3xl ${isTyped ? 'md:text-5xl xl:text-6xl' : ''}`}>&#62;</span>
      {isTyped && showTyper && <span className="inline-block ml-0.5 w-1 md:w-2 xl:w-2.5 h-8 md:h-14 xl:h-16 bg-black animate-blink" />}
    </>
  )
}