const students = [
    {
        id: 1,
        name: "최상현1",
    },
    {
        id: 2,
        name: "최상현2",
    },
    {
        id: 3,
        name: "최상현3",
    },
    {
        id: 4,
        name: "최상현4",
    }
]

export default function AttendanceBook() {
    return (
        <ul>
            {/* id를 키 값으로 사용 */}
            {students. map((student) => {
                return <li key = {student.id}>{student.name}</li>
            })}

            {/* 포맷팅된 문자열을 키 값으로 사용(키 값과 키가 구분이 안될 때 사용) */}
            {students. map((student, index) => {
                return <li key = {`student-id-${student.id}`}>{student.name}</li>
            })}

            {/* 배열의 인덱스를 키 값으로 사용 */}
            {students. map((student, index) => {
                return <li key = {index}>{student.name}</li>
            })}
        </ul>
    )
}