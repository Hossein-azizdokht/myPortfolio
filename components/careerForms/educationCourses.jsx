import { Delete } from "@mui/icons-material";
import { Box, Button, Input } from "@mui/material";
import React, { useState } from "react";
import Select from "react-select";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";

const EducationCourses = (props) => {


  // -- form filter change handler --------------------------------
  const handleChange = (e, i) => {

    let { name, value } = e.target;
    let newData = [...props?.data];
    newData[i] = {
      ...newData[i],
      [name]: value,
    };
    props.coursesExChange(newData);
  };
  const handleSelectChange = (e, i, name) => {

    let cloneData = [...props?.data];
    cloneData[i] = { ...cloneData[i], [name]: e };
    props.coursesExChange(cloneData);
  };

  // -- Add row handler --------------------------------
  const handleAddFilter = () => {
    let newData = [...props?.data];
    props.coursesExChange([
      ...newData,
      {
        courses: "",
        place: "",
        coursesType: "",
        CourseLevel: "",
        startDate: "",
        degreeDate: "",
        trainingType: "",
        certificateType: "",
        certificateDate: "",
        duration: "",
        Score: "",
        relationship: "",
        Country: "",
        Province: "",
        City: "",
        description: "",
      },
    ]);
  };
  // -- Remove handler --------------------------------
  const handleRemoveSpecificFilter = (i) => () => {
    let clonedData = [...props?.data];
    clonedData.splice(i, 1);
    props.coursesExChange(clonedData);
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
  console.log(props.steps.length - 1);
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
                  <label for="courses" className="form-label">
                    نام دوره
                  </label>
                  <Input
                    name="courses"
                    value={props.data[i]?.courses}
                    onChange={(e) => handleChange(e, i)}
                    type="text"
                    className="form-control"
                    id="courses"
                    aria-describedby="courses"
                  />
                </div>
              </div>
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="place" className="form-label">
                    محل برگزاری
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
                  <label for="coursesType" className="form-label">
                    نوع دوره
                  </label>
                  <Input
                    type="text"
                    name="coursesType"
                    id="coursesType"
                    autoComplete="off"
                    value={props.data[i]?.coursesType}
                    onChange={(e) => handleChange(e, i)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="CourseLevel" className="form-label">
                    سطح دوره
                  </label>
                  <Input
                    placeholder=""
                    name="CourseLevel"
                    id="CourseLevel"
                    value={props.data[i]?.CourseLevel}
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

                </div>
              </div>
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="degreeDate" className="form-label">
                    تاریخ اخذ مدرک
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                    <DatePicker
                      className="form-control"
                      defaultValue={null}
                      onChange={(e) => handleSelectChange(e, i, "degreeDate")}
                      value={props.data[i].degreeDate}
                    />
                  </LocalizationProvider>

                </div>
              </div>

              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="trainingType " className="form-label">
                    نوع آموزش
                  </label>
                  <Select
                    name="trainingType"
                    id="trainingType"
                    placeholder=""
                    getOptionLabel={(option) => option.value}
                    getOptionValue={(option) => option.id}
                    onChange={(e) => handleSelectChange(e, i, "trainingType")}
                    value={props.data[i].trainingType}
                    options={[
                      {
                        id: 1,
                        label: "حضوری",
                        value: "حضوری",
                      },
                      {
                        id: 2,
                        label: "آنلاین",
                        value: "آنلاین",
                      },
                      {
                        id: 3,
                        label: "خودخوان",
                        value: "خودخوان",
                      },
                    ]}
                    styles={{ menu: (base) => ({ ...base, zIndex: 99 }) }}
                  />
                </div>
              </div>
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="certificateType " className="form-label">
                    نوع گواهینامه
                  </label>
                  <Select
                    name="certificateType"
                    id="certificateType"
                    placeholder=""
                    getOptionLabel={(option) => option.value}
                    getOptionValue={(option) => option.id}
                    onChange={(e) => handleSelectChange(e, i, "certificateType")}
                    value={props.data[i].certificateType}
                    options={[
                      {
                        id: 1,
                        label: "درون سازمانی",
                        value: "درون سازمانی",
                      },
                      {
                        id: 2,
                        label: "مجوزدار",
                        value: "مجوزدار",
                      },
                      {
                        id: 3,
                        label: "بین المللی",
                        value: "بین المللی",
                      },
                      {
                        id: 4,
                        label: "آزاد",
                        value: "آزاد",
                      },
                      {
                        id: 5,
                        label: "سایر",
                        value: "سایر",
                      },
                      {
                        id: 6,
                        label: "ندارد",
                        value: "ندارد",
                      },
                    ]}
                    styles={{ menu: (base) => ({ ...base, zIndex: 99 }) }}
                  />
                </div>
              </div>
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="certificateDate" className="form-label">
                    تاریخ اعتبار گواهینامه
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                    <DatePicker
                      className="form-control"
                      onChange={(e) => handleSelectChange(e, i, "certificateDate")}
                      value={props.data[i].certificateDate}
                      defaultValue={null}
                    />
                  </LocalizationProvider>

                </div>
              </div>
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="duration" className="form-label">
                    مدت دوره(ساعت)
                  </label>
                  <Input
                    name="duration"
                    id="duration"
                    value={props.data[i]?.duration}
                    onChange={(e) => handleChange(e, i)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3 relative">
                  <label for="Score" className="form-label">
                    نمره
                  </label>
                  <Input
                    name="Score"
                    value={props.data[i]?.Score}
                    onChange={(e) => handleChange(e, i)}
                    type="text"
                    className="form-control"
                    id="Score"
                  />
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
            <div className="row">
              <div className="col-md-9">
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
              {3 === props.steps.length - 1 ? 'تایید اطلاعات' : 'مرحله بعد'}
            </button>
          </div>
        </Box>
      </form>
    </div>
  );
};
export default EducationCourses;
