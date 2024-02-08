import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();


  const isInView = useInView(ref, { margin: "-100px" });

  

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I am dedicated to fostering the growth 
          <br /> and advancement of your brand.
        </p>
        <hr />
      </motion.div>

      
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"#00E7FF"}}>Out of the Box</motion.b> Solutions
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"#00E7FF"}}>For Your</motion.b> Video.
          </h1>
          <button> <a href="#Services">WHAT I DO ??</a></button>
        </div>
      </motion.div>


      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black", muted: false }}
        >
          <h2>vertical video</h2>

          <div>
            <video src="/video01.mp4" autoPlay loop muted width={300}></video>
          </div>

        
        </motion.div>


        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>vertical video</h2>

          <div>
            <video src="/video02.mp4" autoPlay loop muted width={300}></video>
          </div>
          
          
        </motion.div>


        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>vertical video</h2>

          <div>
            <video src="/video03.mp4" autoPlay loop muted width={300}></video>
          </div>
          
          
        </motion.div>
      </motion.div>





    </motion.div>
  );
};

export default Services;
