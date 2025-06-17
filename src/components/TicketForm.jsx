import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import Store from "../context"

const TicketForm = () => {
    const { TicketForm, setTicketForm } = useContext(Store)

    const validationSchema = yup.object({
        avatar: yup.mixed()
            .required("This field is required.")
            .test("file size", "File too large, Please upload a photo under 500KB", (value) => value && value.size <= ((1024 * 1024) / 2)), // Value <= 500KB,
        fullName: yup.string().required("This field is required."),
        email: yup.string().required("This field is required.").email("Please enter a valid email address."),
        githubUsername: yup.string().required("This field is required.").matches(/^@/, "GitHub username must start with '@'"),
    })

    const { register, setValue, getValues, reset, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            avatar: null,
            fullName: "",
            email: "",
            githubUsername: "",
        }
    })

    const removeImage = (e) => {
        e.preventDefault()
        reset((formValues) => ({
            ...formValues,
            avatar: null,
        }))
    }

    const generateRandomCode = (length) => {
        const min = Math.pow(10, length - 1);
        const max = Math.pow(10, length) - 1;
        return `#${Math.floor(Math.random() * (max - min + 1)) + min}`
    }

    const onSuccess = (data) => {
        setTicketForm({
            ...data,
            code: generateRandomCode(5)
        })
    }

    const onSubmit = handleSubmit(onSuccess)

    return (
        <form className="text-white w-[550px] max-md:w-full mx-auto flex flex-col gap-8" onSubmit={onSubmit}>
            <label className="image">
                <input id="avatar" className="hidden" type="file" name="avatar" {...register("avatar")} onChange={event => setValue('avatar', event.target.files[0], { shouldValidate: true })} />
                <span className="block mb-4">Upload Avatar</span>
                <div className={`avatar-upload ${errors.avatar && 'error'}`}>
                    {
                        getValues('avatar') === null
                            ?
                            <div className="flex items-center flex-col gap-3">
                                <div className="grid place-items-center w-12 h-12 rounded-xl border border-Neutral-500/50 shadow bg-Neutral-700/50">
                                    <img src="/images/icon-upload.svg" alt="Upload Icon" />
                                </div>
                                <span>Drag and drop or click to upload</span>
                            </div>
                            :
                            <div className="preview flex flex-col items-center justify-center gap-4">
                                <img className="w-24 rounded-xl aspect-square object-cover" src={URL.createObjectURL(getValues('avatar'))} alt="Avatar Preview" />
                                <div className="actions flex items-center gap-2">
                                    <button className="bg-Neutral-700/50 underline p-1 px-2 rounded-lg cursor-pointer transition-all ease-out hover:bg-Neutral-500" onClick={removeImage}>Remove image</button>
                                    <label htmlFor="avatar" className="bg-Neutral-700/50 p-1 px-2 rounded-lg cursor-pointer transition-all ease-out hover:bg-Neutral-500">Change image</label>
                                </div>
                            </div>
                    }
                </div>
                <div className="info mt-4 flex items-center gap-2 text-xs text-Neutral-500 font-semibold">
                    <img src="/images/icon-info.svg" alt="Info Icon" />
                    <span>Upload your photo (JPG or PNG, max size: 500KB)</span>
                </div>
                {
                    errors.avatar &&
                    <div className="text-Orange-700 mt-3 flex items-center gap-2 text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="#e16151" strokeLinecap="round" strokeLinejoin="round" d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z" /><path fill="#e16151" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" /><path stroke="#e16151" strokeLinecap="round" strokeLinejoin="round" d="M8.004 10.462V7.596M8 5.569v-.042" /></svg>                        <span>{errors.avatar.message}</span>
                    </div>
                }
            </label>
            <label>
                <span className="block mb-4">Full Name</span>
                <input type="text" className={errors.fullName && 'error'} name="fullName" {...register("fullName")} />
                {
                    errors.fullName &&
                    <div className="text-Orange-700 mt-3 flex items-center gap-2 text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="#e16151" strokeLinecap="round" strokeLinejoin="round" d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z" /><path fill="#e16151" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" /><path stroke="#e16151" strokeLinecap="round" strokeLinejoin="round" d="M8.004 10.462V7.596M8 5.569v-.042" /></svg>                        <span>{errors.fullName.message}</span>
                    </div>
                }
            </label>
            <label>
                <span className="block mb-4">Email Address</span>
                <input type="email" className={errors.email && 'error'} name="email" placeholder="example@email.com" {...register("email")} />
                {
                    errors.email &&
                    <div className="text-Orange-700 mt-3 flex items-center gap-2 text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="#e16151" strokeLinecap="round" strokeLinejoin="round" d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z" /><path fill="#e16151" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" /><path stroke="#e16151" strokeLinecap="round" strokeLinejoin="round" d="M8.004 10.462V7.596M8 5.569v-.042" /></svg>                        <span>{errors.email.message}</span>
                    </div>
                }
            </label>
            <label>
                <span className="block mb-4">GitHub Username</span>
                <input type="text" className={errors.githubUsername && 'error'} name="githubUsername" placeholder="@yourusername" {...register("githubUsername")} />
                {
                    errors.githubUsername &&
                    <div className="text-Orange-700 mt-3 flex items-center gap-2 text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="#e16151" strokeLinecap="round" strokeLinejoin="round" d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z" /><path fill="#e16151" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" /><path stroke="#e16151" strokeLinecap="round" strokeLinejoin="round" d="M8.004 10.462V7.596M8 5.569v-.042" /></svg>
                        <span>{errors.githubUsername.message}</span>
                    </div>
                }
            </label>
            <button className="main-btn">Generate my ticket</button>
        </form>
    )
}

export default TicketForm