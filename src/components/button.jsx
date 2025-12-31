export default function Buttons({ name, onClick }) {
    return (
        <button
            className="text-white bg-indigo-500 hover:bg-blue-900 transition-colors duration-300"
            onClick={onClick}
        >
            {name}
        </button>
    )
}