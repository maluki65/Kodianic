import {  easeInOut, motion } from "framer-motion";
import './styles.css';
export default function Inner ({children}) {

  const anime = (variants) => {
      return {
          initial: 'initial',
          animate: 'enter',
          exit: 'exit',
          variants
      }
  }

  const opacity = {
      initial: {
          opacity: 0
      },
      enter: {
          opacity: 1,
      },
      exit:{
          opacity: 1
      }
  }

  const slide = {
      initial: {
          top:'100vh'
      },
      enter:{
          top:'100vh'
      },
      exit:{
          top:'0',
          transition:{
              duration:1,
              ease:[0.76, 0, 0.24, 1]
          }
      }
  }

  const perspective = {
      initial: {
          y:0,
          scale:1,
          opacity:1
      },
      enter:{
          y:0,
          scale: 1,
          opacity:1
      },
      exit:{
          y: -100,
          scale: 0.9,
          opacity:0.5,
          transition:{
              duration:1.2,
              ease:[0.76, 0, 0.24, 1]
          }
      }
  }

  return (
    <div className="inner">
      <motion.div {...anime(slide)} className="slide"/>
      <motion.div {...anime(perspective)} className="">
          <motion.div {...anime(opacity)} className="page">
              {children}
          </motion.div>
      </motion.div>
    </div>
  )
}