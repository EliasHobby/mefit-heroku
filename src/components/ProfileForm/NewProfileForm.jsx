import { useForm } from "react-hook-form";
import PatchUserDetails from "../../utils/UserContext";

/**
 * 1. register: Add inputs
 * 2. handleSubmit: Bind to form onSubmit
 * 3. formState: Provide errors for current inputs 
 */

function NewProfileForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // data - Inputs in form with values
    const onSubmit = (data) => { PatchUserDetails(data) };

    // username is required and must be at least 3 characters
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <input {...register("height", {
                required: true
            })} type="number" />

            {errors.height && <p>Height is required</p>}

            <input {...register("weight", {
                required: true
            })} type="number" />

            {errors.weight && <p>Weight is required</p>}

        </form>
    );
}

export default NewProfileForm;
