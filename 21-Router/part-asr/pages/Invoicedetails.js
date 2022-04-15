import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getInvoice } from "./data";
import { useNavigate } from "react-router-dom";

export default function Invoicedetails() {
  const navigate = useNavigate()
  // let params = useParams();
  // console.log(params);
  // let invoices = getInvoice(+params.number);
  // console.log(invoices);
  const [invoice, setInvoice] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function setInfo(e) {
    setInvoice({ ...invoice, [e.target.name]: e.target.value })
  }
  function submit() {
    setIsSubmit(true)
    navigate('./Invoice')
    if (isSubmit) {
      return <Navigate />
    }
  }
  return (
    <>
      <input
        onChange={setInfo}
        type="text"
        name="number"
        placeholder="number"
        // value={invoices.number}
      >
        {" "}
        {/* {invoices.number} */}
      </input>
      <input type="text" name="name" placeholder="name" 
      >
        {/* {invoices.name} */}
      </input>
      <input
        type="text"
        name="amount"
        placeholder="amount"
        // value={invoices.amount}
      >
        {/* {invoices.amount} */}
      </input>
      <input type="text" name="due" placeholder="due"
      >
      </input>
      <button onClick={submit} >ok</button>
    </>
  );
}
