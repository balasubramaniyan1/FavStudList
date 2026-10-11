import { useContext } from "react";
import StudentContext from "../StudentContext";
function FavStudentList() {
    const { favoriteStudents, removeFavoriteStudent } = useContext(StudentContext)

    return (
        <main className="mx-auto max-w-2xl p-6">
            <h1 className="mb-4 text-2xl font-bold">Favorite Students List</h1>
            {favoriteStudents.length === 0 ? (
                <p className="rounded-lg border border-gray-200 bg-white p-4 text-gray-600 shadow-sm">
                    No favorite students yet.
                </p>
            ) : (
                <ul className="grid gap-3">
                    {favoriteStudents.map((student, index) => (
                        <li
                            key={student.id}
                            className="student-card flex items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
                        >
                            <span className="font-medium text-gray-800">
                                {index + 1}. {student.name}
                            </span>
                            <button
                                type="button"
                                onClick={() => removeFavoriteStudent(student.id)}
                                className="rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </main>
    )
}

export default FavStudentList