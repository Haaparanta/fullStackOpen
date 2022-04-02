import React from "react";
import { CoursePart } from "../type";

const assertNever = (value: never): never => {
    throw new Error(
        `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
};

const Part: React.FC<{ part: CoursePart }> = ({ part }) => {
    switch (part.type) {
        case 'normal':
            return (
                <div>
                    <h1>{part.name} {part.exerciseCount}</h1>
                    <p>{part.description}</p>
                </div>
            );
        case 'groupProject':
            return (
                <div>
                    <h1>{part.name} {part.exerciseCount}</h1>
                    <p>Project exercise {part.groupProjectCount}</p>
                </div>
            );
        case 'submission':
            return (
                <div>
                    <h1>{part.name} {part.exerciseCount}</h1>
                    <p>{part.description}</p>
                    <p>submit to{part.exerciseSubmissionLink}</p>
                </div>
            );
        case 'special':
            return (
                <div>
                    <h1>{part.name} {part.exerciseCount}</h1>
                    <p>{part.description}</p>
                    <p>required skills{part.requirements}</p>
                </div>
            );
        default:
            return assertNever(part);
    }
};


export default Part;

