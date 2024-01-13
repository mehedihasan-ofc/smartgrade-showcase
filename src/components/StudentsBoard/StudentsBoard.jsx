import { useEffect, useState } from "react";
import StudentsTable from "../StudentsTable/StudentsTable";
import SearchBox from "../SearchBox/SearchBox";

const StudentsBoard = () => {

    const [classData, setClassData] = useState([]);

    useEffect(() => {
        fetch('class_student_data.json')
            .then(res => res.json())
            .then(data => setClassData(data));
    }, [])

    return (
        <section className="py-24 lg:pt-[120px] lg:pb-28">
            <div className="container">
                <div className="mb-16 flex flex-col items-center">
                    <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
                        <span className="text-[#00CC8C]">Students</span> of the Year
                    </h2>
                    {/* Search Box */}
                    <SearchBox />
                </div>
                <div className="max-w-[848px] mx-auto overflow-auto">
                    <StudentsTable classData={classData} />
                </div>
            </div>
        </section>
    );
};

export default StudentsBoard;