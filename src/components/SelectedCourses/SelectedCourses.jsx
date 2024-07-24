import { FaDollarSign } from "react-icons/fa";
import PropTypes from 'prop-types';

const SelectedCourses = ({selectedCourses ,creditHours, totalPrice, remainingHours}) => {
    return (
        <div>
            <div className="bg-white border-2 border-blue-300 rounded-lg mb-3 p-4 text-lg font-semibold text-blue-700">
                <p>Remaining Credit Hours: <span className="text-xl">{remainingHours}</span> hr</p>
            </div>
            <div className="bg-white h-fit p-3 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">Course Names</h2>
                <ul className="ml-6 font-medium">
                    {selectedCourses.map((course, idx) => <li key={idx} className="list-disc">{course}</li>)}
                </ul>
                <p className="mt-7 text-lg font-semibold">Total Credit Hours: <span className="text-blue-700 text-xl">{creditHours} hr</span></p>
                <p className="mt-1 text-lg font-semibold flex items-center">Total Price: <span className="text-blue-700"><FaDollarSign /></span><span className="text-blue-700 text-xl">{totalPrice.toFixed(2)}</span></p>
            </div>
        </div>
    );
};

SelectedCourses.propTypes = {
    selectedCourses: PropTypes.array.isRequired,
    creditHours: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    remainingHours: PropTypes.number.isRequired,
}
export default SelectedCourses;