import { Add, Delete, PlusOneOutlined } from "@mui/icons-material";
import { Box, Button, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';

const Education = (props) => {

    // -- form filter change handler --------------------------------
    const handleChange = (e, index, name) => {
        debugger
        if (name) {
            // This "name" is for entries that should take "e" as the value
            let cloneData = [...props?.data];
            cloneData[i] = { ...cloneData[i], [name]: e };
            props.handleChange(cloneData, name, index);
        }
        else {
            let { name, value } = e.target;
            let newData = [...props?.init];
            newData[i] = {
                ...newData[i],
                [name]: value,
            };
            props.handleChange(newData, index, name);
        }
    };


    // const handleSelectChange = (e, i, name) => {//for react-selects we take three parametr:[ e | i | name ]
    //     debugger;
    //     let cloneData = [...props?.data];
    //     cloneData[i] = { ...cloneData[i], [name]: e };
    //     props.handleChange(cloneData, name);
    // };

    // -- Add row handler --------------------------------
    const handleAddFilter = () => {
        let newData = [...props?.init];
        props.handleChange([...newData, props.educationInit]);
    };
    // -- Remove handler --------------------------------
    const handleRemoveSpecificFilter = (i) => () => {
        let clonedData = [...props?.init];
        clonedData.splice(i, 1);
        props.handleChange(clonedData);
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
        console.log(props.getValue);
        console.log(props.getError);
        console.log(props.formIsSubmitted);
        // props.handleNext;
    }



    return (
        <div>
            <form className="p-4 mb-4">
                {props.init?.map((item, i) => (
                    <div className="relative" key={i}>
                        <span className="inline-flex items-center rounded-md rounded-l-[100px] bg-blue-50 px-3 py-2 top-[3px] absolute right-[-55px] text-xs text-[18px] text-blue-700 ring-1 ring-inset ring-blue-700/10">
                            {i + 1}
                        </span>
                        <div className="row">
                            <div className="col-md-3 column">
                                <div className="mb-3 relative">
                                    <label for="grade" className="form-label">
                                        مقطع تحصیلی
                                    </label>
                                    <Select
                                        name="grade"
                                        id="grade"
                                        placeholder=""
                                        error={props.errors.grade}
                                        className={`rselect ${props.errors.grade ? 'error' : ''}`}
                                        classNamePrefix="react-select"
                                        getOptionLabel={(option) => option.value}
                                        getOptionValue={(option) => option.id}
                                        onChange={(e) => handleChange(e, i, "grade")}
                                        value={props.data[i].grade}
                                        options={[
                                            {
                                                id: 1,
                                                label: "زیردیپلم",
                                                value: "زیردیپلم",
                                            },
                                            {
                                                id: 2,
                                                label: "دیپلم",
                                                value: "دیپلم",
                                            },
                                            {
                                                id: 3,
                                                label: "کاردانی",
                                                value: "کاردانی",
                                            },
                                            {
                                                id: 4,
                                                label: "کارشناسی پیوسته",
                                                value: "کارشناسی پیوسته",
                                            },
                                            {
                                                id: 5,
                                                label: "کارشناسی ناپیوسته",
                                                value: "کارشناسی ناپیوسته",
                                            },
                                            {
                                                id: 6,
                                                label: "کارشناسی ارشد",
                                                value: "کارشناسی ارشد",
                                            },
                                            {
                                                id: 7,
                                                label: "دکتری ",
                                                value: "دکتری ",
                                            },
                                        ]}
                                        styles={{ menu: (base) => ({ ...base, zIndex: 99 }) }}
                                    />
                                    {props.errors.grade && <div className="error">{props.errors.grade}</div>}
                                </div>
                            </div>
                            <div className="col-md-3 column">
                                <div className="mb-3 relative">
                                    <label for="major" className="form-label">
                                        رشته تحصیلی
                                    </label>
                                    <Input
                                        type="text"
                                        name="major"
                                        autoComplete="off"
                                        value={props.init[i]?.major}
                                        error={props.errors.major}
                                        onChange={(e) => handleChange(e, i)}
                                        className="form-control"
                                    />
                                    {props.errors.major && <div className="error">{props.errors.major}</div>}
                                </div>
                            </div>
                            <div className="col-md-3 column">
                                <div className="mb-3 relative">
                                    <label for="place" className="form-label">
                                        محل تحصیل
                                    </label>
                                    <Input
                                        type="text"
                                        name="place"
                                        value={props.init[i]?.place}
                                        error={props.errors.place}
                                        onChange={(e) => handleChange(e, i)}
                                        className="form-control"
                                    />
                                    {props.errors.place && <div className="error">{props.errors.place}</div>}
                                </div>
                            </div>
                            <div className="col-md-3 column">
                                <div className="mb-3 relative">
                                    <label for="kind" className="form-label">
                                        نوع تحصیل
                                    </label>
                                    <Input
                                        name="kind"
                                        value={props.init[i]?.kind}
                                        error={props.errors.kind}
                                        onChange={(e) => handleChange(e, i)}
                                        className="form-control"
                                    />
                                    {props.errors.kind && <div className="error">{props.errors.kind}</div>}
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
                                            className={`form-control ${props.errors.startDate ? 'error' : ''}`}
                                            onChange={(e) => handleChange(e, i, "startDate")}
                                            defaultValue={null}
                                            error={props.errors.startDate}
                                            value={props.init[i]?.startDate}
                                        />
                                    </LocalizationProvider>
                                    {props.errors.startDate && <div className="error">{props.errors.startDate}</div>}
                                </div>
                            </div>
                            <div className="col-md-3 column">
                                <div className="mb-3 relative">
                                    <label for="endDate" className="form-label">
                                        تاریخ پایان
                                    </label>
                                    <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                                        <DatePicker
                                            className={`form-control ${props.errors.endDate ? 'error' : ''}`}
                                            onChange={(e) => handleChange(e, i, "endDate")}
                                            defaultValue={null}
                                            error={props.errors.endDate}
                                            value={props.init[i]?.endDate}
                                        />
                                    </LocalizationProvider>
                                    {props.errors.endDate && <div className="error">{props.errors.endDate}</div>}
                                </div>
                            </div>
                            <div className="col-md-3 column">
                                <div className="mb-3 relative">
                                    <label for="score" className="form-label">
                                        معدل
                                    </label>
                                    <Input
                                        name="score"
                                        value={props.init[i]?.score}
                                        error={props.errors.score}
                                        onChange={(e) => handleChange(e, i)}
                                        className="form-control"
                                    />
                                    {props.errors.score && <div className="error">{props.errors.score}</div>}
                                </div>
                            </div>
                            <div className="col-md-2 column">
                                <div className="mb-3 relative">
                                    <label for="relevanceWithJob" className="form-label">
                                        ارتباط با شغل
                                    </label>
                                    <Input
                                        name="relevanceWithJob"
                                        error={props.errors.relevanceWithJob}
                                        value={props.init[i]?.relevanceWithJob}
                                        onChange={(e) => handleChange(e, i)}
                                        className="form-control"
                                    />
                                    {props.errors.relevanceWithJob && <div className="error">{props.errors.relevanceWithJob}</div>}
                                </div>
                            </div>
                            {props.init.length > 1 && (
                                <div className="col-md-1 column ">
                                    <Button color="error" onClick={handleRemoveSpecificFilter(i)}>
                                        <Delete />
                                    </Button>
                                </div>
                            )}
                        </div>
                        <hr className={i == props.init.length - 1 ? "!mb-[-4px]" : ""} />
                    </div>
                ))}

                <div className="row">
                    <div className="col-md-12 column">
                        <Button
                            color="warning"
                            className=" bg-slate-50 border border-slate-300 text-slate-400 !text-[11px] top-[-38px]"
                            disableElevation
                            size="small"
                            variant="outlined"
                            onClick={handleAddFilter}
                        >
                            <Add />
                            افزودن ردیف جدید
                        </Button>
                    </div>
                </div>
                <Box sx={{ mt: 2, mb: 2 }}>
                    <div>
                        <button className='btn btn-light' disabled={1 === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                            بازگشت به مرحله قبل
                        </button>
                        <button type="submit" onClick={handleNext} className="btn btn-primary mr-2">
                            {1 === props.steps.length - 1 ? 'تایید اطلاعات' : 'مرحله بعد'}
                        </button>
                    </div>
                </Box>

            </form>
        </div>
    );
};
export default Education;
