import { useContext } from "react"
import Store from "../context"


const Ticket = () => {
    const { ticketForm } = useContext(Store)

    return (
        <div className="ticket-container mt-24">
            <div className="w-fit mx-auto relative">
                <img className="w-full" src="/images/pattern-ticket.svg" alt="Ticket Card" />
                <div className="info p-6 absolute w-full top-0 left-0 h-full flex flex-col justify-between">
                    <div>
                        <img className="w-72 max-md:w-32" src="/images/logo-full.svg" alt="Logo Mark" />
                        <span className="block mt-3 max-md:mt-2 ms-16 max-md:ms-7 text-Neutral-300 max-md:text-xs">{new Date().toDateString()} / Austin, TX</span>
                    </div>
                    <span className="absolute right-3 max-md:right-2 top-1/2 -translate-y-1/2 text-Neutral-300/50 text-3xl max-md:text-lg rotate-90">
                        {ticketForm.code}
                    </span>
                    <div className="flex items-center gap-4 max-md:gap-2">
                        <img className="w-18 max-md:w-12 rounded-lg aspect-square object-cover" src={URL.createObjectURL(ticketForm.avatar)} alt="Avatar" />
                        <div className="details text-white">
                            <h2 className="text-2xl max-md:text-sm mb-1 font-semibold capitalize">{ticketForm.fullName}</h2>
                            <div className="flex items-center gap-1 text-Neutral-300 text-lg max-md:text-sm">
                                <img src="/images/icon-github.svg" alt="GitHub Icon" />
                                <span>{ticketForm.githubUsername}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ticket