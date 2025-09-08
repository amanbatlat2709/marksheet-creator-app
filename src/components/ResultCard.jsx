

const ResultCard  = ({studentName , rollNo,totalMarks,percentage,grade}) =>{
      return (
            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <h2 className="text-xl font-semibold mb-4">Result Summary</h2>
              <p><strong>Name:</strong> {studentName}</p>
              <p><strong>Roll No:</strong> {rollNo}</p>
              <p><strong>Total Marks:</strong> {totalMarks}</p>
              <p><strong>Percentage:</strong> {percentage}%</p>
              <p><strong>Grade:</strong> {grade}</p>
            </div>
          )
}
export default ResultCard;