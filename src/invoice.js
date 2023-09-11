import back from "./img/icon-arrow-left.svg";
import { FaCircle } from "react-icons/fa";

function Invoice({ setEachinvoice, detinvoice, setInvoices, isDark }) {
  function handleBackeach() {
    setEachinvoice(false);
  }
  return (
    <div
      className={
        "px-10 py-8 sm:px-20 absolute top-20  w-full lg:top-0 lg:left-28 lg:w-5/6 xl:pt-20  xl:px-40 " +
        (!isDark ? "bg-white" : "bg-slate-900")
      }
    >
      <div className="flex cursor-pointer w-20" onClick={handleBackeach}>
        <img src={back} alt="back" className="h-4 mt-1" />
        <p className={"ml-2 " + (!isDark ? "text-black" : "text-white")}>
          Go back
        </p>
      </div>
      <Status
        detinvoice={detinvoice}
        setInvoices={setInvoices}
        setEachinvoice={setEachinvoice}
        isDark={isDark}
      />
      <Detail detinvoice={detinvoice} isDark={isDark} />
      <Foot detinvoice={detinvoice} isDark={isDark} />
    </div>
  );
}

function Status({ detinvoice, setInvoices, setEachinvoice, isDark }) {
  function handledelete(id) {
    console.log("deleted");
    setInvoices((invoices) => invoices.filter((invoice) => invoice.id !== id));
    setEachinvoice(false);
  }
  return (
    <div
      className={
        "p-4 flex justify-between rounded-lg mt-5 lg:px-16 lg:py-6 " +
        (!isDark
          ? "bg-white bg-white border-4 border-slate-400"
          : "bg-slate-800 ")
      }
    >
      <p
        className={
          "mt-3 text-lg lg:mt-1 lg:text-2xl " +
          (!isDark ? "text-slate-600" : "text-slate-200")
        }
      >
        Status
      </p>
      {detinvoice.paid === 0 ? (
        <div
          className="flex items-center justify-center  text-red-500 py-1 px-3 pb-0 rounded-lg"
          id="red"
        >
          <FaCircle className=" text-xs mt-0" />
          <p className="mt-0 ml-3 lg:text-xl">Pending</p>
        </div>
      ) : detinvoice.draft === 0 ? (
        <div
          className="flex items-center justify-center  text-slate-400 pb-0  py-1 px-3 rounded-lg"
          id="draft"
        >
          <FaCircle className=" text-xs mt-0" />
          <p className="mt-0 ml-3 lg:text-xl">Draft</p>
        </div>
      ) : (
        <div
          className="flex items-center justify-center  text-green-500 py-1 px-3 rounded-lg"
          id="green"
        >
          <FaCircle className=" text-xs " />
          <p className=" ml-3 lg:text-xl">Paid</p>
        </div>
      )}
      <button
        onClick={() => handledelete(detinvoice.id)}
        className="bg-red-400 px-7 py-3 cursor-pointer text-slate-800 rounded-full"
      >
        Delete
      </button>
    </div>
  );
}

