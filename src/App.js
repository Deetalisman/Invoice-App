import { useState } from "react";
import Head from "./head";
import Main from "./main";
import Addnewinvoice from "./addnewinvoice";
import Invoice from "./invoice";

function App() {
  const [invoices, setInvoices] = useState([]);
  const [addnewinvoice, setAddnewinvoice] = useState(false);
  const [eachinvoice, setEachinvoice] = useState(false);
  const [detinvoice, setDetinvoice] = useState(false);

  return (
    <div className="lg:flex">
      <Head />
      <Main
        invoices={invoices}
        setAddnewinvoice={setAddnewinvoice}
        setEachinvoice={setEachinvoice}
        setDetinvoice={setDetinvoice}
      />
      {eachinvoice && (
        <Invoice
          setEachinvoice={setEachinvoice}
          detinvoice={detinvoice}
          setInvoices={setInvoices}
        />
      )}
      {addnewinvoice && (
        <Addnewinvoice
          invoices={invoices}
          setInvoices={setInvoices}
          setAddnewinvoice={setAddnewinvoice}
        />
      )}
    </div>
  );
}

export default App;
