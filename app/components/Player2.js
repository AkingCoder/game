import React from 'react'

const Player2 = () => {
    return (
        <section className='bg-green-400 w-fit font-medium border-black border rounded-lg px-3 py-2  shadow-lg shadow-green-600'>
            <h1 className='text-2xl'>Player2</h1>
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

export default Player2
