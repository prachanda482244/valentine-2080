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
        { id: 1, text: 'I love you so much Merijaan', img: img1 },
        { id: 2, text: 'You are my everything', img: img2 },
        { id: 3, text: 'You make me complete', img: img3 },
        { id: 4, text: 'You are the love of my life', img: img4 },
        { id: 5, text: 'My heart belongs to you', img: img5 },
        { id: 6, text: 'You are my sunshine', img: img6 },
        { id: 7, text: 'You are the most beautiful person I know', img: img7 },
        { id: 8, text: 'You mean everything to me', img: img8 },
        { id: 9, text: 'You are my soulmate', img: img9 },
        { id: 10, text: 'You are the light in my life', img: img10 },
        { id: 11, text: 'You make every day brighter', img: img11 },
    ];
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
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
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
            className="bg-black absolute w-full z-10 min-h-screen flex items-center justify-center">

            <motion.div variants={variants} className="   min-h-screen min-w-full">
                <motion.div variants={textVariants} initial="initial" animate="animate" className="flex  items-center flex-wrap p-5 gap-4">
                    <button className="border-2 absolute right-10 top-3 px-2 py-1 rounded-lg text-white font-semibold uppercase" onClick={() => setLoadingState(true)}>go back</button>

                    <motion.div variants={textVariants} initial="initial" animate="animate" className="flex flex-wrap  items-center mt-10 gap-2">

                        {
                            name.join('').toLowerCase() !== 'sushmita' ?
                                showArray.map((elem, i) => (
                                    <motion.div variants={textVariants} className={`text-sm  md:text-3xl font-bold uppercase ${name.includes(elem) ? 'text-white' : 'text-blue-900'} flex items-center justify-center rounded-full `} key={i}>{elem}</motion.div>
                                )) : null
                        }

                        {
                            name.join('').toLowerCase() === 'sushmita' ?
                                imageArray.map((elem) => (
                                    <div
                                        className=" flex gap-3 p-4" key={elem.id}>
                                        <motion.h1 variants={imgVariants} style={{ textShadow: "2px 2px 5px blue", boxShadow: '2px 2px 10px purple' }} className="border-2 text-slate-400 md:w-40 w-1/2 rounded-lg text-xl tracking-wider font-semibold ">{elem.text}</motion.h1>
                                        <motion.img variants={imgVariants} style={{ boxShadow: '2px 2px 10px white' }} src={elem.img} className="w-32 h-52 object-cover rounded-lg" alt="array" />
                                    </div>
                                ))
                                : null
                        }
                    </motion.div>

                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Main
