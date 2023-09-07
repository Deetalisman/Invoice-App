import back from "./img/icon-arrow-left.svg";
function Invoice({ setEachinvoice, detinvoice, setInvoices }) {
  function handleBackeach() {
    setEachinvoice(false);
  }
  return (
    <div className="px-10 py-8 sm:px-20 absolute top-20 bg-slate-900 w-full lg:top-0 lg:left-32 lg:w-5/6 xl:pt-20  xl:px-40">
      <div className="flex cursor-pointer" onClick={handleBackeach}>
        <img src={back} alt="back" className="h-4 mt-1" />
        <p className="ml-5">Go back</p>
      </div>
      <Status
        detinvoice={detinvoice}
        setInvoices={setInvoices}
        setEachinvoice={setEachinvoice}
      />
      <Detail detinvoice={detinvoice} />
    </div>
  );
}

function Status({ detinvoice, setInvoices, setEachinvoice }) {
  function handledelete(id) {
    console.log("deleted");
    setInvoices((invoices) => invoices.filter((invoice) => invoice.id !== id));
    setEachinvoice(false);
  }
  return (
    <div className=" bg-slate-800 p-4 flex justify-between rounded-lg mt-5 lg:px-16 lg:py-6">
      <p className="mt-5 lg:mt-1 lg:text-2xl">Status</p>
      <div
        className="flex float-right text-green-500 py-1 px-4 rounded-lg"
        id="green"
      >
        <p className="text-xl">.</p>
        <p className="mt-1 ml-3">Paid</p>
      </div>
      <button
        onClick={() => handledelete(detinvoice.id)}
        className="bg-red-400 px-7 py-3 cursor-pointer rounded-full"
      >
        Delete
      </button>
    </div>
  );
}

function Detail({ detinvoice }) {
  return (
    <div className=" bg-slate-800 rounded-lg mt-5 p-4 px-5 lg:px-16 lg:py-10">
      <div className="xl:flex xl:justify-between">
        <div>
          <p className="text-slate-500 font-semibold lg:text-2xl">
            #<span className="text-slate-100 tracking-wider">RT2080</span>
          </p>
          <p className="text-slate-300 sm:text-2xl">{detinvoice.itemname}</p>
        </div>
        <div className="lg:text-right">
          <p className="text-slate-300 mt-5">{detinvoice.address}</p>
          <p className="text-slate-300">{detinvoice.city}</p>
          <p className="text-slate-300">{detinvoice.postcode}</p>
          <p className="text-slate-300">{detinvoice.country}</p>
        </div>
      </div>
      <div className="mt-7 flex justify-between xl:w-4/5">
        <div className="xl:flex xl:justify-between lg:w-3/5">
          <div>
            <p className="text-slate-300">Invoice Date</p>
            <p className="text-lg">{detinvoice.invoicedate}</p>

            <p className="text-slate-300 mt-4">Payment Due</p>
            <p className="text-xl">{detinvoice.payment}</p>
          </div>
          <div>
            <p className="text-slate-300 mt-4 xl:mt-0">Sent To</p>
            <p className="text-sm sm:text-xl">{detinvoice.clientemail}</p>
          </div>
        </div>
        <div>
          <p className="text-slate-300 ">Bill To</p>
          <p className="text-xl sm:text-2xl">{detinvoice.clientname}</p>
          <p className="text-slate-300 mt-3">{detinvoice.clientaddress}</p>
          <p className="text-slate-300">{detinvoice.clientcity}</p>
          <p className="text-slate-300">{detinvoice.clientpostcode}</p>
          <p className="text-slate-300">{detinvoice.clientcountry}</p>
        </div>
      </div>
      <div className="my-4 mx-2 bg-slate-700  rounded-lg lg:mt-10">
        <div className="flex justify-between px-5 py-10 lg:px-10 ">
          <div className="md:flex md:justify-between w-3/5">
            <div>
              <p className="text-slate-400">Item Name</p>
              <p className="text-xl font-semibold sm:text-2xl lg:mt-2">
                {detinvoice.itemname}
              </p>
            </div>
            <div>
              <p className="text-slate-400">Quantity</p>
              <p className="text-slate-100 sm:text-xl lg:text-center lg:mt-2">
                {detinvoice.itemsquantity}
              </p>
            </div>
            <div>
              <p className="text-slate-400"> Price</p>
              <p className="text-slate-100 sm:text-xl lg:text-center lg:mt-2">
                ${detinvoice.itemsprice}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-slate-400">Total</p>
            <p className="text-xl mt-2 sm:text-2xl lg:text-2xl">
              $ {detinvoice.itemstotal}
            </p>
          </div>
        </div>
        <div className=" bg-black px-5 py-10 flex justify-between rounded-b-lg lg:px-10">
          <div>
            <p className="text-slate-300 text-xl sm:text-3xl">Grand Total</p>
          </div>
          <p className="text-xl sm:text-2xl lg:text-3xl">
            ${detinvoice.itemstotal}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Invoice;
