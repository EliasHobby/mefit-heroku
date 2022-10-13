export class TrainingProgram {
    
    constructor(TrainingProgramId, Name, Description, Image, Target_muscle_group ){
        this.id = TrainingProgramId
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


    // Set methods for Exercise field fields
    setName(newName) {
        this.name = newName;
    }
    setDescription(newDescription) {
        this.lastName = newDescription;
    }
    setTargetMuscleGroup(newMuscleGroup) {
        this.target_muscle_group = newMuscleGroup;
    }
    setImage(url) {
        this.image = url;
    }

}