function Detail({ detinvoice, isDark }) {
  return (
    <div
      className={
        " rounded-lg mt-5 p-4 px-5 lg:px-16 lg:py-10 " +
        (!isDark
          ? "bg-white bg-white border-4 border-slate-400"
          : "bg-slate-800 ")
      }
    >
      <div className="lg:flex lg:justify-between">
        <div>
          <p
            className={
              " font-semibold lg:text-2xl " +
              (!isDark ? "text-black" : "text-slate-400")
            }
          >
            #
            <span
              className={
                " tracking-wider " + (!isDark ? "text-black" : "text-slate-100")
              }
            >
              RT{detinvoice.id}
            </span>
          </p>
          <p className="text-slate-400 sm:text-2xl">{detinvoice.itemname}</p>
        </div>
        <div className="lg:text-right">
          <p className="text-slate-400 mt-5">{detinvoice.address}</p>
          <p className="text-slate-400">{detinvoice.city}</p>
          <p className="text-slate-400">{detinvoice.postcode}</p>
          <p className="text-slate-400">{detinvoice.country}</p>
        </div>
      </div>
      <div className="mt-7 flex justify-between xl:w-4/5">
        <div className="xl:flex xl:justify-between lg:w-3/5">
          <div>
            <p className="text-slate-400">Invoice Date</p>
            <p className={"text-xl " + (!isDark ? "text-black" : "text-white")}>
              {detinvoice.invoicedate}
            </p>

            <p className="text-slate-400 mt-4">Payment Due</p>
            <p className={"text-xl " + (!isDark ? "text-black" : "text-white")}>
              {detinvoice.payment}
            </p>
          </div>
          <div>
            <p className="text-slate-400 mt-4 xl:mt-0">Sent To</p>
            <p className={"text-xl " + (!isDark ? "text-black" : "text-white")}>
              {detinvoice.clientemail}
            </p>
          </div>
        </div>
        <div>
          <p className="text-slate-400 ">Bill To</p>
          <p
            className={
              "text-xl sm:text-2xl " + (!isDark ? "text-black" : "text-white")
            }
          >
            {detinvoice.clientname}
          </p>
          <p className="text-slate-400 mt-3">{detinvoice.clientaddress}</p>
          <p className="text-slate-400">{detinvoice.clientcity}</p>
          <p className="text-slate-400">{detinvoice.clientpostcode}</p>
          <p className="text-slate-400">{detinvoice.clientcountry}</p>
        </div>
      </div>
      <div
        className={
          "my-4 mx-2   rounded-lg lg:mt-10 " +
          (!isDark ? "bg-white " : "bg-slate-700")
        }
      >
        <div
          className={
            "flex justify-between px-5 py-5 lg:px-10 " +
            (!isDark && "shadow-md shadow-black")
          }
        >
          <div className="md:flex md:justify-between w-3/5">
            <div className="mb-3">
              <p className="text-slate-400">Item Name</p>
              <p
                className={
                  "text-xl font-semibold sm:text-2xl lg:mt-2 " +
                  (!isDark ? "text-slate-800" : "text-slate-100")
                }
              >
                {detinvoice.itemname}
              </p>
            </div>
            <div className="mb-3">
              <p className="text-slate-400">Quantity</p>
              <p
                className={
                  "sm:text-xl lg:text-center font-semibold lg:mt-2 " +
                  (!isDark ? "text-slate-800" : "text-slate-100")
                }
              >
                {detinvoice.itemsquantity}
              </p>
            </div>
            <div className="mb-3">
              <p className="text-slate-400"> Price</p>
              <p
                className={
                  " sm:text-xl lg:text-center font-semibold lg:mt-2 " +
                  (!isDark ? "text-slate-800" : "text-slate-100")
                }
              >
                ${detinvoice.itemsprice}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-slate-400">Total</p>
            <p
              className={
                "text-xl mt-2 sm:text-2xl font-semibold lg:text-2xl " +
                (!isDark ? "text-slate-600" : "text-slate-100")
              }
            >
              $ {detinvoice.itemstotal}
            </p>
          </div>
        </div>
        <div className=" bg-black px-5 py-10 flex justify-between rounded-b-lg lg:px-10">
          <div>
            <p className="text-slate-300 text-xl sm:text-3xl">Grand Total</p>
          </div>
          <p className="text-xl text-slate-300 font-semibold tracking-wider sm:text-2xl lg:text-3xl">
            ${detinvoice.itemstotal}
          </p>
        </div>
      </div>
    </div>
  );
}

function Foot({ detinvoice, isDark }) {
  function handlepaid() {
    console.log(detinvoice.paid);
    detinvoice.paid = detinvoice.paid + 1;
    detinvoice.draft = detinvoice.draft + 1;
    console.log(detinvoice.paid);
  }
  return (
    <div
      className={
        " p-4 flex justify-between rounded-lg mt-5 lg:px-16 lg:py-6 " +
        (!isDark ? "bg-white  border-4 border-slate-400" : "bg-slate-800")
      }
    >
      <button className="bg-slate-600 px-7 py-3 text-slate-400 cursor-pointer rounded-full">
        Edit
      </button>
      <button
        className="bg-red-400 px-7 py-3 text-slate-700 cursor-pointer rounded-full"
        onClick={handlepaid}
      >
        Mark as Paid
      </button>
    </div>
  );
}

export default Invoice;
