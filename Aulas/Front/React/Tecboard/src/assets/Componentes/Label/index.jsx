import './Label.css'

export function Label({ children, htmlFor }) {
    return (
        <label className="label" htmlFor={htmlFor}>
            {children}
        </label>
    )
}
