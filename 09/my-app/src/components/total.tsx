import React from "react";
import { CoursePart } from "../type";

const total: React.FC<{ courseParts: Array<CoursePart> }> = ({ courseParts }) => {
    return (
        <div>
            <h2>
                Number of exercises{" "}
                {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
            </h2>
        </div>
    );
}

export default total;








