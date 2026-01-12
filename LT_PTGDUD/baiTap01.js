class Student {
    constructor(id, name, score) {
        this.id = id;
        this.name = name;
        this.score = score;
    }
}

const students = [
    new Student(1,"An",8.5),
    new Student(2,"Khanh",7.5),
    new Student(3,"Bình",9.5),
    new Student(4,"Bình",9.5),
];

function showStudent(){
    const names = students.map(st => st.name);

    const goodStudent = students.filter(st => st.score >= 8);

    const avgScore = students.reduce((sum, st) => sum + st.score, 0) / students.length;


    console.log("Danh sách tên sinh viên:", names);
    console.log("Sinh viên có điểm >= 8:", goodStudent);
    console.log("Điểm trung bình của lớp:", avgScore.toFixed(2));
}

showStudent();