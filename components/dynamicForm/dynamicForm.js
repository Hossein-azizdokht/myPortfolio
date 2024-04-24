import { ArrowBackIos, ArrowForwardIos, Delete, DragHandle } from '@mui/icons-material';
import { Button, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react'

const DynamicForm = (props) => {

  console.log(props);
  // -- form filter change handler --------------------------------
  const handleChange = (e, i) => {

    let { name, value } = e.target;
    let newData = [...props?.init];
    newData[i] = {
      ...newData[i],
      [name]: value,
    };
    // console.log(newData);
    // setFilters(newData);
    props.handleChange(newData)
  }

  // -- Add row handler --------------------------------
  const handleAddFilter = () => {
    let newData = [...props?.init];
    props.handleChange([...newData, props.educationInit])
    // setFilters((prevFilters) => [
    //   ...prevFilters,
    //   props.init
    // ]);
  }
  // -- Remove handler --------------------------------
  const handleRemoveSpecificFilter = (i) => () => {
    let clonedData = [...props?.init];
    clonedData.splice(i, 1);
    props.handleChange(clonedData)
  }
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
    )
  }
  return (
    <div>
      <form className='p-4 mb-4'>
        {props.init?.map((item, i) => (
          <div className='relative' key={i}>
            <span className="inline-flex items-center rounded-md rounded-l-[100px] bg-blue-50 px-3 py-2 top-[3px] absolute right-[-55px] text-xs text-[18px] text-blue-700 ring-1 ring-inset ring-blue-700/10">{i + 1}</span>
            <div className="row">
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="grade" className="form-label">مقطع تحصیلی</label>
                  <input name='grade'
                    value={props.init[i]?.grade}
                    onChange={(e) => handleChange(e, i)}
                    type="text"
                    className="form-control"
                    id="grade"
                    aria-describedby="grade" />
                </div>
              </div>
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="major" className="form-label">رشته تحصیلی</label>
                  <input
                    type="text"
                    name="major"
                    autoComplete="off"
                    value={props.init[i]?.major}
                    onChange={(e) => handleChange(e, i)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="place" className="form-label">محل تحصیل</label>
                  <input
                    type="text"
                    name="place"
                    value={props.init[i]?.place}
                    onChange={(e) => handleChange(e, i)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="kind" className="form-label">نوع تحصیل</label>
                  <input
                    name="kind"
                    value={props.init[i]?.kind}
                    onChange={(e) => handleChange(e, i)}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="startDate" className="form-label">تاریخ شروع</label>
                  <input
                    name="startDate"
                    value={props.init[i]?.startDate}
                    onChange={(e) => handleChange(e, i)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="endDate" className="form-label">تاریخ پایان</label>
                  <input
                    name="endDate"
                    value={props.init[i]?.endDate}
                    onChange={(e) => handleChange(e, i)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-3 column">
                <div className="mb-3 relative">
                  <label for="score" className="form-label">معدل</label>
                  <input
                    name="score"
                    value={props.init[i]?.score}
                    onChange={(e) => handleChange(e, i)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-2 column">
                <div className="mb-3 relative">
                  <label for="relevanceWithJob" className="form-label">ارتباط با شغل</label>
                  <input
                    name="relevanceWithJob"
                    value={props.init[i]?.relevanceWithJob}
                    onChange={(e) => handleChange(e, i)}
                    className="form-control"
                  />
                </div>
              </div>
              {props.init.length > 1 && (
                <div className="col-md-1 column ">
                  <Button
                    color="error"
                    onClick={handleRemoveSpecificFilter(i)}
                  >
                    <Delete />
                  </Button>
                </div>
              )}
            </div>
            <hr className={i == props.init.length - 1 ? '!mb-[-4px]' : ''} />
          </div>
        ))}
        <div className="row">
          <div className="col-md-12 column">


            <Button color="warning" className=' bg-slate-50 border-dashed border-slate-300 text-slate-400 w-100' disableElevation variant="outlined" onClick={handleAddFilter}>افزودن</Button>

          </div>
        </div>
      </form>
    </div >
  )
}


export default DynamicForm