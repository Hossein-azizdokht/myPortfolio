import { Delete } from "@mui/icons-material";
import { Box, Button, Input, Slider } from "@mui/material";
import React, { useState } from "react";
import Select from "react-select";

const Ability = (props) => {


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

  /* --------------------------------- slider --------------------------------- */
  const [value, setValue] = useState(0);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
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
                  <label for="place" className="form-label">
                    محل آشنایی
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
                    مدت آشنایی(به سال)
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
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="branch" className="form-label">
                    شاخه مهارت
                  </label>
                  <Input
                    type="text"
                    name="branch"
                    id="branch"
                    autoComplete="off"
                    value={props.data[i]?.branch}
                    onChange={(e) => handleChange(e, i)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="skillScore " className="form-label">
                    امتیاز شما به این مهارت
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
                    نوع مهارت
                  </label>

                  <Select
                    name="skillType"
                    id="skillType"
                    placeholder=""
                    getOptionLabel={(option) => option.value}
                    getOptionValue={(option) => option.id}
                    onChange={(e) => handleSelectChange(e, i, "skillType")}
                    value={props.data[i].skillType}
                    options={[
                      {
                        id: 1,
                        label: "عمومی",
                        value: "عمومی",
                      },
                      {
                        id: 2,
                        label: "تخصصی",
                        value: "تخصصی",
                      },

                    ]}
                    styles={{ menu: (base) => ({ ...base, zIndex: 99 }) }}
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
              <div className="col-md-3 column">
                <div className="mb-3 relative">

                  <div className="d-flex">
                    <label for="Proficiency " className="form-label">
                      میزان آشنایی/تسلط : {value}
                    </label>
                  </div>
                  <Slider
                    aria-label="Proficiency"
                    defaultValue={0}
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={0}
                    max={100}
                    value={value}
                    onChange={handleSliderChange}
                    style={{ marginTop: "1rem" }}
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
              {4 === props.steps.length - 1 ? 'تایید اطلاعات' : 'مرحله بعد'}
            </button>
          </div>
        </Box>
      </form>
    </div>
  );
};
export default Ability;
