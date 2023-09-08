import { useState } from "react";
import Head from "./head";
import Main from "./main";
import Addnewinvoice from "./addnewinvoice";
import Invoice from "./invoice";

function App() {
  const [invoices, setInvoices] = useState([]);
  const [voices, setVoices] = useState([]);
  const [addnewinvoice, setAddnewinvoice] = useState(false);
  const [eachinvoice, setEachinvoice] = useState(false);
  const [detinvoice, setDetinvoice] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [paid, setPaid] = useState([]);
  const [isPaid, setIsPaid] = useState(false);
  const [all, setAll] = useState(false);
  const [pending, setPending] = useState([]);
  const [isPending, setIsPending] = useState(false);

  return (
    <div className="lg:flex">
      <Head setIsDark={setIsDark} isDark={isDark} />
      <Main
        invoices={isPaid ? paid : isPending ? pending : invoices}
        setAddnewinvoice={setAddnewinvoice}
        setEachinvoice={setEachinvoice}
        setDetinvoice={setDetinvoice}
        setIsDark={setIsDark}
        isDark={isDark}
        setPaid={setPaid}
        paid={paid}
        setIsPaid={setIsPaid}
        setAll={setAll}
        setIsPending={setIsPending}
        pending={pending}
        setPending={setPending}
        voices={voices}
      />
      {eachinvoice && (
        <Invoice
          setEachinvoice={setEachinvoice}
          detinvoice={detinvoice}
          setInvoices={setInvoices}
          isDark={isDark}
        />
      )}
      {addnewinvoice && (
        <Addnewinvoice
          invoices={invoices}
          setInvoices={setInvoices}
          setAddnewinvoice={setAddnewinvoice}
          isDark={isDark}
          voices={voices}
          setVoices={setVoices}
        />
      )}
    </div>
  );
}

export default App;
