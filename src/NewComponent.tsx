import React from "react";

type NewComponentType = {
    //students: Array<StudentType> - то же самое
    students: StudentType[]

}

type StudentType = {
    id: number,
    name: string,
    age: number,
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map((objectStudentType) => {
                return (
                    <li key={objectStudentType.id}>
                        <span>{objectStudentType.name}</span>
                        <span>age:{objectStudentType.age}</span>
                    </li>
                )
            })}
        </ul>
    )
}