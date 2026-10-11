
import { useContext } from 'react'
import StudentContext from '../StudentContext'

function StudentList() {
    const { students, favoriteStudents, addFavoriteStudent } = useContext(StudentContext)

    return (
        <main className="mx-auto max-w-2xl p-6">
            <h1 className="mb-4 text-2xl font-bold">All Student List</h1>
            <ul className="grid gap-3">
                {students.map((student, index) => {
                    const isFavorite = favoriteStudents.some(
                        (favorite) => favorite.id === student.id
                    )

                    return (
                        <li
                            key={student.id}
                            className="student-card flex items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
                        >
                            <span className="font-medium text-gray-800">
                                {index + 1}. {student.name}
                            </span>
                            <button
                                type="button"
                                onClick={() => addFavoriteStudent(student)}
                                disabled={isFavorite}
                                className="rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
                            >
                                {isFavorite ? 'Added to favorite' : 'Add to favorite'}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default StudentList