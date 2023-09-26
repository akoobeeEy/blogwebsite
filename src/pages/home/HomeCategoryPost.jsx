import { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { message } from "antd";

import request from "../../server";
import CategoryCard from "../../components/card/CategoryCard";

const HomeCategoryPost = () => {
  const [categoryPost, setCtegoryPost] = useState([]);

  const getCategoryPost = useCallback(async () => {
    // tryda iwlaydiga kodlarmiz
    try {
      const { data } = await request("category");
      console.log(data);
      setCtegoryPost(data.data);
    } catch (err) {
      // catch xatolarni uwlawda yordam beradi
      // message antd designda keladi agar xato bolsa ekranga cqarb berad
      message.error(err.message);
    }
  }, []);
  useEffect(() => {
    getCategoryPost();
  }, [getCategoryPost]);
  return (
    <section className="py-20">
      <h1 className="mb-12 text-center title">Choose A Category</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {categoryPost?.map((el) => (
          <SwiperSlide key={el._id}>
            <CategoryCard {...el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeCategoryPost;
