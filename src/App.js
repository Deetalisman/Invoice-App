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
  const [draft, setDraft] = useState([]);
  const [isDraft, setIsDraft] = useState(false);

  return (
    <div className="lg:flex">
      <Head setIsDark={setIsDark} isDark={isDark} />
      <Main
        invoices={
          isPaid ? paid : isPending ? pending : isDraft ? draft : invoices
        }
        setAddnewinvoice={setAddnewinvoice}
        setEachinvoice={setEachinvoice}
        setDetinvoice={setDetinvoice}
        setIsDark={setIsDark}
        isDark={isDark}
        setPaid={setPaid}
        paid={paid}
        setIsPaid={setIsPaid}
        isPaid={isPaid}
        all={all}
        setAll={setAll}
        setIsPending={setIsPending}
        isPending={isPending}
        pending={pending}
        setPending={setPending}
        voices={voices}
        setDraft={setDraft}
        isDraft={isDraft}
        setIsDraft={setIsDraft}
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
