function StudentCard({name, week = 0, info}) {
  // console.log(props);
  // const {name, week = 0, info} = props;
  
  return (
    <div className='student-card'>
      <p>
        <b>Name:</b> {name}
      </p>
      <p>
        <b>Cohort:</b> {info.city} - {info.course}
      </p>
      <p>
        <b>Current Week:</b> {week}
      </p>
    </div>
  )
}

export default StudentCard;