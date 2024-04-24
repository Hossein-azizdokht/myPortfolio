import React, { useState, useEffect } from "react";

//react multi select
import Select from "react-select";

// mui elms
import { Box } from "@material-ui/core";
import { Grid } from "@mui/material";
import { LocationOnOutlined } from "@mui/icons-material";

const LocationDropdowns = (props, { selectedLocations }) => {
  const [selectedValue, setSelectedValue] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(false);

  const BaseURL = "https://apisbu_test.parstechnology.ir/";
  //Location
  const CountryGetAll = `api/Location/CountryGetAll`;
  const ProvinceGetAll = `api/Location/ProvinceGetAll`;
  const CountyGetAll = `api/Location/CountyGetAll`;

  const [countryState, setCountryState] = useState({
    data: [],
    id: "",
    title: "",
  });
  const [provinceState, setProvinceState] = useState({
    data: [],
    id: "",
    title: "",
  });
  const [countyState, setCountyState] = useState({
    data: [],
    id: "",
    title: "",
  });

  // مدل برای ارسال آی دی مناطق انتخاب شده
  const [addressModel, setAddressModel] = useState({
    countryId: "",
    provinceId: "",
    countyId: "",
  });

  // پر کردن اطلاعات سرور جهت ویرایش
  useEffect(() => {
    // console.log(props.selectedLocations);
    setSelectedValue({
      ["country"]: props.selectedLocations?.country,
      ["province"]: props.selectedLocations?.province,
      ["county"]: props.selectedLocations?.county,
    });
  }, [props.selectedLocations]);

  //get country data async
  async function getCountryData(selected) {
    //get all resource data
    
    setisLoading(true);
    let response = await fetch(BaseURL + CountryGetAll);
    if (response) {
      let data = await response.json();
      let resData = data.result;
      setTimeout(() => {
        setCountryState({ ...countryState, data: resData });
        setisLoading(false);
      }, 100);
    }
  }

  //get province data async
  async function getProvinceData(e) {
    
    //get all resource data

    let response = await fetch(
      `${BaseURL + ProvinceGetAll}?CountryId=${countryState.id}`
    );
    let data = await response.json();
    if (data) {
      let resData = data.result;
      setProvinceState({ ...provinceState, data: resData });
    }
  }

  //get County data async
  async function getCountyData(e) {
    
    //get all resource data
    let response = await fetch(
      `${BaseURL + CountyGetAll}?ProvinceId=${provinceState.id}`
    );
    let data = await response.json();
    let resData = data.result;
    setCountyState({ ...countyState, data: resData });
  }

  // دریافت لیست کشورها
  useEffect(() => {
    getCountryData();
  }, []);

  // دریافت لیست استان ها بعد از انتخاب کشور
  useEffect(() => {
    if (countryState.id !== "" || countryState.id !== null) {
      getProvinceData();
    }
  }, [countryState]);
  //-----------------------------------------------------

  // دریافت لیست شهرستان ها بعد از انتخاب استان
  useEffect(() => {
    if (provinceState.id !== "" || provinceState.id !== null) {
      getCountyData();
    }
  }, [provinceState]);
  //-----------------------------------------------------

  //تغییر کشور
  const countryChangehandler = (e, type) => {
    setSelectedValue({
      ...selectedValue,
      ["country"]: e,
      ["province"]: "",
      ["county"]: "",
    });
    setCountryState({ ...countryState, ["id"]: e.id, ["title"]: e.title });
    setAddressModel({
      ...addressModel,
      ["countryId"]: e.id,
      ["provinceId"]: "",
      ["countyId"]: "",
    });
  };

  //تغییر استان
  const provinceChangehandler = (e, type) => {
    setSelectedValue({
      ...selectedValue,
      ["province"]: e,
      ["county"]: "",
    });
    setProvinceState({ ...provinceState, ["id"]: e.id, ["title"]: e.title });
    setAddressModel({
      ...addressModel,
      ["provinceId"]: e.id,
      ["countyId"]: "",
    });
  };

  //تغییر شهرستان
  const countyChangehandler = (e, type) => {
    setSelectedValue({
      ...selectedValue,
      ["county"]: e,
    });
    setCountyState({ ...countyState, ["id"]: e.id, ["title"]: e.title });
    setAddressModel({
      ...addressModel,
      ["countyId"]: e.id,
    });
  };

  useEffect(() => {
    props.addressModel(addressModel);
  }, [countyState]);

  return (
    
    <>
      <div className="row">
        <div className="col-md-3">
          <div className="mb-3 relative">
            <label for="issuingCountry" className="form-label">
              {props.title.country}
            </label>
            <Select
              // closeMenuOnSelect={false}
              noOptionsMessage={() => "ردیفی وجود ندارد!"}
              placeholder=""
              getOptionLabel={(option) => option.title}
              getOptionValue={(option) => option.title}
              value={selectedValue.country}
              onChange={countryChangehandler}
              options={countryState.data}
              isLoading={isLoading}
              className={error.countryId ? "rselect error" : ""}
              loadingMessage="در حال بارگذاری..."
              styles={{ menu: (base) => ({ ...base, zIndex: 9999 }) }}
            />
           
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3 relative">
            <label for="issuingProvince" className="form-label">
            {props.title.province}
            </label>
            <Select
              // closeMenuOnSelect={false}
              noOptionsMessage={() => "ردیفی وجود ندارد!"}
              placeholder=""
              getOptionLabel={(option) => option.title}
              getOptionValue={(option) => option.title}
              value={selectedValue.province}
              onChange={provinceChangehandler}
              options={provinceState.data}
              className={error.provinceId ? "rselect error" : ""}
              // isLoading={countryState.loading}
              loadingMessage="در حال بارگذاری..."
              styles={{ menu: (base) => ({ ...base, zIndex: 9999 }) }}
            />
           
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3 relative">
            <label for="issuingCity" className="form-label">
               {props.title.city}
            </label>
            <Select
              // closeMenuOnSelect={false}
              noOptionsMessage={() => "ردیفی وجود ندارد!"}
              placeholder=""
              getOptionLabel={(option) => option.title}
              getOptionValue={(option) => option.title}
              value={selectedValue.county}
              onChange={countyChangehandler}
              options={countyState.data}
              className={error.countyId ? "rselect error" : ""}
              // isLoading={provinceState.loading}
              loadingMessage="در حال بارگذاری..."
              styles={{ menu: (base) => ({ ...base, zIndex: 9999 }) }}
            />
           
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationDropdowns;
