// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Image } from "antd";

const PopularPostsCard = ({
  user,
  createdAt,
  _id,
  description,
  title,
}) => {
  return (
    <>
      <div className="flex flex-col bg-white rounded-md shadow-xl">
        <Image
        className="w-full rounded-md"
          src="https://blog-backend-production-a0a8.up.railway.app/upload/64c2377578393b72ed74c457.jpg"
        />

        <div className="py-8">
          <div className="flex flex-col px-3">
            <div className="flex items-center gap-3 mb-3">
              <p className="flex items-center gap-1 text-xs font-medium text-bgBlack md:text-sm">
                By <span className="text-purple">{user.first_name}</span>
                <span className="text-purple">{user.last_name}</span>
              </p>
              <span className="w-[2px] h-4 bg-gray-400"></span>
              <p className="text-sm font-normal text-bgBlack md:text-base">
                {createdAt}
              </p>
            </div>
            <h1 className="mb-4 text-base font-bold md:text-2xl text-bgBlack">
              {title}
            </h1>
            <Link
              to={`blog/${_id}`}
              className="text-xs font-normal text-bgBlack md:text-base"
            >
              {description}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

PopularPostsCard.propTypes = {
  user: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  createdAt: PropTypes.string,
  _id: PropTypes.string,
};
export default PopularPostsCard;
