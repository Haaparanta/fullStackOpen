

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

export default calculateBmi