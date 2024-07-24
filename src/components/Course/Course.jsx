import { FaDollarSign } from "react-icons/fa";
import { LuBookOpen } from "react-icons/lu";
import PropTypes from 'prop-types';

const Course = ({course, handleSelected}) => {
    const{course_img, course_title, course_details, course_price, credit_hour} = course;

    return (
        <div className="p-3 bg-white rounded-lg">
            <img src={course_img} alt="" className="rounded-lg" />
            <h3 className="text-lg font-semibold my-4">{course_title}</h3>
            <p className="text-sm text-gray-500 mb-4">{course_details}</p>
            <div className="flex justify-between text-gray-600 font-medium">
                <div className="flex justify-center items-center gap-2">
                    <FaDollarSign />
                    <p>Price: {course_price}</p>
                </div>
                <div className="flex items-center gap-2">
                    <LuBookOpen />
                    <p>Credit: {credit_hour}hr</p>
                </div>
            </div>
            <button onClick={()=>{handleSelected(course_title, credit_hour, course_price)}} className="w-full bg-blue-500 py-1 rounded-lg text-white mt-4 font-semibold hover:border-2 hover:border-blue-500 hover:bg-blue-100 hover:text-blue-700">Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleSelected: PropTypes.func.isRequired,
}

export default Course;