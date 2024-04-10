"use client"
import React from 'react'
import { useRef, useState, useEffect } from 'react'

const game = () => {
  const allRef = useRef()
  const [playerTurn, setPlayerTurn] = useState(true)
  const [winerDecl, setWinerDecl] = useState()
  const [matchWin, setMatchWin] = useState({
    w1: 0,
    w2: 0
  })
  const [matchLose, setMatchLose] = useState({
    l1: 0,
    l2: 0
  })
  const [findWiner, setFindWiner] = useState({
    player1: [],
    player2: []
  })
  const handleZeross = (e) => {
    let boxNumber = parseInt(e.target.getAttribute('name'))
    if (playerTurn) {
      findWiner.player1 = [...findWiner.player1, boxNumber]
      e.target.className = e.target.className + ' text-[#ed143d] pointer-events-none'
      e.target.innerText = 'X'
      setPlayerTurn(!playerTurn)
      if (findWiner.player1.includes(0) && findWiner.player1.includes(1) && findWiner.player1.includes(2) || findWiner.player1.includes(3) && findWiner.player1.includes(4) && findWiner.player1.includes(5) || findWiner.player1.includes(6) && findWiner.player1.includes(7) && findWiner.player1.includes(8) || findWiner.player1.includes(0) && findWiner.player1.includes(3) && findWiner.player1.includes(6) || findWiner.player1.includes(1) && findWiner.player1.includes(4) && findWiner.player1.includes(7) || findWiner.player1.includes(2) && findWiner.player1.includes(5) && findWiner.player1.includes(8) || findWiner.player1.includes(0) && findWiner.player1.includes(4) && findWiner.player1.includes(8) || findWiner.player1.includes(2) && findWiner.player1.includes(4) && findWiner.player1.includes(6)) {
        console.log('Player1')
        setWinerDecl('Player1')
        setPlayerTurn(false)
        setMatchWin({ ...matchWin, w1: matchWin.w1 + 1 })
        setMatchLose({ ...matchLose, l2: matchLose.l2 + 1 })
      }
    }
    else {
      findWiner.player2 = [...findWiner.player2, boxNumber]
      e.target.innerText = 'O'
      e.target.className = e.target.className + ' text-yellow-500 pointer-events-none'
      setPlayerTurn(!playerTurn)
      if (findWiner.player2.includes(0) && findWiner.player2.includes(1) && findWiner.player2.includes(2) || findWiner.player2.includes(3) && findWiner.player2.includes(4) && findWiner.player2.includes(5) || findWiner.player2.includes(6) && findWiner.player2.includes(7) && findWiner.player2.includes(8) || findWiner.player2.includes(0) && findWiner.player2.includes(3) && findWiner.player2.includes(6) || findWiner.player2.includes(1) && findWiner.player2.includes(4) && findWiner.player2.includes(7) || findWiner.player2.includes(2) && findWiner.player2.includes(5) && findWiner.player2.includes(8) || findWiner.player2.includes(0) && findWiner.player2.includes(4) && findWiner.player2.includes(8) || findWiner.player2.includes(2) && findWiner.player2.includes(4) && findWiner.player2.includes(6)) {
        console.log('Player2')
        setWinerDecl('Player2')
        setPlayerTurn(true)
        setMatchWin({ ...matchWin, w2: matchWin.w2 + 1 })
        setMatchLose({ ...matchLose, l1: matchLose.l1 + 1 })
      }
    }
  }

  const handleNewGame = () => {
    setFindWiner({ player1: '', player2: '' })
    setWinerDecl('')

  }
  const handleReStart = () => {
    setFindWiner({ player1: '', player2: '' })
    const children = allRef.current.querySelectorAll('div')
    if (children) {
      children.forEach(child => {
        child.innerText = ''
        child.classList.remove('pointer-events-none');
      });
    }
  }
  return (
    <>
      <script src="https://cdn.lordicon.com/lordicon.js"></script>
      <div className='bg-black h-[91.8vh] text-center' >
        <button onClick={handleReStart} className='invert rounded-full'>
          <lord-icon
            src="https://cdn.lordicon.com/rsbokaso.json"
            trigger="hover"
            className="size-6">
          </lord-icon>
        </button>
        <div className='flex items-center justify-between font-semibold text-gray-300 px-5'>
          <div className='py-1 px-3 text-center'>
            <h1 className='text-2xl font-semibold'>Player1</h1>
            <div>
              <span>Wins: </span>
              <span>{matchWin.w1}</span>
            </div>
            <div>
              <span>Loses: </span>
              <span>{matchLose.l1}</span>
            </div>
          </div>
          <div>
            <h1 className='text-2xl font-semibold text-center'>Player2</h1>
            <div className='px-3'>
              <div>
                <span>Wins: </span>
                <span>{matchWin.w2}</span>
              </div>
              <div>
                <span>Loses: </span>
                <span>{matchLose.l2}</span>
              </div>
            </div>
          </div>
        </div>
        {winerDecl ? <div className='bg-[#ed143d] w-fit m-auto p-5 px-9 rounded-xl text-center'>
          <ul className='grid grid-flow-row grid-rows-[1fr_1fr_1.5fr] items-center justify-center'>
            <li className='text-8xl text-black font-bold'>Winer🎉</li>
            <li className='text-6xl text-black font-semibold'>{winerDecl}</li>
            <li><button className='text-4xl px-8 py-3 w-[40vw] font-semibold  rounded-full bg-white text-black' onClick={handleNewGame}>Play</button></li>
          </ul>

        </div> : (findWiner.player1.length + findWiner.player2.length === 9) ? <li className='list-none' ><button className='text-4xl px-8 py-3 w-[40vw] font-semibold  rounded-full bg-white text-black' onClick={handleNewGame}>Draw</button></li> : <div ref={allRef} className='zc bg-white w-[49vw] h-[70vh] grid grid-cols-[1fr_1fr_1fr] gap-y-2 gap-x-2 m-auto grid-rows-[1fr_1fr_1fr]'>
          <div onClick={handleZeross} name={0} className='bg-black hover:bg-gray-800 flex items-center justify-center relative text-9xl'></div>
          <div onClick={handleZeross} name={1} className='bg-black hover:bg-gray-800 flex items-center justify-center relative text-9xl'></div>
          <div onClick={handleZeross} name={2} className='bg-black hover:bg-gray-800 flex items-center justify-center relative text-9xl'></div>
          <div onClick={handleZeross} name={3} className='bg-black hover:bg-gray-800 flex items-center justify-center relative text-9xl'></div>
          <div onClick={handleZeross} name={4} className='bg-black hover:bg-gray-800 flex items-center justify-center relative text-9xl'></div>
          <div onClick={handleZeross} name={5} className='bg-black hover:bg-gray-800 flex items-center justify-center relative text-9xl'></div>
          <div onClick={handleZeross} name={6} className='bg-black hover:bg-gray-800 flex items-center justify-center relative text-9xl'></div>
          <div onClick={handleZeross} name={7} className='bg-black hover:bg-gray-800 flex items-center justify-center relative text-9xl'></div>
          <div onClick={handleZeross} name={8} className='bg-black hover:bg-gray-800 flex items-center justify-center relative text-9xl'></div>
        </div>}
      </div>

    </>
  )
}

export default game
