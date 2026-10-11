
import { useContext, useState } from 'react'
import StudentContext from '../StudentContext'

function StudentList() {
    const { students, favoriteStudents, addStudent, addFavoriteStudent } = useContext(StudentContext)
    const [studentName, setStudentName] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        const name = studentName.trim()

        if (!name) {
            return
        }

        addStudent(name)
        setStudentName('')
    }

    return (
        <main className="mx-auto max-w-2xl p-6">
            <div className="sticky top-14 z-10 -mx-6 mb-6 bg-white/95 px-6 pb-3 pt-2 backdrop-blur-sm">
                <h1 className="mb-4 text-2xl font-bold">All Student List</h1>
                <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                        type="text"
                        value={studentName}
                        onChange={(event) => setStudentName(event.target.value)}
                        placeholder="Enter student name"
                        aria-label="Student name"
                        autoComplete="off"
                        required
                        className="min-w-0 flex-1 rounded-md border border-gray-300 px-3 py-2 "
                    />
                    <button
                        type="submit"
                        className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
                    >
                        Add student
                    </button>
                </form>
            </div>
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