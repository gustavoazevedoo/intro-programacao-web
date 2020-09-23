const classA = [
    {
        name: "Gustavo",
        grade: 9.8
    },
    {
        name: "Diego",
        grade: 10
    },
    {
        name: "Fulano",
        grade: 2
    },
    {
        name: "Mais um student",
        grade: 5
    }

]

const classB = [
    {
        name: "Cleiton",
        grade: 1
    },
    {
        name: "Robson",
        grade: 3
    },
    {
        name: "Siclano",
        grade: 6
    },
    {
        name: "Novo Aluno",
        grade: 5
    }
]

function calculateAverage(students) {
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length

    return average
}

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`${turma} average: ${average}. Congrats :)`)
    } else {
        console.log(`${turma} average: ${average}. Is not good :(`)
    }
}

function markAsFlunked(student) {
    student.flunked = false

    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendFlunkedMessage(student) {
    if (student.flunked) {  //ja é um bollean, não precisa == true
        console.log(`the student ${student.name} is flunked!`)
    }
}

function flunkedStudents(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, "Class A")
sendMessage(average2, "Class B")

flunkedStudents(classA)
flunkedStudents(classB)