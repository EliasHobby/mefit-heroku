export class Goal {
    
    constructor(goal_id, end_date, achieved){
        this.goal_id = goal_id
        this.end_date = end_date
        this.achieved = achieved

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

    setAchieved() {
        this.achieved = true
    }

}