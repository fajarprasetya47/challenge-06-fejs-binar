export default function Button({ type, className, onClick, disabled, placeholder }) {
    return (
        <>
            <button
                type={type}
                className={className}
                onClick={onClick}
                disabled={disabled}
            >
                {placeholder}
            </button>
        </>
    )
}