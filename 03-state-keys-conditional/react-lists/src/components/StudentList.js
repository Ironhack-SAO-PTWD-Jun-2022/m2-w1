function StudentList() {
  const students = ['Hélio', 'Hugo', 'Walison'];
  
  // [
  //   <p>Hélio</p>,
  //   <p>Hugo</p>,
  //   <p>Walison</p>
  // ]

  return(
    <div className='list'>
      <h2>Student List</h2>
      {students.map((student, i) => {
        return <p key={i}>{student}</p>
      })}
    </div>
  )
}

export default StudentList;