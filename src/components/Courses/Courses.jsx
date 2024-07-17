import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
    const[courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
        <div className="col-span-3">
            <h2>Courses: {courses.length}</h2>
            <div className="grid md:grid-cols-3 gap-3">
                {courses.map(course => <Course key={course.id} course={course}></Course>)}
            </div>
        </div>
    );
};

export default Courses;