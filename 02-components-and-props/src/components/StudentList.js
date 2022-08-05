import './StudentList.css'

function StudentList (props) {
  console.log(props);
  return (
    <div className='student-list'>
      <h2>Student List</h2>
      {props.children}
    </div>
  )
}

export default StudentList;