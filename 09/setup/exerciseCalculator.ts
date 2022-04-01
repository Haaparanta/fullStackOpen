//hat calculates the average time of daily exercise hours and compares it to the target amount of daily hours and returns an object that includes the following values:
function calculateExercises(dailyExercise: Array<number>, target: number): object {
    const average = dailyExercise.reduce((a, b) => a + b, 0) / dailyExercise.length;
    const result = {
        periodLength: dailyExercise.length,
        trainingDays: dailyExercise.filter(day => day > 0).length,
        success: average > target,
        rating: average > target ? 3 : average > target - 1 ? 2 : 1,
        ratingDescription: average > target ? "good job" : average > target - 1 ? "not too bad but could be better" : "bad",
        target: target,
        average: average
    };
    return result;
}

const target:number = Number(process.argv[2]);
const dailyExercise: Array<any> = process.argv.slice(3);

const workoutDays: Array<number> = [];

console.log(calculateExercises(dailyExercise, target));
