import { Swiper, SwiperSlide } from "swiper/react";
import { PopularPostsCard } from "../../components";
import { useCallback, useEffect, useState } from "react";
import request from "../../server";
import { message } from "antd";

const HomePosts = () => {
  const [popBlog, setPopBlog] = useState([]);

  const getBlogs = useCallback(async () => {
    // tryda iwlaydiga kodlarmiz
    try {
      const { data } = await request("post/lastones");
      setPopBlog(data);
    } catch (err) {
      // catch xatolarni uwlawda yordam beradi
      // message antd designda keladi agar xato bolsa ekranga cqarb berad
      message.error(err.message);
    }
  }, []);
  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  return (
    <section className="py-10">
      <h1 className="mb-10 title">Popular Blogs</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {popBlog?.map((el)=>(
        <SwiperSlide key={el._id}>
          <PopularPostsCard  {...el}/>
        </SwiperSlide>
          
        ))}
      </Swiper>
    </section>
  );
};

export default HomePosts;
