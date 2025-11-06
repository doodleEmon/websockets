export default function Input({ placeholder, handleSubmit, name, className }) {
    return (
        <div>
            <input name={name} onChange={handleSubmit} placeholder={placeholder} className={className} />
        </div>
    )
}
