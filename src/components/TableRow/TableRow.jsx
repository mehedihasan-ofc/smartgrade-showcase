import StudentRow from '../StudentRow/StudentRow';

const TableRow = ({ singleClass }) => {

    return (
        <>
            <tr className="bg-white/5">
                <td className="p-5 text-sm md:text-xl" colSpan="4">
                    {singleClass.classTitle}
                </td>
            </tr>
            
            {
                singleClass?.studentData.map(student => <StudentRow key={student.id} student={student} />)
            }
        </>
    );
};

export default TableRow;