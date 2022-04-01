

const calculateBmi = (height: number, weight: number): string => {
    height = height / 100;
    const bmi: number = weight / (height * height);
    let result: string;
    if (bmi < 20) {
        result = 'Underweight';
    } else if (bmi < 25) {
        result = 'Normal';
    } else if (bmi < 30) {
        result = 'Overweight';
    } else {
        result = 'Obese';
    }
    return result;
}

const a: number = Number(process.argv[2]);
const b: number = Number(process.argv[3]);
console.log(calculateBmi(a, b));