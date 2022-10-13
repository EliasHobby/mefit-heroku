export class Goal {
    
    constructor(goal_id, end_date, achieved){
        this.goal_id = goal_id
        this.end_date = end_date
        this.achieved = achieved

    }


    // Get methods for Exercise field fields
    getGoalId() {
        return this.goal_id;
    }
    getEndDate() {
        return this.end_date;
    }

    getAchieved() {
        return this.achieved;
    }

    setAchieved() {
        this.achieved = true
    }
}