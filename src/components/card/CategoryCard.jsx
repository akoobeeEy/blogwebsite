import  PropTypes from "prop-types"
import { icon } from "../../assets"
const CategoryCard = ({name,description}) => {
  return (
    <div>
       <div  className="p-4 pt-1 border-[1px] border-gray-300 bg-white duration-200 hover:bg-yellow-400 h-[221px]">
   
      <img className="bg-white rounded " src={icon} alt="" />
        
   
      <h3 className="text-[#232536] font-semibold text-base sm:text-lg py-1">{name}</h3>
      <p className="text text-[#6D6E76] text-sm sm:text-base">{description}</p>
    </div>
    </div>
  )
}
CategoryCard.propTypes ={
  name: PropTypes.string,
  description: PropTypes.string,
}
export default CategoryCard