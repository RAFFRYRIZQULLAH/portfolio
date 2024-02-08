import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#Homepage"> <img src="logo.png" alt="" /> </a>
        </motion.span>
        <div className="social">
          <a href="https://instagram.com/raffryrizqullah" target="_blank">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://twitter.com/RaffryRlzqullah" target="_blank">
            <img src="/twitter.png" alt="" />
          </a>
          <a href="https://open.spotify.com/user/36hgg5e472k9pb2mqajr7hsa9?si=512a1145289043f1" target="_blank">
            <img src="/spotify.png" alt="" />
          </a>
          <a href="https://www.youtube.com/@raffryrizqullah" target="_blank"> 
            <img src="/youtube.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
