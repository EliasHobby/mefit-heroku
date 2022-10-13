export class Workout {
    
    constructor(WorkoutId, Name, Type,  Image ){
        this.workoutId = WorkoutId
        this.name = Name
        this.type = Type
        this.image = Image
    }


    // Get methods for Training programs fields
    getWorkoutId() {
        return this.trainingProgramId;
    }

    getName() {
        return this.name;
    }

    getType() {
        return this.type;
    }
    getImage() {
        return this.image;
    }


    // Set methods for Training programs fields
    setName(newName) {
        this.name = newName;
    }

    setImage(url) {
        this.image = url;
    }
}