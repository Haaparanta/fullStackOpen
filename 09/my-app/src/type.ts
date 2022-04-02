
interface CoursePartBase {
    name: string;
    exerciseCount: number;
    type: string;
  }
  
interface CoursePartDescription extends CoursePartBase {
    description: string;
}

interface CoursePartOne extends CoursePartDescription { 
    type: 'normal';
}

interface CoursePartTwo extends CoursePartBase {
    type: 'groupProject';
    groupProjectCount: number;
}

interface CoursePartThree extends CoursePartDescription {
    type: 'submission';
    exerciseSubmissionLink: string;
}
interface CoursePartFour extends CoursePartDescription {
    type: 'special';
    requirements: Array<string>;
}


export type CoursePart = | CoursePartOne | CoursePartTwo | CoursePartThree | CoursePartFour;
