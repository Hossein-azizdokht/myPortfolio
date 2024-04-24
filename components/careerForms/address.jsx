import { Delete } from "@mui/icons-material";
import { Box, Button, Input, Slider } from "@mui/material";
import React, { useState } from "react";
import Select from "react-select";

const Address = (props) => {


  // -- form filter change handler --------------------------------
  const handleChange = (e, i) => {

    let { name, value } = e.target;
    let newData = [...props?.data];
    newData[i] = {
      ...newData[i],
      [name]: value,
    };
    props.addressExChange(newData);
  };
  const handleSelectChange = (e, i, name) => {

    let cloneData = [...props?.data];
    cloneData[i] = { ...cloneData[i], [name]: e };
    props.abilityExChange(cloneData);
  };

  // -- Add row handler --------------------------------
  const handleAddFilter = () => {
    let newData = [...props?.data];
    props.addressExChange([
      ...newData,
      {
        title: "",
        phone: "",
        zipCode: "",
        addressType: "",
        skillScore: "",
        Country: "",
        Province: "",
        City: "",
        address: "",
      },
    ]);
  };
  // -- Remove handler --------------------------------
  const handleRemoveSpecificFilter = (i) => () => {
    let clonedData = [...props?.data];
    clonedData.splice(i, 1);
    props.addressExChange(clonedData);
  };
  // -- search submit handler --------------------------------
  const submitSearch = () => {

    const f = rows.filter((s) =>
      filters.every((a) =>
        a.if === 10
          ? s[a.name] > a.value
          : a.if === 20
            ? s[a.name] < a.value
            : a.if === 30
              ? s[a.name] == a.value
              : false
      )
    );
  };


  function handleNext(e) {
    e.preventDefault();
    props.handleNext()

  }
  function handleBack(e) {
    e.preventDefault()
    props.handleBack()
    // props.handleNext;
  }



  return (

    <div>
      <form className="p-4 mb-4">
        {props.data?.map((item, i) => (
          <div className="relative" key={i}>
            <span className="inline-flex items-center rounded-md rounded-l-[100px] bg-blue-50 px-3 py-2 top-[3px] absolute right-[-55px] text-xs text-[18px] text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {i + 1}
            </span>
            <div className="row">
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="title" className="form-label">
                    عنوان
                  </label>
                  <Input
                    name="title"
                    value={props.data[i]?.title}
                    onChange={(e) => handleChange(e, i)}
                    type="text"
                    className="form-control"
                    id="title"
                    aria-describedby="title"
                  />
                </div>
              </div>
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="phone" className="form-label">
                    تلفن ثابت
                  </label>
                  <Input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={props.data[i]?.phone}
                    onChange={(e) => handleChange(e, i)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="zipCode" className="form-label">
                    كدپستي
                  </label>
                  <Input
                    type="text"
                    name="zipCode"
                    id="zipCode"
                    autoComplete="off"
                    value={props.data[i]?.zipCode}
                    onChange={(e) => handleChange(e, i)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="addressType " className="form-label">
                    نوع آدرس
                  </label>
                  <Select
                    name="addressType"
                    id="addressType"
                    placeholder=""
                    getOptionLabel={(option) => option.value}
                    getOptionValue={(option) => option.id}
                    classNamePrefix="react-select"
                    onChange={(e) => handleSelectChange(e, i, "addressType")}
                    value={props.data[i].addressType}
                    options={[
                      {
                        id: 1,
                        label: "منزل",
                        value: "منزل",
                      },
                      {
                        id: 2,
                        label: "محل كار",
                        value: "محل كار",
                      },
                      {
                        id: 3,
                        label: "ساير",
                        value: "ساير",
                      },

                    ]}
                    styles={{ menu: (base) => ({ ...base, zIndex: 99 }) }}
                  />
                </div>
              </div>

            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="mb-3 relative">
                  <label for="Country" className="form-label">
                    کشور
                  </label>
                  <Input
                    name="Country"
                    value={props.data[i]?.Country}
                    onChange={(e) => handleChange(e, i)}
                    type="text"
                    className={`form-control`}
                    id="Country"
                  />

                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3 relative">
                  <label for="Province" className="form-label">
                    استان
                  </label>
                  <Input
                    name="Province"
                    value={props.data[i]?.Province}
                    onChange={(e) => handleChange(e, i)}
                    type="text"
                    className={`form-control`}
                    id="Province"
                  />

                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3 relative">
                  <label for="City" className="form-label">
                    شهر
                  </label>
                  <Input
                    name="City"
                    value={props.data[i]?.City}
                    onChange={(e) => handleChange(e, i)}
                    type="text"
                    className={`form-control`}
                    id="City"
                  />

                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-9">
                <div className="mb-3 relative">
                  <label for="address" className="form-label">
                    آدرس كامل{" "}
                  </label>
                  <Input
                    name="address"
                    value={props.data[i]?.address}
                    onChange={(e) => handleChange(e, i)}
                    type="text"
                    className="form-control"
                    id="address"
                  />
                </div>
              </div>
              {props.data.length > 1 && (
                <div className="col-md-1 column ">
                  <Button color="error" onClick={handleRemoveSpecificFilter(i)}>
                    <Delete />
                  </Button>
                </div>
              )}
            </div>
            <hr className={i == props.data.length - 1 ? "!mb-[-4px]" : ""} />
          </div>
        ))}
        <div className="row">
          <div className="col-md-12 column">
            <Button
              color="warning"
              className=" bg-slate-50 border-dashed border-slate-300 text-slate-400 w-100"
              disableElevation
              variant="outlined"
              onClick={handleAddFilter}
            >
              افزودن
            </Button>
          </div>
        </div>
        <Box sx={{ mt: 2, mb: 2 }}>
          <div>
            <button className='btn btn-light' disabled={1 === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
              بازگشت به مرحله قبل
            </button>
            <button type="submit" onClick={handleNext} className="btn btn-primary mr-2">
              {6 === props.steps.length - 1 ? 'تایید اطلاعات' : 'مرحله بعد'}
            </button>
          </div>
        </Box>
      </form>
    </div>
  );
};
export default Address;
