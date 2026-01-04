export default function IsLoading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-50 w-full">
            <div className="relative">
                <div className="h-12 w-12 rounded-full border-4 border-gray-200"></div>
                <div className="absolute top-0 left-0 h-12 w-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
            </div>
            <span className="mt-4 text-gray-600 font-medium text-sm tracking-wide animate-pulse">Cargando...</span>
        </div>
    );
}