
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

export default calculateExercises