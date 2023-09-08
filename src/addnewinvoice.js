import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
function Addnewinvoice({
  invoices,
  setInvoices,
  setAddnewinvoice,
  isDark,
  voices,
  setVoices,
}) {
  return (
    <div
      className={
        "bg-slate-900 h-auto px-10 py-10 absolute top-20 w-full lg:top-0 lg:left-24 lg:w-3/5 " +
        (!isDark && "bg-white")
      }
    >
      <h1 className={"text-3xl  " + (!isDark ? "text-black" : "text-white")}>
        New Invoice
      </h1>
      <Newinvoice
        setInvoices={setInvoices}
        invoices={invoices}
        setAddnewinvoice={setAddnewinvoice}
        isDark={isDark}
        voices={voices}
        setVoices={setVoices}
      />
    </div>
  );
}

function Newinvoice({
  setInvoices,
  invoices,
  setAddnewinvoice,
  isDark,
  setVoices,
  voices,
}) {
  const basicSchema = yup.object().shape({
    address: yup.string().required("Required"),
    city: yup.string().required("Required"),
    postcode: yup.number().required("Required"),
    country: yup.string().required("Required"),
    clientname: yup.string().required("Enter Client name"),
    clientemail: yup.string().required("Enter Client email"),
    clientaddress: yup.string().required("Client Address"),
    clientcity: yup.string().required("Client City"),
    clientpostcode: yup.number().required("Client Postcode"),
    clientcountry: yup.string().required("Client Country"),
    invoicedate: yup.string().required("Required"),
    description: yup.string().required("Required"),
    itemname: yup.string().required("Required"),
    itemsquantity: yup.number().required("Required"),
    itemsprice: yup.number().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("submitted");
    console.log(values);
    setInvoices([values, ...invoices]);
    setVoices([values, ...voices]);
    console.log(invoices);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setAddnewinvoice(false);
  };
  function handledraft() {
    values.paid = values.paid + 5;
    handleSubmit();
  }
  function handleSave() {
    values.draft = values.draft + 5;
    handleSubmit();
  }
  const { values, handleBlur, handleChange, errors, handleSubmit, touched } =
    useFormik({
      initialValues: {
        address: "",
        city: "",
        postcode: "",
        country: "",
        clientname: "",
        clientemail: "",
        clientaddress: "",
        clientcity: "",
        clientpostcode: "",
        clientcountry: "",
        invoicedate: "",
        payment: "",
        description: "",
        itemname: "",
        itemsquantity: "",
        itemsprice: "",
        itemstotal: "",
        id: Math.floor(Math.random() * 66666),
        paid: 0,
        draft: 0,
      },
      //validationSchema: basicSchema,
      onSubmit,
    });

  function handleDiscardnewinvoice() {
    setAddnewinvoice(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <article>
          <p className="text-blue-800 mt-5 mb-4">Bill Form</p>
          <small className="">
            <label className="text-slate-400 text-lg">Street Address</label>
            <input
              type="text"
              value={values.address}
              id="address"
              onBlur={handleBlur}
              onChange={handleChange}
              className={
                "w-full h-10 rounded-lg mt-2 " +
                (errors.address && touched.address ? "error" : null) +
                (!isDark
                  ? "bg-white border-2 border-slate-400"
                  : " bg-slate-800")
              }
            />
            {errors.address && touched.address && (
              <p className="text-red-300 text-xs">{errors.address}</p>
            )}
          </small>
          <aside className="mt-3 flex justify-between flex-wrap">
            <smalll className="w-2/5">
              <label className="text-slate-400 text-base">City</label>
              <br></br>
              <input
                type="text"
                value={values.city}
                id="city"
                onBlur={handleBlur}
                onChange={handleChange}
                className={
                  "w-full  h-10 rounded-lg mt-2 " +
                  (errors.city && touched.city ? "error" : null) +
                  (!isDark
                    ? "bg-white border-2 border-slate-400"
                    : " bg-slate-800")
                }
              />
              {errors.city && touched.city && (
                <p className="text-red-300 text-xs">{errors.city}</p>
              )}
            </smalll>
            <smalll className="w-2/5">
              <label className="text-slate-400 text-base">Post Code</label>
              <br></br>
              <input
                type="number"
                value={values.postcode}
                id="postcode"
                onBlur={handleBlur}
                onChange={handleChange}
                className={
                  "w-full h-10 rounded-lg mt-2 " +
                  (errors.postcode && touched.postcode ? "error" : null) +
                  (!isDark
                    ? "bg-white border-2 border-slate-400"
                    : " bg-slate-800")
                }
              />
              {errors.postcode && touched.postcode && (
                <p className="text-red-300 text-xs">{errors.postcode}</p>
              )}
            </smalll>
            <smalll className="w-2/5">
              <label className="text-slate-400 text-base">Country</label>
              <br></br>
              <input
                type="text"
                value={values.country}
                id="country"
                onBlur={handleBlur}
                onChange={handleChange}
                className={
                  "w-full  h-10 rounded-lg mt-2 " +
                  (errors.country && touched.country ? "error" : null) +
                  (!isDark
                    ? "bg-white border-2 border-slate-400"
                    : " bg-slate-800")
                }
              />
              {errors.country && touched.country && (
                <p className="text-red-300 text-xs">{errors.country}</p>
              )}
            </smalll>
          </aside>
        </article>
        <article>
          <p className="text-blue-800 mt-5 mb-4">Bill To</p>
          <smalll>
            <label className="text-slate-400 text-lg">Client's Name</label>
            <input
              type="text"
              value={values.clientname}
              id="clientname"
              onBlur={handleBlur}
              onChange={handleChange}
              className={
                "w-full  h-10 rounded-lg mt-2 mb-5 " +
                (errors.clientname && touched.clientname ? "error" : null) +
                (!isDark
                  ? "bg-white border-2 border-slate-400"
                  : " bg-slate-800")
              }
            />
            {errors.clientname && touched.clientname && (
              <p className="text-red-300 text-xs text-right">
                {errors.clientname}
              </p>
            )}
          </smalll>
          <small className="">
            <label className="text-slate-400 text-lg">Client's Email</label>
            <input
              type="email"
              value={values.clientemail}
              id="clientemail"
              onBlur={handleBlur}
              onChange={handleChange}
              className={
                "w-full  h-10 rounded-lg mt-2 mb-5 " +
                (errors.clientemail && touched.clientemail ? "error" : null) +
                (!isDark
                  ? "bg-white border-2 border-slate-400"
                  : " bg-slate-800")
              }
            />
            {errors.clientemail && touched.clientemail && (
              <p className="text-red-300 text-xs text-right">
                {errors.clientemail}
              </p>
            )}
          </small>
          <small className="">
            <label className="text-slate-400 text-lg">Street Address</label>
            <input
              type="text"
              value={values.clientaddress}
              id="clientaddress"
              onBlur={handleBlur}
              onChange={handleChange}
              className={
                "w-full h-10 rounded-lg mt-2 mb-5 " +
                (errors.clientaddress && touched.clientaddress
                  ? "error"
                  : null) +
                (!isDark
                  ? "bg-white border-2 border-slate-400"
                  : " bg-slate-800")
              }
            />
            {errors.clientaddress && touched.clientaddress && (
              <p className="text-red-300 text-xs text-right">
                {errors.clientaddress}
              </p>
            )}
          </small>
          <aside className="mt-3 flex justify-between flex-wrap">
            <smalll className="w-2/5">
              <label className="text-slate-400 text-base">City</label>
              <br></br>
              <input
                type="text"
                value={values.clientcity}
                id="clientcity"
                onBlur={handleBlur}
                onChange={handleChange}
                className={
                  "w-full h-10 rounded-lg mt-2 " +
                  (errors.clientcity && touched.clientcity ? "error" : null) +
                  (!isDark
                    ? "bg-white border-2 border-slate-400"
                    : " bg-slate-800")
                }
              />
              {errors.clientcity && touched.clientcity && (
                <p className="text-red-300 text-xs text-right">
                  {errors.clientcity}
                </p>
              )}
            </smalll>
            <smalll className="w-2/5">
              <label className="text-slate-400 text-base">Post Code</label>
              <br></br>
              <input
                type="number"
                value={values.clientpostcode}
                id="clientpostcode"
                onBlur={handleBlur}
                onChange={handleChange}
                className={
                  "w-full  h-10 rounded-lg mt-2 " +
                  (errors.clientpostcode && touched.clientpostcode
                    ? "error"
                    : null) +
                  (!isDark
                    ? "bg-white border-2 border-slate-400"
                    : " bg-slate-800")
                }
              />
              {errors.clientpostcode && touched.clientpostcode && (
                <p className="text-red-300 text-xs text-right">
                  {errors.clientpostcode}
                </p>
              )}
            </smalll>
            <smalll className="w-2/5 mt-4">
              <label className="text-slate-400 text-base">Country</label>
              <br></br>
              <input
                type="text"
                value={values.clientcountry}
                id="clientcountry"
                onBlur={handleBlur}
                onChange={handleChange}
                className={
                  "w-full  h-10 rounded-lg mt-2 " +
                  (errors.clientcountry && touched.clientcountry
                    ? "error"
                    : null) +
                  (!isDark
                    ? "bg-white border-2 border-slate-400"
                    : " bg-slate-800")
                }
              />
              {errors.clientcountry && touched.clientcountry && (
                <p className="text-red-300 text-xs text-right">
                  {errors.clientcountry}
                </p>
              )}
            </smalll>
          </aside>
          <aside className="mt-3 flex justify-between mb-4">
            <smalll className="w-2/5">
              <label className="text-slate-400 text-base">Invoice Date</label>
              <br></br>
              <input
                type="date"
                value={values.invoicedate}
                id="invoicedate"
                onBlur={handleBlur}
                onChange={handleChange}
                className={
                  "w-full  h-10 rounded-lg mt-2 " +
                  (errors.invoicedate && touched.invoicedate ? "error" : null) +
                  (!isDark
                    ? "bg-white border-2 border-slate-400"
                    : " bg-slate-800")
                }
              />
              {errors.invoicedate && touched.invoicedate && (
                <p className="text-red-300 text-xs text-right">
                  {errors.invoicedate}
                </p>
              )}
            </smalll>
            <smalll className="w-2/5">
              <label className="text-slate-400 text-base">Payment Terms</label>
              <br></br>
              <select
                type="text"
                value={values.payment}
                id="payment"
                onBlur={handleBlur}
                onChange={handleChange}
                className={
                  "w-full  h-10 rounded-lg mt-2 " +
                  (errors.payment && touched.payment ? "error" : null) +
                  (!isDark
                    ? "bg-white border-2 border-slate-400 text-black"
                    : " bg-slate-800 text-white")
                }
              >
                <option>Next 7 days</option>
                <option>Next 20 days</option>
                <option>Next 30 days</option>
              </select>
              {errors.payment && touched.payment && (
                <p className="text-red-300 text-xs text-right">
                  {errors.payment}
                </p>
              )}
            </smalll>
          </aside>
          <small className="">
            <label className="text-slate-400 text-lg">
              Project Description
            </label>
            <input
              type="text"
              value={values.description}
              id="description"
              onBlur={handleBlur}
              onChange={handleChange}
              className={
                "w-full  h-10 rounded-lg mt-2 mb-5 " +
                (errors.description && touched.description ? "error" : null) +
                (!isDark
                  ? "bg-white border-2 border-slate-400"
                  : " bg-slate-800")
              }
            />
            {errors.description && touched.description && (
              <p className="text-red-300 text-xs text-right">
                {errors.description}
              </p>
            )}
          </small>
        </article>
        <article>
          <h1
            className={
              "text-3xl mb-4 " + (!isDark ? "text-black" : "text-white")
            }
          >
            Item List
          </h1>
          <small className="">
            <label className="text-slate-400 text-lg ">Item Name</label>
            <input
              type="text"
              value={values.itemname}
              id="itemname"
              onBlur={handleBlur}
              onChange={handleChange}
              className={
                "w-full  h-10 rounded-lg mt-2 mb-5 " +
                (errors.itemname && touched.itemname ? "error" : null) +
                (!isDark
                  ? "bg-white border-2 border-slate-400"
                  : " bg-slate-800")
              }
            />
            {errors.itemname && touched.itemname && (
              <p className="text-red-300 text-xs text-right">
                {errors.itemname}
              </p>
            )}
          </small>
          <aside className="mt-3 flex justify-between flex-wrap">
            <smalll className="w-3/12">
              <label className="text-slate-400 text-base">Qty</label>
              <br></br>
              <input
                type="number"
                value={values.itemsquantity}
                id="itemsquantity"
                onBlur={handleBlur}
                onChange={handleChange}
                className={
                  "w-full  h-10 rounded-lg mt-2 " +
                  (errors.itemsquantity && touched.itemsquantity
                    ? "error"
                    : null) +
                  (!isDark
                    ? "bg-white border-2 border-slate-400"
                    : " bg-slate-800")
                }
              />
              {errors.itemsquantity && touched.itemsquantity && (
                <p className="text-red-300 text-xs text-right">
                  {errors.itemsquantity}
                </p>
              )}
            </smalll>
            <smalll className="w-3/12">
              <label className="text-slate-400 text-base">Price</label>
              <br></br>
              <input
                type="number"
                value={values.itemsprice}
                id="itemsprice"
                onBlur={handleBlur}
                onChange={handleChange}
                className={
                  "w-full  h-10 rounded-lg mt-2 " +
                  (errors.itemsprice && touched.itemsprice ? "error" : null) +
                  (!isDark
                    ? "bg-white border-2 border-slate-400"
                    : " bg-slate-800")
                }
              />
              {errors.itemsprice && touched.itemsprice && (
                <p className="text-red-300 text-xs text-right">
                  {errors.itemsprice}
                </p>
              )}
            </smalll>
            <smalll className="w-3/12 ">
              <label className="text-slate-400 text-base">Total</label>
              <br></br>
              <input
                type="text"
                value={
                  (values.itemstotal = values.itemsquantity * values.itemsprice)
                }
                id="itemstotal"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="$ 99.00"
                className={
                  "w-full  h-10 rounded-lg mt-2 pl-3 " +
                  (!isDark
                    ? "bg-white border-2 border-slate-400"
                    : " bg-slate-800")
                }
              />
            </smalll>
          </aside>
          <button
            className={
              " cursor-pointer w-full mt-10 py-4 rounded-full text-slate-300 hover:bg-slate-400" +
              (!isDark
                ? "bg-white border-2 border-slate-400 text-slate-500 hover:bg-slate-700"
                : " bg-slate-700")
            }
          >
            +Add New Item
          </button>
        </article>
        <div className="mt-7 sm:flex sm:justify-between">
          <button
            onClick={handleDiscardnewinvoice}
            className=" cursor-pointer py-3 px-5 bg-white border-2 hover:bg-slate-800 border-slate-400 bg-white text-slate-600 text-sm rounded-full lg:text-lg lg:py-2"
          >
            Discard
          </button>
          <div className="flex mt-4 items-center">
            <button
              onClick={handledraft}
              id=""
              className={
                "py-3 px-5  rounded-full mr-2 cursor-pointer hover:bg-slate-200 text-slate-400 " +
                (!isDark
                  ? "bg-white border-2 border-slate-400 hover:bg-slate-800"
                  : "bg-slate-800")
              }
            >
              Save as Draft
            </button>
            <button
              onClick={handleSave}
              className={
                "py-3 px-5  rounded-full cursor-pointer hover:bg-slate-600 " +
                (!isDark
                  ? "bg-white bg-white border-2 border-slate-400 hover:bg-purple-600"
                  : "bg-purple-600")
              }
            >
              Save and Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Addnewinvoice;
