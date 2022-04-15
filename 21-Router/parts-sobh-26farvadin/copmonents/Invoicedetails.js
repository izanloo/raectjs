import React from 'react'
import { useParams } from 'react-router-dom'
 import { getInvoice } from './data';
export const Invoicedetails = () => {
    let params=useParams()
    console.log(params.number);
    let invoices = getInvoice(+params.number);
console.log(invoices)
  return (
      <>
    <div>{invoices.number}</div>
    <div>{invoices.name}</div>
    <div>{invoices.amount}</div>
    <div>{invoices.due}</div>
    </>
  )
}
