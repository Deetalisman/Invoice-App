import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
function Addnewinvoice({ invoices, setInvoices, setAddnewinvoice }) {
  return (
    <div className="bg-slate-900 h-auto px-10 py-10 absolute top-20 w-full lg:top-0 lg:left-24 lg:w-fit">
      <h1 className="text-3xl">New Invoice</h1>
      <Newinvoice
        setInvoices={setInvoices}
        invoices={invoices}
        setAddnewinvoice={setAddnewinvoice}
      />
    </div>
  );
}

function Newinvoice({ setInvoices, invoices, setAddnewinvoice }) {
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
    payment: yup.string().required("Required"),
    description: yup.string().required("Required"),
    itemname: yup.string().required("Required"),
    itemsquantity: yup.number().required("Required"),
    itemsprice: yup.number().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("submitted");
    console.log(values);
    setInvoices([values, ...invoices]);
    console.log(invoices);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setAddnewinvoice(false);
  };
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
      },
      validationSchema: basicSchema,
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
                "w-full bg-slate-800 h-10 rounded-lg mt-2 " +
                (errors.address && touched.address ? "error" : null)
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
                  "w-full bg-slate-800 h-10 rounded-lg mt-2 " +
                  (errors.city && touched.city ? "error" : null)
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
                  "w-full bg-slate-800 h-10 rounded-lg mt-2 " +
                  (errors.postcode && touched.postcode ? "error" : null)
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
                  "w-full bg-slate-800 h-10 rounded-lg mt-2 " +
                  (errors.country && touched.country ? "error" : null)
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
                "w-full bg-slate-800 h-10 rounded-lg mt-2 mb-5 " +
                (errors.clientname && touched.clientname ? "error" : null)
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
                "w-full bg-slate-800 h-10 rounded-lg mt-2 mb-5 " +
                (errors.clientemail && touched.clientemail ? "error" : null)
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
                "w-full bg-slate-800 h-10 rounded-lg mt-2 mb-5 " +
                (errors.clientaddress && touched.clientaddress ? "error" : null)
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
                  "w-full bg-slate-800 h-10 rounded-lg mt-2 " +
                  (errors.clientcity && touched.clientcity ? "error" : null)
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
                  "w-full bg-slate-800 h-10 rounded-lg mt-2 " +
                  (errors.clientpostcode && touched.clientpostcode
                    ? "error"
                    : null)
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
                  "w-full bg-slate-800 h-10 rounded-lg mt-2 " +
                  (errors.clientcountry && touched.clientcountry
                    ? "error"
                    : null)
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
                type="text"
                value={values.invoicedate}
                id="invoicedate"
                onBlur={handleBlur}
                onChange={handleChange}
                className={
                  "w-full bg-slate-800 h-10 rounded-lg mt-2 " +
                  (errors.invoicedate && touched.invoicedate ? "error" : null)
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
              <input
                type="text"
                value={values.payment}
                id="payment"
                onBlur={handleBlur}
                onChange={handleChange}
                className={
                  "w-full bg-slate-800 h-10 rounded-lg mt-2 " +
                  (errors.payment && touched.payment ? "error" : null)
                }
              />
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
                "w-full bg-slate-800 h-10 rounded-lg mt-2 mb-5 " +
                (errors.description && touched.description ? "error" : null)
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
          <h1 className="text-3xl mb-4">Item List</h1>
          <small className="">
            <label className="text-slate-400 text-lg ">Item Name</label>
            <input
              type="text"
              value={values.itemname}
              id="itemname"
              onBlur={handleBlur}
              onChange={handleChange}
              className={
                "w-full bg-slate-800 h-10 rounded-lg mt-2 mb-5 " +
                (errors.itemname && touched.itemname ? "error" : null)
              }
            />
            {errors.itemname && touched.itemname && (
              <p className="text-red-300 text-xs text-right">
                {errors.itemname}
              </p>
            )}
          </small>
          <aside className="mt-3 flex justify-between flex-wrap">
            <smalll className="w-2/5">
              <label className="text-slate-400 text-base">Qty</label>
              <br></br>
              <input
                type="number"
                value={values.itemsquantity}
                id="itemsquantity"
                onBlur={handleBlur}
                onChange={handleChange}
                className={
                  "w-full bg-slate-800 h-10 rounded-lg mt-2 " +
                  (errors.itemsquantity && touched.itemsquantity
                    ? "error"
                    : null)
                }
              />
              {errors.itemsquantity && touched.itemsquantity && (
                <p className="text-red-300 text-xs text-right">
                  {errors.itemsquantity}
                </p>
              )}
            </smalll>
            <smalll className="w-2/5">
              <label className="text-slate-400 text-base">Price</label>
              <br></br>
              <input
                type="number"
                value={values.itemsprice}
                id="itemsprice"
                onBlur={handleBlur}
                onChange={handleChange}
                className={
                  "w-full bg-slate-800 h-10 rounded-lg mt-2 " +
                  (errors.itemsprice && touched.itemsprice ? "error" : null)
                }
              />
              {errors.itemsprice && touched.itemsprice && (
                <p className="text-red-300 text-xs text-right">
                  {errors.itemsprice}
                </p>
              )}
            </smalll>
            <smalll className="w-2/5 mt-2">
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
                className="w-full bg-slate-800 h-10 rounded-sm mt-2 pl-3"
              />
            </smalll>
          </aside>
          <button className=" cursor-pointer w-full bg-slate-700 mt-5 py-4 rounded-full text-slate-300">
            +Add New Item
          </button>
        </article>
        <div className="mt-7 sm:flex sm:justify-between">
          <button
            onClick={handleDiscardnewinvoice}
            className=" cursor-pointer py-3 px-5 bg-white text-slate-600 text-sm rounded-full lg:text-lg lg:py-2"
          >
            Discard
          </button>
          <div className="flex mt-4 items-center">
            <button className="py-3 px-5 bg-slate-700 rounded-full mr-2 cursor-pointer">
              Save as Draft
            </button>
            <button
              onClick={handleSubmit}
              className="py-3 px-5 bg-purple-600 rounded-full cursor-pointer"
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
