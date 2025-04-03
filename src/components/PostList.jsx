import { useContext } from "react";
import CountContext from "../contexts/ContextCount";
import PostCard from "./postCard";

export default function PostList() {
    const { person } = useContext(CountContext);

    console.log(person);

    if (!person || !person.people || person.people.length === 0) {
        return <p>Caricamento dei dati...</p>;
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    {person.people.map((people, index) => (
                        <div className="col-md-4" key={index}>
                            <PostCard person={people} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

