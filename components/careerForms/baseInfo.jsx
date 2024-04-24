import { Box, Input, TextField } from "@mui/material";
import JustNumberInputCheck from "helper/justNumberInputCheck";
import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import Select from "react-select";
import LocationDropdowns from "../locationDropdowns/LocationDropdowns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { JustNumberCheck } from '../../helper/validationHelper'



const BaseInfo = (props) => {
    const date = new Date();
    const [addressData, setAddressData] = useState({});
    // personal image file upload
    const uploadToClient = (event) => {
        // console.log(event.target.files[0]);
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            props.ObjUrlHandler(URL.createObjectURL(i));
            props.baseInfoChange(event.target.name, i);
        }
    };

    // function handleSubmitt(e) {
    //     e.preventDefault();
    //     console.log(props);
    //     if (props.formValidation) {
    //         props.handleSubmit();
    //         console.log(props.errors);
    //         // alert(JSON.stringify(formData));
    //     }

    //     // debugger
    //     // console.log('validation');
    // }

    /*  file upload ------------------------------ */
    // const [file, setFile] = useState(null);

    // const handleFileChange = (event) => {
    //     setFile(event.target.files[0]);
    // };

    // const handleUpload = () => {
    //     if (!file) {
    //         alert('Please select a file');
    //         return;
    //     }

    //     const formData = new FormData();
    //     formData.append('file', file);

    //     fetch('YOUR_SERVER_ENDPOINT', {
    //         method: 'POST',
    //         body: formData,
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log('File uploaded successfully:', data);
    //         })
    //         .catch((error) => {
    //             console.error('Error uploading file:', error);
    //         });
    // };



    return (
        <form>
            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="flex items-end">
                        {props.urlLocal != null ? (
                            <img
                                height={100}
                                className="min-w-[100px] max-w-[130px] border p-1 rounded-xl mt-3"
                                src={props.urlLocal}
                            />
                        ) : (
                            <div className="min-w-[100px] max-w-[130px] min-h-[100px] border p-1 rounded-xl mt-3 flex flex-center justify-center">
                                <BiUser size={68} className="m-auto opacity-30" />
                            </div>
                        )}
                        <div className="flex flex-center mr-4">
                            <div>
                                <label for="exampleInputEmail1" className="form-label">
                                    بارگذاری تصویر
                                </label>
                                <label for="exampleInputEmail1" className="form-label block">
                                    {props.data.avatar
                                        ? props.data.avatar?.name
                                        : "عکس پرسنلی خود را بارگذاری نمایید."}
                                </label>
                            </div>
                            <div className="ml-4">
                                <label for="myFile" className="btn border">
                                    انتخاب تصویر
                                </label>
                                <Input
                                    type="file"
                                    id="myFile"
                                    className="ltr hidden"
                                    name="avatar"
                                    onChange={uploadToClient}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="nameText" className="form-label">
                            نام
                        </label>
                        <Input
                            value={props.data.nameText}
                            onChange={(e) => props.baseInfoChange("nameText", e.target.value)}
                            error={props.errors.nameText}
                            type="text"
                            className={`form-control`}
                            id="nameText"
                            aria-describedby="name"
                        />
                        {props.errors.nameText && (
                            <div className="error">{props.errors.nameText}</div>
                        )}
                        {/* <div className="errorText">{props.getError('nameText') || ' '}</div> */}
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="family" className="form-label">
                            {" "}
                            نام خانوادگی
                        </label>
                        <Input
                            name="family"
                            value={props.data.family}
                            error={props.errors.family}
                            onChange={(e) => props.baseInfoChange("family", e.target.value)}
                            type="text"
                            className={`form-control`}
                            id="family"
                        />
                        {props.errors.family && (
                            <div className="error">{props.errors.family}</div>
                        )}
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="aliasName" className="form-label">
                            {" "}
                            نام دیگر- نام قبلی
                        </label>
                        <Input
                            name="aliasName"
                            value={props.data.aliasName}
                            onChange={(e) =>
                                props.baseInfoChange(e.target.name, e.target.value)
                            }
                            type="text"
                            className="form-control"
                            id="aliasName"
                            aria-describedby="aliasName"
                        />
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="birthDate" className="form-label">
                            تاریخ تولد
                        </label>
                        <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                            <DatePicker
                                value={props.data.birthDate}
                                onChange={(e) => props.baseInfoChange("birthDate", e)}
                                className={`form-control ${props.errors.birthDate ? "error" : ""
                                    }`}
                                renderInput={({ error: inputError, ...params }) => {
                                    return <input {...params} />;
                                }}
                                defaultValue=""
                            />
                        </LocalizationProvider>
                        {props.errors.birthDate && (
                            <div className="error">{props.errors.birthDate}</div>
                        )}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="fatherName" className="form-label">
                            نام پدر{" "}
                        </label>
                        <Input
                            name="fatherName"
                            value={props.data.fatherName}
                            error={props.errors.fatherName}
                            onChange={(e) => props.baseInfoChange("fatherName", e.target.value)}
                            type="text"
                            className={`form-control`}
                            id="fatherName"
                        />
                        {props.errors.fatherName && (
                            <div className="error">{props.errors.fatherName}</div>
                        )}
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="sex" className="form-label">
                            جنسیت
                        </label>
                        <Select
                            name="sex"
                            onChange={(e) => props.baseInfoChange("sex", e)}
                            id="sex"
                            className={`rselect ${props.errors.sex ? "error" : ""}`}
                            classNamePrefix="react-select"
                            styles={{ menu: (base) => ({ ...base, zIndex: 99 }) }}
                            value={props.data.sex}
                            placeholder=""
                            getOptionLabel={(option) => option.value}
                            getOptionValue={(option) => option.id}
                            options={[
                                {
                                    id: 1,
                                    value: "مرد",
                                },
                                {
                                    id: 2,
                                    value: "زن",
                                },
                            ]}
                        />
                        {props.errors.sex && (
                            <div className="error">{props.errors.sex}</div>
                        )}
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="marriage" className="form-label">
                            وضعیت تاهل
                        </label>
                        <Select
                            name="marital"
                            onChange={(e) => props.baseInfoChange("marital", e)}
                            id="marital"
                            styles={{ menu: (base) => ({ ...base, zIndex: 99 }) }}
                            value={props.data.marital}
                            placeholder=""
                            className={`rselect ${props.errors.marital ? "error" : ""}`}
                            classNamePrefix="react-select"
                            error={props.errors.marital}
                            getOptionLabel={(option) => option.value}
                            getOptionValue={(option) => option.id}
                            options={[
                                {
                                    id: 1,
                                    value: "مجرد",
                                },
                                {
                                    id: 2,
                                    value: "متاهل",
                                },
                            ]}
                        />
                        {props.errors.marital && (
                            <div className="error">{props.errors.marital}</div>
                        )}
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="exampleInputPassword1" className="form-label">
                            تعداد فرزندان
                        </label>
                        <Input
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            onKeyDown={(e) => JustNumberInputCheck(e)}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="exampleInputEmail1" className="form-label">
                            گروه خونی{" "}
                        </label>
                        <Select
                            name="blood"
                            onChange={(e) => props.baseInfoChange("blood", e)}
                            id="blood"
                            className={`rselect ${props.errors.blood ? "error" : ""}`}
                            classNamePrefix="react-select"
                            styles={{ menu: (base) => ({ ...base, zIndex: 99 }) }}
                            value={props.data.blood}
                            placeholder=""
                            getOptionLabel={(option) => option.value}
                            getOptionValue={(option) => option.id}
                            options={[
                                {
                                    id: 1,
                                    label: "A+",
                                    value: "A+",
                                },
                                {
                                    id: 2,
                                    label: "B+",
                                    value: "B+",
                                },
                                {
                                    id: 3,
                                    label: "B-",
                                    value: "B-",
                                },
                                {
                                    id: 4,
                                    label: "AB-",
                                    value: "AB-",
                                },
                                {
                                    id: 5,
                                    label: "AB+",
                                    value: "AB+",
                                },
                                {
                                    id: 6,
                                    label: "O+",
                                    value: "O+",
                                },
                                {
                                    id: 7,
                                    label: "O-",
                                    value: "O-",
                                },
                                {
                                    id: 8,
                                    label: "A-",
                                    value: "A-",
                                },
                            ]}
                        />
                        {props.errors.blood && (
                            <div className="error">{props.errors.blood}</div>
                        )}
                    </div>
                </div>
                {/* <div className='m-2'>
                    <label for="exampleInputEmail1" className="form-label me-2">بارگذاری تصویر </label>

                    <label for="myFile" className="btn border">انتخاب تصویر</label>
                    <Input type="file" id='myFile' className='ltr hidden' name="myFile" />

                </div> */}

                <hr />
                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="nationalCode" className="form-label">
                            کدملی
                        </label>
                        <Input
                            name="nationalCode"
                            value={props.data.nationalCode}
                            error={props.errors.nationalCode}
                            onChange={(e) => props.baseInfoChange("nationalCode", e.target.value)}
                            type="text"
                            className={`form-control`}
                            id="nationalCode"
                            onKeyDown={(e) => JustNumberCheck(e)}
                        />
                        {props.errors.nationalCode && (
                            <div className="error">{props.errors.nationalCode}</div>
                        )}
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="Id" className="form-label">
                            شماره شناسنامه
                        </label>
                        <Input
                            name="Id"
                            value={props.data.Id}
                            error={props.errors.Id}
                            onChange={(e) => props.baseInfoChange("Id", e.target.value)}
                            type="text"
                            className={`form-control`}
                            id="Id"
                            onKeyDown={(e) => JustNumberCheck(e)}
                        />
                        {props.errors.Id && (
                            <div className="error">{props.errors.Id}</div>
                        )}
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="serialNumber" className="form-label">
                            سریال شناسنامه
                        </label>
                        <Input
                            name="serialNumber"
                            value={props.data.serialNumber}
                            error={props.errors.serialNumber}
                            onChange={(e) => props.baseInfoChange("serialNumber", e.target.value)}
                            type="text"
                            className={`form-control`}
                            id="serialNumber"
                        />
                        {props.errors.serialNumber && (
                            <div className="error">{props.errors.serialNumber}</div>
                        )}
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="certificateSeries" className="form-label">
                            سری شناسنامه
                        </label>
                        <Input
                            name="certificateSeries"
                            value={props.data.certificateSeries}
                            error={props.errors.certificateSeries}
                            onChange={(e) => props.baseInfoChange("certificateSeries", e.target.value)}
                            type="text"
                            className={`form-control`}
                            id="certificateSeries"
                        />
                        {props.errors.certificateSeries && (
                            <div className="error">{props.errors.certificateSeries}</div>
                        )}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="issuingCountry" className="form-label">
                            کشور محل صدور
                        </label>
                        <Input
                            name="issuingCountry"
                            value={props.data.issuingCountry}
                            error={props.errors.issuingCountry}
                            onChange={(e) => props.baseInfoChange("issuingCountry", e.target.value)}
                            type="text"
                            className={`form-control`}
                            id="issuingCountry"
                        />
                        {props.errors.issuingCountry && (
                            <div className="error">{props.errors.issuingCountry}</div>
                        )}

                    </div>
                </div>
                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="issuingProvince" className="form-label">
                            استان محل صدور
                        </label>
                        <Input
                            name="issuingProvince"
                            value={props.data.issuingProvince}
                            error={props.errors.issuingProvince}
                            onChange={(e) => props.baseInfoChange("issuingProvince", e.target.value)}
                            type="text"
                            className={`form-control`}
                            id="issuingProvince"
                        />
                        {props.errors.issuingProvince && (
                            <div className="error">{props.errors.issuingProvince}</div>
                        )}

                    </div>
                </div>
                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="issuingCity" className="form-label">
                            شهر محل صدور
                        </label>
                        <Input
                            name="issuingCity"
                            value={props.data.issuingCity}
                            error={props.errors.issuingCity}
                            onChange={(e) => props.baseInfoChange("issuingCity", e.target.value)}
                            type="text"
                            className={`form-control`}
                            id="issuingCity"
                        />
                        {props.errors.issuingCity && (
                            <div className="error">{props.errors.issuingCity}</div>
                        )}

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="Countrybirth" className="form-label">
                            کشور محل تولد
                        </label>
                        <Input
                            name="Countrybirth"
                            value={props.data.Countrybirth}
                            error={props.errors.Countrybirth}
                            onChange={(e) => props.baseInfoChange("Countrybirth", e.target.value)}
                            type="text"
                            className={`form-control`}
                            id="issuingCountrybirth"
                        />
                        {props.errors.Countrybirth && (
                            <div className="error">{props.errors.Countrybirth}</div>
                        )}

                    </div>
                </div>
                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="Provincebirth" className="form-label">
                            استان محل تولد
                        </label>
                        <Input
                            name="Provincebirth"
                            value={props.data.Provincebirth}
                            error={props.errors.Provincebirth}
                            onChange={(e) => props.baseInfoChange("Provincebirth", e.target.value)}
                            type="text"
                            className={`form-control`}
                            id="Provincebirth"
                        />
                        {props.errors.Provincebirth && (
                            <div className="error">{props.errors.Provincebirth}</div>
                        )}

                    </div>
                </div>
                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="Citybirth" className="form-label">
                            شهر محل تولد
                        </label>
                        <Input
                            name="Citybirth"
                            value={props.data.Citybirth}
                            error={props.errors.Citybirth}
                            onChange={(e) => props.baseInfoChange("Citybirth", e.target.value)}
                            type="text"
                            className={`form-control`}
                            id="Citybirth"
                        />
                        {props.errors.Citybirth && (
                            <div className="error">{props.errors.Citybirth}</div>
                        )}

                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="nationality" className="form-label">
                            ملیت
                        </label>
                        <Input
                            name="nationality"
                            value={props.data.nationality}
                            error={props.errors.nationality}
                            onChange={(e) =>
                                props.baseInfoChange(e.target.name, e.target.value)
                            }
                            type="text"
                            className="form-control"
                            id="nationality"
                        />
                        {props.errors.nationality && (
                            <div className="error">{props.errors.nationality}</div>
                        )}
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="religion" className="form-label">
                            دین
                        </label>
                        <Select
                            name="religion"
                            onChange={(e) => props.baseInfoChange("religion", e)}
                            id="religion"
                            className={`rselect ${props.errors.religion ? "error" : ""}`}
                            classNamePrefix="react-select"
                            styles={{ menu: (base) => ({ ...base, zIndex: 99 }) }}
                            value={props.data.religion}
                            placeholder=""
                            getOptionLabel={(option) => option.value}
                            getOptionValue={(option) => option.id}
                            options={[
                                {
                                    id: 1,
                                    label: "اسلام",
                                    value: "اسلام",
                                },
                                {
                                    id: 2,
                                    label: "زرتشت",
                                    value: "زرتشت",
                                },
                                {
                                    id: 3,
                                    label: "مسیحیت",
                                    value: "مسیحیت",
                                },
                            ]}
                        />
                        {props.errors.religion && (
                            <div className="error">{props.errors.religion}</div>
                        )}
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="faith" className="form-label">
                            مذهب
                        </label>
                        <Select
                            name="faith"
                            onChange={(e) => props.baseInfoChange("faith", e)}
                            id="faith"
                            className={`rselect ${props.errors.faith ? "error" : ""}`}
                            classNamePrefix="react-select"
                            styles={{ menu: (base) => ({ ...base, zIndex: 99 }) }}
                            value={props.data.faith}
                            placeholder=""
                            getOptionLabel={(option) => option.value}
                            getOptionValue={(option) => option.id}
                            options={[
                                {
                                    id: 1,
                                    label: "شیعه",
                                    value: "شیعه",
                                },
                                {
                                    id: 2,
                                    label: "سنی",
                                    value: "سنی",
                                },
                            ]}
                        />
                        {props.errors.faith && (
                            <div className="error">{props.errors.faith}</div>
                        )}
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                {props.data.sex?.value == "مرد" && (
                    <>
                        <div className="col-md-3">
                            <div className="mb-3 relative">
                                <label for="militaryStatus" className="form-label">
                                    وضعیت نظام وظیفه
                                </label>
                                <Select
                                    name="militaryStatus"
                                    onChange={(e) => props.baseInfoChange("militaryStatus", e)}
                                    id="militaryStatus"
                                    value={props.data.militaryStatus}
                                    placeholder=""
                                    getOptionLabel={(option) => option.value}
                                    getOptionValue={(option) => option.id}
                                    options={[
                                        {
                                            id: 1,
                                            label: "پایان خدمت",
                                            value: "پایان خدمت",
                                        },
                                        {
                                            id: 2,
                                            label: "مشمول",
                                            value: "مشمول",
                                        },
                                        {
                                            id: 3,
                                            label: "معافیت تحصیلی",
                                            value: "معافیت تحصیلی",
                                        },
                                        {
                                            id: 4,
                                            label: "معافیت",
                                            value: "معافیت",
                                        },
                                    ]}
                                    styles={{ menu: (base) => ({ ...base, zIndex: 99 }) }}
                                />
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="mb-3 relative">
                                <label for="militaryType" className="form-label">
                                    نوع معافیت (پزشکی)
                                </label>
                                <Select
                                    name="militaryType"
                                    onChange={(e) => props.baseInfoChange("militaryType", e)}
                                    id="militaryType"
                                    value={props.data.militaryType}
                                    placeholder=""
                                    getOptionLabel={(option) => option.value}
                                    getOptionValue={(option) => option.id}
                                    options={[
                                        {
                                            id: 1,
                                            label: "پایان خدمت",
                                            value: "پایان خدمت",
                                        },
                                        {
                                            id: 2,
                                            label: "مشمول",
                                            value: "مشمول",
                                        },
                                        {
                                            id: 3,
                                            label: "معافیت تحصیلی",
                                            value: "معافیت تحصیلی",
                                        },
                                        {
                                            id: 4,
                                            label: "معافیت",
                                            value: "معافیت",
                                        },
                                    ]}
                                    styles={{ menu: (base) => ({ ...base, zIndex: 99 }) }}
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="endDate" className="form-label">
                            تاریخ پایان معافیت
                        </label>
                        <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                            <DatePicker
                                value={props.data.endDate}
                                onChange={(e) => props.baseInfoChange("endDate", e)}
                                className={`form-control `}
                                renderInput={({ error: inputError, ...params }) => {
                                    return <input {...params} />;
                                }}
                                defaultValue=""
                            />
                        </LocalizationProvider>
                       
                    </div>
                </div>
                    </>
                )}
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="quota" className="form-label">
                            سهمیه
                        </label>
                        <Select
                            name="quota"
                            onChange={(e) => props.baseInfoChange("quota", e)}
                            id="quota"
                            value={props.data.quota}
                            placeholder=""
                            getOptionLabel={(option) => option.value}
                            getOptionValue={(option) => option.id}
                            options={[
                                {
                                    id: 1,
                                    label: " جانباز25%و بالاتر",
                                    value: " جانباز25%و بالاتر",
                                },
                                {
                                    id: 2,
                                    label: "آزاده",
                                    value: "آزاده",
                                },
                                {
                                    id: 3,
                                    label: "فرزند رزمنده ",
                                    value: "فرزند رزمنده ",
                                },
                                {
                                    id: 4,
                                    label: "رزمنده",
                                    value: "رزمنده",
                                },
                            ]}
                            styles={{ menu: (base) => ({ ...base, zIndex: 99 }) }}
                        />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="phoneNumber" className="form-label">
                            {" "}
                            شماره تلفن همراه{" "}
                        </label>
                        <Input
                            name="phoneNumber"
                            value={props.data.phoneNumber}
                            error={props.errors.phoneNumber}
                            onChange={(e) => props.baseInfoChange("phoneNumber", e.target.value)}
                            type="text"
                            className={`form-control`}
                            id="phoneNumber"
                            onKeyDown={(e) => JustNumberCheck(e)}
                        />
                        {props.errors.phoneNumber && (
                            <div className="error">{props.errors.phoneNumber}</div>
                        )}

                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="phone" className="form-label">
                            {" "}
                            شماره تلفن ثابت{" "}
                        </label>
                        <Input
                            name="phone"
                            value={props.data.phone}
                            error={props.errors.phone}
                            onChange={(e) => props.baseInfoChange("phone", e.target.value)}
                            type="text"
                            className={`form-control`}
                            id="phone"
                            onKeyDown={(e) => JustNumberCheck(e)}
                        />
                        {props.errors.phone && (
                            <div className="error">{props.errors.phone}</div>
                        )}
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="email" className="form-label">
                            آدرس پست الکترونیکی
                        </label>
                        <Input
                            name="email"
                            value={props.data.email}
                            error={props.errors.email}
                            onChange={(e) => props.baseInfoChange("email", e.target.value)}
                            type="text"
                            className={`form-control`}
                            id="email"
                        />
                        {props.errors.email && (
                            <div className="error">{props.errors.email}</div>
                        )}
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="mb-3 relative">
                        <label for="address" className="form-label">
                            آدرس{" "}
                        </label>
                        <Input
                            name="address"
                            value={props.data.address}
                            error={props.errors.address}
                            onChange={(e) => props.baseInfoChange("address", e.target.value)}
                            type="text"
                            className={`form-control`}
                            id="address"

                        />
                        {props.errors.address && (
                            <div className="error">{props.errors.address}</div>
                        )}
                    </div>
                </div>
            </div>
            <div className="row">
                <hr />
                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="accountNumber" className="form-label">
                            شماره حساب (بانک ملی)
                        </label>
                        <Input
                            name="accountNumber"
                            value={props.data.accountNumber}
                            error={props.errors.accountNumber}
                            onChange={(e) => props.baseInfoChange("accountNumber", e.target.value)}
                            type="text"
                            className={`form-control`}
                            id="accountNumber"
                            onKeyDown={(e) => JustNumberCheck(e)}
                        />
                        {props.errors.accountNumber && (
                            <div className="error">{props.errors.accountNumber}</div>
                        )}
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="mb-3 relative">
                        <label for="ShabaNumber" className="form-label">
                            شماره شبا (بدونIR)
                        </label>
                        <Input
                            name="ShabaNumber"
                            value={props.data.ShabaNumber}
                            error={props.errors.ShabaNumber}
                            onChange={(e) => props.baseInfoChange("ShabaNumber", e.target.value)}
                            type="text"
                            className={`form-control`}
                            id="ShabaNumber"
                            onKeyDown={(e) => JustNumberCheck(e)}
                        />
                        {props.errors.ShabaNumber && (
                            <div className="error">{props.errors.ShabaNumber}</div>
                        )}
                    </div>
                </div>
            </div>
            <Box sx={{ mt: 2, mb: 2 }}>
                <div>
                    <button type="" onClick={props.handleSubmit} className="btn btn-primary">
                        مرحله بعد
                    </button>
                </div>
            </Box>
        </form>
    );
};

export default BaseInfo;
