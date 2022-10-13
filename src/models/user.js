
//Fields for user object
export class User{
    constructor(Firstname, Lastname, Email ){
        //default field: Weight, Height, Disabilities, ProfilePicture, AddressId, KeycloackId, TrainingprogramId, GoalId 
        this.firstName = Firstname
        this.lastName = Lastname
        this.email = Email
        this.height = -1
        this.weight = -1
        this.disabilities = ""
        this.profilePicture = ""
        this.addressId = 0
        this.keycloackId = ""
        this.trainingprogramId = ""
        this.goalId = ""
    }


    // Getters for user fields
    getFirstName() {
        return this.firstName();
    }
    getLastName() {
        return this.lastName();
    }
    getEmail() {
        return this.email();
    }
    getHeight() {
        return this.height();
    }
    getWeight() {
        return this.weight();
    }

    getDisabilities() {
        return this.disabilities();
    }

    getProfilePicture() {
        return this.profilePicture();
    }

    getAddressId() {
        return this.addressId();
    }

    getKeycloackId() {
        return this.keycloakId();
    }

    getTrainingprogramId() {
        return this.trainingprogramId();
    }
    getGoalId() {
        return this.trainingprogramId();
    }

    //Setters for user fields
    setFName(newFName) {
        newFName = newFName.trim();
        if (newFName === '') {
            throw'Enter an Employee name';
        }
        this.firstName = newFName;
    }
    setLName(newLName) {
        newLName = newLName.trim();
        if (newLName === '') {
            throw'Enter an Employee name';
        }
        this.lastName = newLName;
    }
    setWeight(newWeight) {
        newWeight = newWeight.trim();
        if (newWeight < 0) {
            throw'Enter a valid weight';
        }
        this.weight = newWeight;
    }
    setHeight(newHeight) {
        newHeight = newHeight.trim();
        if (newHeight < 0) {
            throw'Enter a valid height';
        }
        this.height = newHeight;
    }
    setProfilePicture(url) {
        url = url.trim();
        if (url.length() < 0) {
            throw'Enter a valid url';
        }
        this.profilePicture = url;
    }
    setEmail(newEmail) {
        newEmail = newEmail.trim();
        if (newEmail.length() < 0) {
            throw'Enter a valid Email';
        }
        this.email = newEmail;
    }
}

