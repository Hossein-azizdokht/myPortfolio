import { Delete } from "@mui/icons-material";
import { Box, Button, Input, Slider } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import React, { useState } from "react";
import Select from "react-select";

const Relatives = (props) => {


  // -- form filter change handler --------------------------------
  const handleChange = (e, i) => {

    let { name, value } = e.target;
    let newData = [...props?.data];
    newData[i] = {
      ...newData[i],
      [name]: value,
    };
    props.abilityExChange(newData);
  };
  const handleSelectChange = (e, i, name) => {

    let cloneData = [...props?.data];
    cloneData[i] = { ...cloneData[i], [name]: e };
    props.abilityExChange(cloneData);
  };

  // -- Add row handler --------------------------------
  const handleAddFilter = () => {
    let newData = [...props?.data];
    props.abilityExChange([
      ...newData,
      {
        title: "",
        place: "",
        period: "",
        branch: "",
        skillScore: "",
        skillType: "",
        relationship: "",
        Proficiency: "",
        description: "",
      },
    ]);
  };
  // -- Remove handler --------------------------------
  const handleRemoveSpecificFilter = (i) => () => {
    let clonedData = [...props?.data];
    clonedData.splice(i, 1);
    props.abilityExChange(clonedData);
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
                    نام و نام خانوادگی
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
                  <label for="place" className="form-label">
                    کدملی
                  </label>
                  <Input
                    type="text"
                    name="place"
                    id="place"
                    autoComplete="off"
                    value={props.data[i]?.place}
                    onChange={(e) => handleChange(e, i)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="period" className="form-label">
                    نسبت
                  </label>
                  <Input
                    type="text"
                    name="period"
                    id="period"
                    autoComplete="off"
                    value={props.data[i]?.period}
                    onChange={(e) => handleChange(e, i)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3 relative">
                  <label for="fatherName" className="form-label">
                    تاریخ تولد
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                    <DatePicker
                      value={props.data.birthDate}
                      onChange={(e) => props.handleChange("birthDate", e)}
                      className={`form-control
                        }`}
                      renderInput={({ error: inputError, ...params }) => {
                        return <input {...params} />;
                      }}
                      defaultValue=""
                    />
                  </LocalizationProvider>
                </div>
              </div>
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="skillScore " className="form-label">
                    پوشش بیمه تکمیلی
                  </label>
                  <Select
                    name="skillScore"
                    id="skillScore"
                    placeholder=""
                    getOptionLabel={(option) => option.value}
                    getOptionValue={(option) => option.id}
                    onChange={(e) => handleSelectChange(e, i, "skillScore")}
                    value={props.data[i].skillScore}
                    options={[
                      {
                        id: 1,
                        label: "ضعیف",
                        value: "ضعیف",
                      },
                      {
                        id: 2,
                        label: "متوسط",
                        value: "متوسط",
                      },
                      {
                        id: 3,
                        label: "خوب",
                        value: "خوب",
                      },
                      {
                        id: 4,
                        label: "خیلی خوب",
                        value: "خیلی خوب",
                      },
                      {
                        id: 5,
                        label: "عالی",
                        value: "عالی",
                      },
                    ]}
                    styles={{ menu: (base) => ({ ...base, zIndex: 99 }) }}
                  />
                </div>
              </div>
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="skillType " className="form-label">
                    شماره تماس
                  </label>
                  <Input
                    type="text"
                    name="skillType"
                    id="skillType"
                    autoComplete="off"
                    value={props.data[i]?.place}
                    onChange={(e) => handleChange(e, i)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="relationship" className="form-label">
                    وضعیت
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
                        label: "تحت تکلف",
                        value: "تحت تکلف",
                      },
                      {
                        id: 2,
                        label: "غیر تحت تکلف",
                        value: "غیر تحت تکلف",
                      }
                    ]}
                    styles={{ menu: (base) => ({ ...base, zIndex: 99 }) }}
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
              {5 === props.steps.length - 1 ? 'تایید اطلاعات' : 'مرحله بعد'}
            </button>
          </div>
        </Box>
      </form>
    </div>
  );
};
export default Relatives;
