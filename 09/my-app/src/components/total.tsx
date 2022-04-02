

const total = ({courseParts}: {courseParts: Array<{name:string, exerciseCount: number}>}) => {
    return (
        <div>
            <p>
                Number of exercises{" "}
                {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
            </p>
        </div>
    );
}

export default total;








