import React from 'react'
import TicketList from './TicketList'

function Tickets() {
  return (
    <div>
      <main>
       <nav>
        <h2>Tickets</h2>
        <p><small>Currently open tickets.</small></p>
       </nav>
       <TicketList/>
      </main>
    </div>
  )
}

export default Tickets
