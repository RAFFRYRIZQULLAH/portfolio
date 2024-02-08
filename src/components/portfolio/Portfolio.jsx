import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Dapur Ambu",
    img: "/logo1.jpg",
    desc: "DAPUR AMBU is a catering business that delivers a special culinary experience. Offering a selection of delicious menus with authentic flavors, DAPUR AMBU prioritizes the quality of ingredients and expertise in every dish.",
  },
  {
    id: 2,
    title: "HA8.",
    img: "/logo3.jpg",
    desc: "Brand HA8. is a pioneer in the fashion world, offering the perfect blend of comfort, style, and innovation. With a focus on modern design and high-quality materials, HA8 presents collections that cater to urban tastes and those who are fashion-forward. ",
  },
  {
    id: 3,
    title: "Gading Rental",
    img: "/logo2.jpg",
    desc: "GADING RENTAL is a car rental business that provides reliable and efficient transportation solutions. With a well-maintained fleet of vehicles, GADING RENTAL ensures that customers have a safe and comfortable driving experience.",
  },
  {
    id: 4,
    title: "Raffry Rizqullah",
    img: "/logo4.jpg",
    desc: "-",
  },

];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Logo Design</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
