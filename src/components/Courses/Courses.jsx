import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({handleSelected}) => {
    const[courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
        <div className="col-span-3">
            <div className="grid md:grid-cols-3 gap-3">
                {courses.map(course => <Course key={course.id} course={course} handleSelected={handleSelected}></Course>)}
            </div>
        </div>
    );
};

Courses.propTypes = {
    handleSelected: PropTypes.func.isRequired,
}

export default Courses;