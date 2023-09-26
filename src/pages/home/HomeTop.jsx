import { useCallback, useEffect, useState } from "react";
import { message } from "antd";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";

import request from "../../server";
import "./home.css";

const HomeTop = () => {
  // apidan kelayotgan malumotlarni bow arr olw un state yaratb olamz
  const [latesPost, setLatestPost] = useState([]);
  // request api post last-one get function
  const getLastPost = useCallback(async () => {
    // tryda iwlaydiga kodlarmiz
    try {
      const { data } = await request("post/lastone");
      setLatestPost(data);
    } catch (err) {
      // catch xatolarni uwlawda yordam beradi
      // message antd designda keladi agar xato bolsa ekranga cqarb berad
      message.error(err.message);
    }
  }, []);
  // useEffectdan side-effect jarayoni bolgan u-n foydalanmz
  useEffect(() => {
    getLastPost();
  }, [getLastPost]);
  return (
    <section className="home-wrapper">
      <div className="flex items-center w-full h-full home-linear-bg">
        <div className="container mx-auto">
          <h4 className="flex gap-1 mb-3 text-white tracking-widesr w-fit">
            POSTED ON
            <span className="font-semibold tracking-wider uppercase">
              {latesPost?.category?.name}
            </span>
          </h4>
          <h1 className="text-xl font-bold text-white md:text-4xl tracking-[-2px] mb-3">
            {latesPost?.title}
          </h1>
          <div className="flex items-center gap-3 mb-3">
            <p className="flex gap-1 text-sm text-white md:text-base">
              By{" "}
              <span className="text-hoverBg">
                {latesPost?.user?.first_name}
              </span>
              <span className="text-hoverBg">{latesPost?.user?.last_name}</span>
            </p>
            <span className="w-[2px] h-6 bg-gray-400"></span>
            <p className="text-sm font-normal text-white md:text-base">
              {latesPost?.user?.createdAt.split("T")[0]}
            </p>
          </div>
          <p className="inline-block mb-3 text-white">
            {latesPost?.category?.description}
          </p>
          <div className="mt-10 ">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex items-center gap-2 all-btn"
            >
              Read More
              <AiOutlineArrowRight className="text-base" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTop;
