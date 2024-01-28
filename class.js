class LearnableCourse {
    //Class/Static Property
    static totalCourses = 0;

    constructor(title, tutor) {
        this.title = title;
        this.tutor = tutor;
         //Increment of the total number of courses when a new course is created
         LearnableCourse.totalCourses++;
    }

    //Class/Static Method
    static getTotalCourses(){
        return LearnableCourse.totalCourses;
    }
}

//creating instances of LearnableCourses
const course1 = new LearnableCourse("Introduction to Javascript", "John Doe");
const course2 = new LearnableCourse("Web Development Basics", "Jane Smith");


// Accessing instance properties
console.log("Course 1: ${course1.title} by ${course1.tutor}");
console.log("Course 2: ${course2.title} by ${course2.tutor}");

//Accessing class/static property
console.log("Total Courses: ${LearnableCourse.totalCourses}");

//Accessing class/static method
console.log("Total Courses (via method): ${LearnableCourse.totalCourses()}");