import React from "react";
import "./DatePicker.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actionCreators";

const DatePicker = ({ calendarDate, editorDate, location, handleClickButtonPreviousMonth, handleClickButtonNextMonth, handleClickButtonPreviousYear, handleClickButtonNextYear }) => {
  const currentRoute = location.pathname;
  let info = null;
  let handleClickButtonPrevious = null;
  let handleClickButtonNext = null;

  if (currentRoute === "/") {
    const month = calendarDate.toLocaleString("en-US", { month: "long" });
    const year = calendarDate.toLocaleString("en-US", { year: "numeric" });
    info = `${month}, ${year}`;
    handleClickButtonPrevious = handleClickButtonPreviousMonth;
    handleClickButtonNext = handleClickButtonNextMonth;
  } else if (currentRoute === "/editor") {
    const year = editorDate.toLocaleString("en-US", { year: "numeric" });
    info = `${year}`;
    handleClickButtonPrevious = handleClickButtonPreviousYear;
    handleClickButtonNext = handleClickButtonNextYear;
  }

  return (
    <div className="DatePicker">
      <button onClick={handleClickButtonPrevious}>{"<"}</button>
      <div>{info}</div>
      <button onClick={handleClickButtonNext}>{">"}</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    calendarDate: state.temporary.calendarDate,
    editorDate: state.temporary.editorDate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClickButtonPreviousMonth: () => dispatch(actionCreators.previousMonth()),
    handleClickButtonNextMonth: () => dispatch(actionCreators.nextMonth()),
    handleClickButtonPreviousYear: () => dispatch(actionCreators.previousYear()),
    handleClickButtonNextYear: () => dispatch(actionCreators.nextYear())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DatePicker)
);
