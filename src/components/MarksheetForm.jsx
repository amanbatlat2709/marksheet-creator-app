import { useState } from "react";



const MarksheetForm = ({studentData,setStudentData}) =>{
      const [name,setName] = useState('');
      const [roll,setRoll] = useState(0);
      const [sub1,setSub1] = useState(0);
      const [sub2,setSub2] = useState(0);
      const [sub3,setSub3] = useState(0);

      const onSubmitFunction = (e) =>{
            e.preventDefault();
            setStudentData(
                  {
                        name : name,
                        rollNo : roll,
                        marks : {
                          subject1 : sub1,
                          subject2 : sub2,
                          subject3 : sub3
                        }
                  }

            )
      }
      return (
            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-xl font-semibold mb-4">Enter Student Details</h2>
              
              <form className="space-y-4" onSubmit={(e) => onSubmitFunction(e)}>
                <input
                  type="text"
                  placeholder="Student Name"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border rounded-lg p-2"
                />
                <input
                  type="number"
                  placeholder="Roll Number"
                  onChange={(e) => setRoll(e.target.value)}
                  className="w-full border rounded-lg p-2"
                />
                <input
                  type="number"
                  placeholder="Marks in Subject 1"
                  onChange={(e) => setSub1(e.target.value)}
                  className="w-full border rounded-lg p-2"
                />
                <input
                  type="number"
                  placeholder="Marks in Subject 2"
                  onChange={(e) => setSub2(e.target.value)}
                  className="w-full border rounded-lg p-2"
                />
                <input
                  type="number"
                  placeholder="Marks in Subject 3"
                  onChange={(e) => setSub3(e.target.value)}
                  className="w-full border rounded-lg p-2"
                />
        
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Generate Marksheet
                </button>
              </form>
            </div>
          )
}

export default MarksheetForm;