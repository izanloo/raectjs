import React from 'react'
import { getInvoices } from './data'
import { Outlet,Link} from 'react-router-dom'

export default function Invoice() {
    let invoices = getInvoices();
  return (
<>
<br/>
{invoices.map((item)=>(<><Link  to={`/invoice/${item.number}`}>{item.name}</Link>
<br/>
</>)
)}
    <div>Invoice</div>
    
    <Outlet/>
    </>
  )
}
