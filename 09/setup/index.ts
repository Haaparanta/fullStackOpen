import express from 'express';
import calculateBmi from './bmiCalculator';
import calculateExercises from './exerciseCalculator';

const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    let height: number, weight: number;
    const queryWeight = req.query.weight;
    const queryHeight = req.query.height;
    if (!Number(queryWeight) && !Number(queryHeight)) {
        res.send('Please provide a weight and a height');
    } else {
        weight = Number(queryWeight);
        height = Number(queryHeight);
        if (height == 0) {
            res.send('Please provide a height');
        } else if (weight == 0) {
            res.send('Please provide a weight');
        } else {
            const bmi = calculateBmi(height, weight);
            res.status(200).json({weight: weight, height: height, bmi: bmi});
        }
    }
})

app.post('/exercises', (req, res) => {
    const dailyExercise = req.body.dailyExercise;
    const target = req.body.target;
    if (!Array.isArray(dailyExercise) || !Number(target)) {
        res.send('Please provide a valid array of daily exercise and a target');
    } else {
        const result = calculateExercises(dailyExercise, target);
        res.status(200).json(result);
    }
})
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



