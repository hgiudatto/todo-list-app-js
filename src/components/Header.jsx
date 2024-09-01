export default function Header({ names }) {
    return (
        <header>
            <h3>Iliad:</h3>
            {names.map((name) =>
                <span key={name}>{name}, </span>
            )}
        </header>)
}