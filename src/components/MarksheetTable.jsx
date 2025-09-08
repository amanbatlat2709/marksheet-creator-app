
const MarksheetTable = ({marks}) =>{
      return (
            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="text-xl font-semibold mb-4">Marks Table</h2>
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 p-2">Subject</th>
                    <th className="border border-gray-300 p-2">Marks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">Subject 1</td>
                    <td className="border border-gray-300 p-2">{marks.subject1}</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Subject 2</td>
                    <td className="border border-gray-300 p-2">{marks.subject2}</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Subject 3</td>
                    <td className="border border-gray-300 p-2">{marks.subject3}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )
}

export default MarksheetTable;