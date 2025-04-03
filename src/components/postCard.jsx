export default function PostCard({ person }) {
    console.log(person);

    if (!person) {
        return <p>Caricamento...</p>;
    }

    return (
        <>
            <div className="post-card-container">
                <div className="card">
                    <div className="card-body">
                        <h4>{person.name}</h4>
                        <p>Age: {person.age}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
