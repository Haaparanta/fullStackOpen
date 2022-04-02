import Part from './part';

const Content = ({courseParts}: {courseParts: Array<{name:string, exerciseCount: number}>}) => {
    return (
        <div>
            <Part part={courseParts[0]} />
            <Part part={courseParts[1]} />
            <Part part={courseParts[2]} />
        </div>

    );
}

export default Content;



