export class TrainingProgram {
    
    constructor(TrainingProgramId, Name, Category, Description, Image ){
        this.trainingProgramId = TrainingProgramId
        this.name = Name
        this.category = Category
        this.description = Description
        this.image = Image
    }


    // Get methods for Training programs fields
    getTrainingProgramId() {
        return this.trainingProgramId;
    }

    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getCategory() {
        return this.category;
    }
    getImage() {
        return this.image;
    }


    // Set methods for Training programs fields
    setName(newName) {
        this.name = newName;
    }
    setDescription(newDescription) {
        this.description = newDescription;
    }

    setImage(url) {
        this.image = url;
    }
}