const StudentRow = ({ student }) => {
    return (
        <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">{student.id}</td>
            <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                    <img className="w-8 h-8" src={student.avatar} width="32" height="32" alt={student.name} />
                    <span className="whitespace-nowrap"
                    >{student.name}</span>
                </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">
                {student.score}
            </td>
            <td className="p-5 text-sm md:text-xl text-center">
                {student.percentage}%
            </td>
        </tr>
    );
};

export default StudentRow;