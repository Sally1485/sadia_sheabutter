import '@fontsource/poppins';


export default function SubmitButton({ title, className }) {
    return (
        <div>
            <button
                type="submit"
                className={ `bg-Green  hover:bg-green-500 text-white px-6 py-2 mt-4 rounded cursor-pointer hover:text-white ${className}`}>{title} </button>
        </div>
    )
}