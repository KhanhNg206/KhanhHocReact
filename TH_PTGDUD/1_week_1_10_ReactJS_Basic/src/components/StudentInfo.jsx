function StudentInfo(props){
    return(
        <>
        <p>họ và tên : {props.name}</p>
        <p>mssv : {props.id}</p>
        <p>lớp : {props.className}</p>
        </>
    )
}
export default StudentInfo;