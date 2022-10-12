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
        return this.name();
    }
    getDescription() {
        return this.lastName();
    }
    getTargetMuscleGroup() {
        return this.target_muscle_group();
    }
    getImage() {
        return this.image();
    }
}