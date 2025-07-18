export default function SubmitButton({title}) {
    return (
        <div>
            <button
                type="submit"
                className="border border-Green hover:bg-brown text-Green px-12 py-2 mt-4 hover:text-white ">{ title}</button>
        </div>
    )
}