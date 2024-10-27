import React, { useEffect, useState } from 'react'
// read/access data
const Navbar = ({ appdata, logo }) => {
    // manipulate the data
    const [numberstate, setNumberstate] = useState(0)
    const [stringstate, setStringstate] = useState("a")
    const [arraystate, setArraystate] = useState(["a", false, 0])
    // console.log(numberstate)
    // console.log(stringstate)
    // console.log(arraystate)

    const [count, setCount] = useState(0)
    useEffect(() => {
        // alert('effect rendered')
        console.log("count is " + count)
    }, [count])

    return (
        <>
            {/* {appdata.appname} {logo} */}
            <button className='w-[6rem] h-[4rem] bg-blue-500 text-white'
                onClick={() => { setCount(count + 1) }}>
                Count{count}
            </button>
        </>
    )
}

export default Navbar