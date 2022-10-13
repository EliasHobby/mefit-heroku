export class Exercise {

    constructor(Id, Name, Description, Image, Target_muscle_group ){
        this.id = Id
        this.name = Name
        this.description = Description
        this.target_muscle_group = Target_muscle_group
        this.image = Image
    }


    // Get methods for Exercise field fields
    getName() {
        return this.name;
    }
    getDescription() {
        return this.lastName;
    }
    getTargetMuscleGroup() {
        return this.target_muscle_group;
    }
    getImage() {
        return this.image;
    }
}

export class defaultExercise {
    constructor(Id, Name ){
        this.id = Id
        this.name = Name
        this.description = "This exercise is an exercise for exercise persons"
        this.target_muscle_group = "Target_muscle_group"
        this.image = "https://i.ndtvimg.com/i/2016-06/pushups-625_625x350_51465978240.jpg"
    }

    // Get methods for Exercise field fields
    getName() {
        return this.name;
    }
    getDescription() {
        return this.lastName;
    }
    getTargetMuscleGroup() {
        return this.target_muscle_group;
    }
    getImage() {
        return this.image;
    }
}
