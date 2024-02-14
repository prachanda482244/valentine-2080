import { motion } from "framer-motion"
import { useState } from "react"
import Loading from "./Loading"
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'
import img10 from '../assets/img10.jpg'
import img11 from '../assets/img11.jpg'
const Main = ({ name = [] }) => {
    const greeting = "Happy Valentine's Day 2080 ".split('')
    const showArray = [...greeting, ...name]
    const [loadingState, setLoadingState] = useState(false)
    const imageArray = [
        { id: 1, img: img1, },
        { id: 2, img: img2, },
        { id: 3, img: img3, },
        { id: 4, img: img4, },
        { id: 5, img: img5, },
        { id: 6, img: img6, },
        { id: 7, img: img7, },
        { id: 8, img: img8, },
        { id: 9, img: img9, },
        { id: 10, img: img10, },
        { id: 11, img: img11, },
    ]
    const variants = {
        initial: {
            y: -1000,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                stiffness: 120,
                damping: 30
            }
        }
    }
    const textVariants = {
        initial: {
            y: -100,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: .5,
                stiffness: 150,
                damping: 50,
                staggerChildren: .2
            }


        }
    }
    const imgVariants = {
        initial: {
            y: -100,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            rotate: 360,
            transition: {
                duration: .5,
                stiffness: 150,
                damping: 50,
                staggerChildren: .2
            }


        }
    }
    if (loadingState) {
        return <Loading />
    }
    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            className="bg-purple-800 absolute w-full z-10 min-h-screen flex items-center justify-center">

            <motion.div variants={variants} className=" absolute bg-black  min-h-screen min-w-full">
                <motion.div variants={textVariants} initial="initial" animate="animate" className="flex  items-center flex-wrap p-10 gap-4">
                    <button className="border-2 absolute right-10 top-3 px-2 py-1 rounded-lg text-white font-semibold uppercase" onClick={() => setLoadingState(true)}>go back</button>

                    <div className="flex flex-wrap border-2 p-10 items-center mt-10 gap-2">

                        {
                            name.join('').toLowerCase() !== 'sushmita' ?
                                showArray.map((elem, i) => (
                                    <motion.div variants={textVariants} className={`text-sm  md:text-3xl font-bold uppercase ${name.includes(elem) ? 'text-white' : 'text-blue-900'} flex items-center justify-center rounded-full `} key={i}>{elem}</motion.div>
                                )) : null
                        }

                        {
                            name.join('').toLowerCase() === 'sushmita' ?
                                imageArray.map((elem) => (
                                    <motion.div variants={imgVariants} className=" flex items-center justify-center border-2  gap-2  overflow-hidden rounded-full " key={elem.id}>
                                        <img src={elem.img} className="w-52 h-52  object-cover rounded-lg" alt="array" />
                                    </motion.div>
                                ))
                                : null
                        }
                    </div>

                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Main
