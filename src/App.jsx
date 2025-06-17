import { useState } from "react"
import Heading from "./components/Heading"
import TicketForm from "./components/TicketForm"
import Store from './context'
import Ticket from "./components/Ticket"
import Images from "./components/Images"


function App() {
  const [ticketForm, setTicketForm] = useState(null)

  return (
    <Store.Provider value={{ ticketForm, setTicketForm }}>
      <main className="min-h-screen relative py-16 overflow-x-hidden">
        <div className="container min-h-screen">
          <Images />
          <Heading />
          {
            ticketForm
              ?
              <Ticket />
              :
              <TicketForm />
          }
        </div>
      </main>
    </Store.Provider>
  )
}

export default App
