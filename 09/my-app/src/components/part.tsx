
const Part = ({part}: {part: {name: string, exerciseCount: number}}) => {
  return (
    <div>
      <p>
        {part.name} {part.exerciseCount}
      </p>
    </div>
  );
}

export default Part;




