const Course = ({course}) => {
    const{course_img, course_title, course_details, course_price, credit_hour} = course;

    return (
        <div className="p-3 bg-white rounded-lg">
            <img src={course_img} alt="" className="rounded-lg" />
            <h3 className="text-xl font-semibold my-2">{course_title}</h3>
        </div>
    );
};

export default Course;