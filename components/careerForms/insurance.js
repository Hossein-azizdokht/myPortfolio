import { Delete } from "@mui/icons-material";
import { Box, Button, Input, Slider } from "@mui/material";
import React, { useState } from "react";
import Select from "react-select";


import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";

const Insurance = (props) => {


    // -- form filter change handler --------------------------------
    const handleChange = (e, i) => {

        let { name, value } = e.target;
        let newData = [...props?.data];
        newData[i] = {
            ...newData[i],
            [name]: value,
        };
        props.insuranceExChange(newData);
    };
    const handleSelectChange = (e, i, name) => {

        let cloneData = [...props?.data];
        cloneData[i] = { ...cloneData[i], [name]: e };
        props.insuranceExChange(cloneData);
    };

    // -- Add row handler --------------------------------
    const handleAddFilter = () => {
        let newData = [...props?.data];
        props.insuranceExChange([
            ...newData,
            {
                title: "",
                countDay: "",
                startDate: "",
                endDate: "",
                insuranceType: "",
                insuranceNum: "",
                file: "",

            },
        ]);
    };
    // -- Remove handler --------------------------------
    const handleRemoveSpecificFilter = (i) => () => {
        let clonedData = [...props?.data];
        clonedData.splice(i, 1);
        props.insuranceExChange(clonedData);
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
    /* ------------------------------- upload file ------------------------------ */

    // const uploadToClient = (event) => {
    //     // console.log(event.target.files[0]);
    //     if (event.target.files && event.target.files[0]) {
    //         const i = event.target.files[0];
    //         props.ObjUrlHandler(URL.createObjectURL(i));
    //         props.insuranceExChange(event.target.file, i);
    //     }
    // };
    const uploadToClient = event => {

        if (event.target.files && event.target.files[0]) {
          const i = event.target.files[0];
          const body = new FormData();
          body.append("image", i);
    
    
        }
      };
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
                                        نام شركت
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
                                    <label for="countDay" className="form-label">
                                        تعداد روز
                                    </label>
                                    <Input
                                        type="text"
                                        name="countDay"
                                        id="countDay"
                                        autoComplete="off"
                                        value={props.data[i]?.countDay}
                                        onChange={(e) => handleChange(e, i)}
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="col-md-3 column">
                                <div className="mb-3 relative">
                                    <label for="startDate" className="form-label">
                                        تاریخ شروع
                                    </label>
                                    <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                                        <DatePicker
                                            className={`form-control`}
                                            onChange={(e) => handleSelectChange(e, i, "startDate")}
                                            defaultValue={null}
                                            value={props.data[i]?.startDate}
                                        />
                                    </LocalizationProvider>

                                </div>
                            </div>
                            <div className="col-md-3 column">
                                <div className="mb-3 relative">
                                    <label for="endDate" className="form-label">
                                        تاریخ پایان
                                    </label>
                                    <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                                        <DatePicker
                                            className={`form-control`}
                                            onChange={(e) => handleSelectChange(e, i, "endDate")}
                                            defaultValue={null}
                                            value={props.data[i]?.endDate}
                                        />
                                    </LocalizationProvider>
                                </div>
                            </div>

                            <div className="col-md-3 column">
                                <div className="mb-3 relative">
                                    <label for="insuranceType " className="form-label">
                                        نوع بيمه
                                    </label>
                                    <Select
                                        name="insuranceType"
                                        id="insuranceType"
                                        placeholder=""
                                        getOptionLabel={(option) => option.value}
                                        getOptionValue={(option) => option.id}
                                        classNamePrefix="react-select"
                                        onChange={(e) => handleSelectChange(e, i, "insuranceType")}
                                        value={props.data[i].insuranceType}
                                        options={[
                                            {
                                                id: 1,
                                                label: "تامين اجتماعي",
                                                value: "تامين اجتماعي",
                                            },
                                            {
                                                id: 2,
                                                label: "بانك ملي",
                                                value: "بانك ملي",
                                            },
                                            {
                                                id: 3,
                                                label: "نيروهاي مسلح",
                                                value: "نيروهاي مسلح",
                                            },
                                            {
                                                id: 4,
                                                label: "كشوري",
                                                value: "كشوري",
                                            },

                                        ]}
                                        styles={{ menu: (base) => ({ ...base, zIndex: 99 }) }}
                                    />
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3 relative">
                                    <label for="insuranceNum" className="form-label">
                                        شماره بيمه
                                    </label>
                                    <Input
                                        name="insuranceNum"
                                        value={props.data[i]?.insuranceNum}
                                        onChange={(e) => handleChange(e, i)}
                                        type="text"
                                        className={`form-control`}
                                        id="insuranceNum"
                                    />

                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mb-3 relative">
                                    <label for="file" className="form-label">
                                    فایل ضمیمه
                                    </label>
                                    <Input
                                        name="file"
                                        value={props.data[i]?.file}
                                        onChange={(e) => handleChange(e, i)}
                                        type="file"
                                        className={`form-control`}
                                        id="file"
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
                            <hr className={i == props.data.length - 1 ? "!mb-[-4px]" : ""} />
                        </div>
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
                            {7 === props.steps.length - 1 ? 'تایید اطلاعات' : 'مرحله بعد'}
                        </button>
                    </div>
                </Box>
            </form>
        </div>
    );
};
export default Insurance;
