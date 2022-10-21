import { useKeycloak } from "@react-keycloak/web"

const PatchUserDetails = (measurements) => {
    const { keycloak } = useKeycloak();
    const user = JSON.parse(localStorage.getItem("user"))

    const patchUser = async () => {
        console.log(measurements)

        const patchRequestOptions = {
            authorization: keycloak.token,
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                'weight': measurements.weight,
                'height': measurements.height
            }),
        }
        // HTTP Patch the user
        fetch("https://apimefit.azurewebsites.net/api/Accounts/" + user.id, patchRequestOptions)
    }
    patchUser();
}

export default PatchUserDetails;