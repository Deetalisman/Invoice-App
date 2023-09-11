import { useState } from "react";
import add from "./img/icon-plus.svg";
import { FaAngleDown } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
function Main({
  invoices,
  setAddnewinvoice,
  setEachinvoice,
  setDetinvoice,
  isDark,
  paid,
  setPaid,
  setIsPaid,
  isPaid,
  all,
  setAll,
  pending,
  setPending,
  isPending,
  setIsPending,
  voices,
  setIsDraft,
  isDraft,
  setDraft,
}) {
  return (
    <div className=" pt-32 h-auto px-7 py-10 sm:px-20 lg:mx-auto lg:w-11/12 lg:pt-24 w-full xl:w-[70rem] xl:mx-[auto]">
      <Head
        invoices={invoices}
        setAddnewinvoice={setAddnewinvoice}
        isDark={isDark}
        setPaid={setPaid}
        paid={paid}
        setIsPaid={setIsPaid}
        isPaid={isPaid}
        all={all}
        setAll={setAll}
        pending={pending}
        setIsPending={setIsPending}
        setPending={setPending}
        voices={voices}
        setDraft={setDraft}
        setIsDraft={setIsDraft}
        isPending={isPending}
        isDraft={isDraft}
      />
      <Invoicebody
        invoices={invoices}
        setEachinvoice={setEachinvoice}
        setDetinvoice={setDetinvoice}
        isDark={isDark}
      />
    </div>
  );
}

function Head({
  invoices,
  setAddnewinvoice,
  isDark,
  setPaid,
  paid,
  setIsPaid,
  isPaid,
  all,
  setAll,
  setPending,
  isPending,
  setIsPending,
  voices,
  setIsDraft,
  isDraft,
  setDraft,
}) {
  function handleAddnewinvoice() {
    setAddnewinvoice(true);
  }
  function handleall() {
    setAll(true);
    setIsPaid(false);
    setIsPending(false);
    setFilter(false);
    setIsDraft(false);
  }
  function handlepaid() {
    setIsPaid(true);
    setPaid((paid) =>
      voices.filter((voice) => voice.paid !== 0 && voice.draft !== 0)
    );
    setAll(false);
    setFilter(false);
    setIsPending(false);
    setIsDraft(false);
  }
  function handlepending() {
    setAll(false);
    setIsPaid(false);
    setIsPending(true);
    setFilter(false);
    setIsDraft(false);
    setPending((pending) => voices.filter((voice) => voice.paid === 0));
  }
  function handleDraft() {
    setAll(false);
    setIsPaid(false);
    setIsPending(false);
    setFilter(false);
    setIsDraft(true);
    setDraft((draft) => voices.filter((voice) => voice.draft === 0));
  }
  const [filter, setFilter] = useState(false);
  function handlefilter() {
    setFilter((filter) => !filter);
    console.log(filter);
  }
  return (
    <div className="flex justify-between">
      <div>
        <h1
          className={
            "text-3xl font-semibold  " +
            (!isDark ? "text-slate-700" : "text-white ")
          }
        >
          Invoices
        </h1>
        <p className="text-blue-700 mt-3">{invoices.length} invoices</p>
      </div>
      <div className="block lg:flex">
        <div className="lg:mt-6 lg:text-xl relative">
          <div className="flex cursor-pointer " onClick={handlefilter}>
            <p
              className={
                "big " +
                " text-slate-400 bg-transparent  outline-none ml-9 cursor-pointer"
              }
            >
              {all
                ? "All"
                : isPaid
                ? "Paid"
                : isPending
                ? "Pending"
                : isDraft
                ? "Draft"
                : "Filter "}
            </p>
            <FaAngleDown className="mt-2 ml-3 text-purple-500" />
          </div>
          <div
            className={
              (filter ? "block " : "hidden  ") +
              "absolute right-20 top-25  rounded-lg px-2 lg:-right-9 " +
              (!isDark
                ? "text-slate-100 bg-slate-500 p-2 w-23 border-2 border-slate-600  "
                : "text-slate-600 border-2 bg-white border-slate-300 p-2 w-23")
            }
            id="sub"
          >
            <p onClick={handleall} className="mb-2 cursor-pointer">
              All
            </p>
            <p onClick={handlepaid} className="mb-2 cursor-pointer">
              Paid
            </p>
            <p onClick={handlepending} className="mb-2 cursor-pointer">
              Pending
            </p>
            <p onClick={handleDraft} className="mb-2 cursor-pointer">
              Draft
            </p>
          </div>
        </div>

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

function Invoicebody({ invoices, setEachinvoice, setDetinvoice, isDark }) {
  return (
    <div>
      {invoices.length === 0 && (
        <p
          className={
            "text-center mt-32 text-xl " +
            (!isDark ? "text-slate-800" : "text-slate-200")
          }
        >
          No invoice at the moment
        </p>
      )}
      {invoices.map((invoice) => (
        <Body
          invoice={invoice}
          setEachinvoice={setEachinvoice}
          setDetinvoice={setDetinvoice}
          isDark={isDark}
          key={invoice.id}
        />
      ))}
    </div>
  );
}
function Body({ invoice, setEachinvoice, setDetinvoice, isDark }) {
  function handleEachinvoice() {
    setEachinvoice(true);
    setDetinvoice(invoice);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  return (
    <div
      onClick={handleEachinvoice}
      className={
        "mt-7 items-center hover:border-2 hover:border-purple-500 bg-slate-800 p-4 shadow-md shadow-slate-600 rounded-md cursor-pointer lg:flex lg:justify-between lg:py-10 lg:px-10 lg:text-2xl " +
        (!isDark && "bg-white shadow-md")
      }
    >
      <div className="flex justify-between lg:w-3/5 ">
        <div className="lg:flex lg:justify-between lg:w-3/5">
          <p className="text-slate-500 font-semibold">
            #
            <span
              className={
                "text-slate-400 tracking-wider " + (!isDark && "text-black")
              }
            >
              RT{invoice.id}
            </span>
          </p>
          <p className=" text-slate-500 text-base mt-7 lg:mt-0 lg:text-2xl">
            {invoice.invoicedate}
          </p>
        </div>
        <p className="text-slate-500 text-center">{invoice.clientname}</p>
      </div>
      <div className="flex justify-between lg:w-1/3">
        <p
          className={
            "font-semibold text-xl tracking-wider mt-2  lg:text-2xl lg:mt-3  " +
            (!isDark ? "text-slate-600" : "text-white")
          }
        >
          $ {invoice.itemstotal}
        </p>
        {invoice.paid === 0 && invoice.draft !== 0 ? (
          <div
            className="flex float-right  py-2 px-3 pb-3 text-red-400 rounded-lg"
            id="red"
          >
            <FaCircle className=" text-xs mt-3 lg:mt-4" />
            <p className=" ml-3 mt-1">Pending</p>
          </div>
        ) : invoice.draft === 0 && invoice.paid !== 0 ? (
          <div
            className="flex float-right text-slate-400 pb-2 py-1 px-3 rounded-lg"
            id="draft"
          >
            <FaCircle className=" text-xs mt-2" />
            <p className=" ml-3">Draft</p>
          </div>
        ) : (
          <div
            className="flex float-right text-green-500 py-1 px-3 rounded-lg"
            id="green"
          >
            <FaCircle className=" text-xs mt-2" />
            <p className="mt-0 ml-3">Paid</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Main;
