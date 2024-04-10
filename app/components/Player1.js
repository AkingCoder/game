import React from 'react'

const Player1 = () => {
    return (
        <section className='bg-yellow-400 w-fit font-medium border-black border rounded-lg px-3 py-2 shadow-lg shadow-yellow-600'>
            <h1 className='text-2xl'>Player1</h1>
            <div className='py-1 px-3'>
                <div>
                    <span>Wins: </span>
                    <span>2</span>
                </div>
                <div>
                    <span>Loses: </span>
                    <span>1</span>
                </div>
            </div>
        </section>
    )
}

export default Player1
