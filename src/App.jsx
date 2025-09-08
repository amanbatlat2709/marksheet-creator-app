import { useState } from "react"
import MarksheetForm from "./components/MarksheetForm"
import MarksheetTable from "./components/MarksheetTable"
import ResultCard from "./components/ResultCard"

export default function App() {
  const [student,setStudent] = useState({
    name : "",
    rollNo : "",
    marks : {
      subject1 : 0,
      subject2 : 0,
      subject3 : 0
    },
  });
  let total = parseInt(student.marks.subject1) + parseInt(student.marks.subject2) + parseInt(student.marks.subject3);
  let percentage = parseFloat(total) /3 ; 

  let garade = (percentage) => {
    if (percentage > 80) return "A"
    else if (percentage > 70) return "B+"
    else if (percentage > 60) return "B"
    else if (percentage > 50) return "C+"
    else if (percentage > 40) return "C"
    else return "Fail"
  }
  let grade = garade(percentage);
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Marksheet Creator 🎓
      </h1>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto mb-6 ">
        <MarksheetForm studentData={student} setStudentData = {setStudent} />
      </div>

      {/* Table Section */}
      <div className="max-w-4xl mx-auto mb-6">
        <MarksheetTable marks = {student.marks} />
      </div>

      {/* Result Card */}
      <div className="max-w-md mx-auto">
        <ResultCard
        studentName = {student.name}
        rollNo = {student.rollNo}
        totalMarks = {total}
        percentage = {percentage} 
        grade = {grade}
        />
      </div>
    </div>
  )
}
