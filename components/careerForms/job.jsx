import { Delete } from "@mui/icons-material";
import { Box, Button, Input } from "@mui/material";
import React, { useState } from "react";
import Select from "react-select";
import LocationDropdowns from "../locationDropdowns/LocationDropdowns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";

const Job = (props) => {
  const [addressData, setAddressData] = useState({});
  console.log(props);
  // -- form filter change handler --------------------------------
  const handleChange = (e, i) => {
    debugger;
    let { name, value } = e.target;
    let newData = [...props?.data];
    newData[i] = {
      ...newData[i],
      [name]: value,
    };
    props.jobExChange(newData);
  };
  const handleSelectChange = (e, i, name) => {
    debugger;
    let cloneData = [...props?.data];
    cloneData[i] = { ...cloneData[i], [name]: e };
    props.jobExChange(cloneData);
  };

  // -- Add row handler --------------------------------
  const handleAddFilter = () => {
    let newData = [...props?.data];
    props.jobExChange([
      ...newData,
      {
        company: "",
        position: "",
        contractType: "",
        price: "",
        startDate: "",
        endDate: "",
        relationship: "",
        Country: "",
        Province: "",
        City: "",
        employer: "",
        phoneEmployer: "",
        leavingWork: "",
        description: "",
      },
    ]);
  };
  // -- Remove handler --------------------------------
  const handleRemoveSpecificFilter = (i) => () => {
    let clonedData = [...props?.data];
    clonedData.splice(i, 1);
    props.jobExChange(clonedData);
  };
  // -- search submit handler --------------------------------
  const submitSearch = () => {
    debugger;
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
            {console.log(props.data[i].contractType)}
            <span className="inline-flex items-center rounded-md rounded-l-[100px] bg-blue-50 px-3 py-2 top-[3px] absolute right-[-55px] text-xs text-[18px] text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {i + 1}
            </span>
            <div className="row">
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="company" className="form-label">
                    نام شرکت / سازمان
                  </label>
                  <Input
                    name="company"
                    value={props.data[i]?.company}
                    onChange={(e) => handleChange(e, i)}
                    type="text"
                    className="form-control"
                    id="company"
                    aria-describedby="company"
                  />
                </div>
              </div>
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="position" className="form-label">
                    پست سازمانی
                  </label>
                  <Input
                    type="text"
                    name="position"
                    id="position"
                    autoComplete="off"
                    value={props.data[i]?.position}
                    onChange={(e) => handleChange(e, i)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="contractType" className="form-label">
                    نوع قرارداد
                  </label>
                  <Select
                    name="contractType"
                    id="contractType"
                    placeholder=""
                    onChange={(e) => handleSelectChange(e, i, "contractType")}
                    value={props.data[i].contractType}
                    options={[
                      {
                        id: 1,
                        label: " بدون قرارداد",
                        value: " بدون قرارداد",
                      },
                      {
                        id: 2,
                        label: "پروژه ای",
                        value: "پروژه ای",
                      },
                      {
                        id: 3,
                        label: " قرارداد ساعتی",
                        value: " قرارداد ساعتی",
                      },
                      {
                        id: 4,
                        label: "قرارداد معین",
                        value: "قرارداد معین",
                      },
                      {
                        id: 5,
                        label: "قرارداد موقت",
                        value: "قرارداد موقت",
                      },
                      {
                        id: 6,
                        label: "استخدام ",
                        value: "استخدام ",
                      },
                    ]}
                    styles={{ menu: (base) => ({ ...base, zIndex: 99 }) }}
                  />
                </div>
              </div>
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="price" className="form-label">
                    مبلغ قرارداد (تومان)
                  </label>
                  <Input
                    placeholder=""
                    name="price"
                    id="price"
                    value={props.data[i]?.price}
                    onChange={(e) => handleChange(e, i)}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="startDate" className="form-label">
                    تاریخ شروع
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                    <DatePicker
                      className="form-control"
                      onChange={(e) => handleSelectChange(e, i, "startDate")}
                      value={props.data[i].startDate}
                      defaultValue={null}
                    />
                  </LocalizationProvider>
                  {/* <Input
                    name="startDate"
                    id="startDate"
                    value={props.data[i]?.startDate}
                    onChange={(e) => handleChange(e, i)}
                    className="form-control"
                  /> */}
                </div>
              </div>
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="endDate" className="form-label">
                    تاریخ پایان
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                    <DatePicker
                      className="form-control"
                      defaultValue={null}
                      onChange={(e) => handleSelectChange(e, i, "endDate")}
                      value={props.data[i].endDate}
                    />
                  </LocalizationProvider>
                  {/* <Input
                    name="endDate"
                    id="endDate"
                    value={props.data[i]?.endDate}
                    onChange={(e) => handleChange(e, i)}
                    className="form-control"
                  /> */}
                </div>
              </div>
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="relationship" className="form-label">
                    ارتباط با شغل فعلی
                  </label>
                  <Select
                    name="relationship"
                    id="relationship"
                    placeholder=""
                    getOptionLabel={(option) => option.value}
                    getOptionValue={(option) => option.id}
                    onChange={(e) => handleSelectChange(e, i, "relationship")}
                    value={props.data[i].relationship}
                    options={[
                      {
                        id: 1,
                        label: " بدون ارتباط",
                        value: " بدون ارتباط",
                      },
                      {
                        id: 2,
                        label: " تا حدودی مرتبط",
                        value: " تا حدودی مرتبط",
                      },
                      {
                        id: 3,
                        label: "مرتبط",
                        value: "مرتبط",
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
            <hr />
            <div className="row">
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="employer" className="form-label">
                    نام کارفرما
                  </label>
                  <Input
                    name="employer"
                    id="employer"
                    value={props.data[i]?.employer}
                    onChange={(e) => handleChange(e, i)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="phoneEmployer" className="form-label">
                    شماره تماس کارفرما
                  </label>
                  <Input
                    name="phoneEmployer"
                    id="phoneEmployer"
                    value={props.data[i]?.phoneEmployer}
                    onChange={(e) => handleChange(e, i)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3 relative">
                  <label for="leavingWork" className="form-label">
                    علت ترک کار{" "}
                  </label>
                  <Input
                    name="leavingWork"
                    value={props.data[i]?.leavingWork}
                    onChange={(e) => handleChange(e, i)}
                    type="text"
                    className="form-control"
                    id="leavingWork"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3 relative">
                  <label for="description" className="form-label">
                    توضیحات{" "}
                  </label>
                  <Input
                    name="description"
                    value={props.data[i]?.description}
                    onChange={(e) => handleChange(e, i)}
                    type="text"
                    className="form-control"
                    id="description"
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
              {2 === props.steps.length - 1 ? 'تایید اطلاعات' : 'مرحله بعد'}
            </button>
          </div>
        </Box>
      </form>
    </div>
  );
};
export default Job;
