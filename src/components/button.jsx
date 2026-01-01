export default function Buttons({ name, onClick, className = "" }) {
    return (
        <button
            className={`text-white bg-indigo-500 hover:bg-blue-900 transition-colors duration-300 ${className}`}
            onClick={onClick}
        >
            {name}
        </button>
    )
}