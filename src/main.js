import add from "./img/icon-plus.svg";
function Main({ invoices, setAddnewinvoice, setEachinvoice, setDetinvoice }) {
  return (
    <div className="bg-slate-900 h-auto px-7 py-10 sm:px-20  lg:pt-28 w-full xl:w-[70rem] xl:mx-[auto]">
      <Head invoices={invoices} setAddnewinvoice={setAddnewinvoice} />
      <Invoicebody
        invoices={invoices}
        setEachinvoice={setEachinvoice}
        setDetinvoice={setDetinvoice}
      />
    </div>
  );
}

function Head({ invoices, setAddnewinvoice }) {
  function handleAddnewinvoice() {
    setAddnewinvoice(true);
  }
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-3xl font-semibold">Invoices</h1>
        <p className="text-blue-700 mt-3">{invoices.length} invoices</p>
      </div>
      <div className="block">
        <select className="text-white bg-transparent outline-none ml-9">
          <option className=" bg-slate-600">Filter</option>
          <option className=" bg-slate-600">Paid</option>
          <option className=" bg-slate-600">Pending</option>
          <option className=" bg-slate-600">Draft</option>
        </select>
        <div
          onClick={handleAddnewinvoice}
          className="flex  bg-purple-500 rounded-3xl px-2 py-2 h-12 mt-4 ml-5 cursor-pointer focus:ring focus:ring-purple-500"
        >
          <div className="bg-slate-100 rounded-full p-3">
            <img src={add} alt="me" className="w-3" />
          </div>
          <p className="ml-2 mt-1">New Invoice</p>
        </div>
      </div>
    </div>
  );
}

function Invoicebody({ invoices, setEachinvoice, setDetinvoice }) {
  return (
    <div>
      {invoices.map((invoice) => (
        <Body
          invoice={invoice}
          setEachinvoice={setEachinvoice}
          setDetinvoice={setDetinvoice}
        />
      ))}
    </div>
  );
}
function Body({ invoice, setEachinvoice, setDetinvoice }) {
  function handleEachinvoice() {
    setEachinvoice(true);
    setDetinvoice(invoice);
  }
  return (
    <div
      onClick={handleEachinvoice}
      className="mt-7 items-center bg-slate-800 p-4 shadow-lg shadow-slate-600 rounded-md cursor-pointer lg:flex lg:justify-between lg:py-10 lg:px-10 lg:text-2xl"
    >
      <div className="flex justify-between lg:w-3/5 ">
        <div className="lg:flex lg:justify-between lg:w-3/5">
          <p className="text-slate-500 font-semibold">
            #
            <span className="text-slate-100 tracking-wider ">
              RT{invoice.id}
            </span>
          </p>
          <p className=" text-slate-500 text-base mt-7 lg:mt-0 lg:text-2xl">
            {invoice.invoicedate}
          </p>
        </div>
        <p className="text-slate-500 text-center">{invoice.clientname}</p>
      </div>
      <div className="flex justify-between">
        <p className="font-semibold text-xl tracking-wider mt-2  lg:text-2xl lg:mt-2 lg:mr-10">
          $ {invoice.itemstotal}
        </p>
        <div
          className="flex float-right  py-2 px-3 text-green-200 rounded-lg"
          id="green"
        >
          <p className="text-xl">.</p>
          <p className=" ml-3">Paid</p>
        </div>
      </div>
    </div>
  );
}
export default Main;
