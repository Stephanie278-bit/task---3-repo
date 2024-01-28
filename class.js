class Art {
   
    static exhibition = "Uknown";

    constructor(type, price) {
        this.type = type;
        this.price = price;
        
    }
     speak() {
        console.log("the type of art is ${this.type}");
     }

  setNewExhibition(type){
    this.exhibition = type;
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