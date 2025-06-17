import { useContext } from "react"
import Store from "../context"

const Heading = () => {
    const { ticketForm } = useContext(Store)

    return (
        <div className="heading text-center mb-12">
            <div className="logo w-full mb-12">
                <img className="mx-auto" src="/images/logo-full.svg" alt="Logo" />
            </div>
            {
                ticketForm
                    ?
                    <div className="flex flex-col gap-6">
                        <h1 className="text-6xl max-md:text-3xl lg:px-32 xl:px-72 font-bold text-white">
                            Congrats, <span className="text-transparent bg-clip-text bg-gradient-to-r from-Gradient-text-from to-Gradient-text-to">{ticketForm.fullName}!</span> Your ticket is ready.
                        </h1>
                        <p className="text-Neutral-300 md:text-xl lg:px-32 xl:px-72">
                            We've emailed your ticket to <span className="text-Orange-500">{ticketForm.email}</span> and will send updates in the run up to the event.
                        </p>
                    </div>
                    :
                    <div className="flex flex-col gap-6">
                        <h1 className="text-6xl max-md:text-3xl lg:px-32 xl:px-72 font-bold text-white">
                            Your Journey to Coding Conf 2025 Starts Here!
                        </h1>
                        <p className="text-Neutral-300 md:text-xl">
                            Secure your spot at next year's biggest coding conference.
                        </p>
                    </div>
            }
        </div>
    )
}

export default Heading