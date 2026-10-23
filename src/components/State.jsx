import React, { useState } from 'react'

function State() {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState()
    const inc = () => setNumber(number + 1)
    const dec = () => setNumber(number - 1)
    return (
        <>
            <div className='flex items-center justify-center flex-col'>
                <h1 className='text-4xl text-center mt-25 text-black'>{number < 0 ? 0 : number}</h1>
                <div className='flex gap-3 mt-4'>
                    <button onClick={inc} className='bg-pink-400 p-2 text-2xl rounded-xl '>+</button>    <button onClick={dec} className='bg-orange-500 p-2   text-2xl rounded-xl text-white'>-</button>
                </div>
            </div>

            <div className='flex items-center justify-center my-25 text-2xl flex-col gap-4'>
                <h2>Ad axtar</h2>
                <p className='text-3xl bg-blue-400 p-3 text-white rounded'>{name}</p>
                <input type="text" onChange={(e) => setName(e.target.value)} className='border' />
            </div>
        </>
    )
}

export default State