import React, { Component, Fragment } from 'react'
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';

export class Tabset_post extends Component {
    render() {
        return (
            <Fragment>
                <form className="needs-validation ad-add" noValidate="">
                    <h4>Post Details</h4>
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> Postalt</label>
                        <input className="form-control col-xl-8 col-md-7" id="validationCustom0" type="text" required="" />
                    </div>
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> Keyword</label>
                        <input className="form-control col-xl-8 col-md-7" id="validationCustom1" type="text" required="" />
                    </div>
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> Image</label>
                        <input className="form-control col-xl-8 col-md-7" id="validationCustom2" type="file" required="" />
                    </div>
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> From Date</label>
                        <input className="form-control col-xl-8 col-md-7" id="validationCustom3" type="date" required="" />
                    </div>
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> To Date</label>
                        <input className="form-control col-xl-8 col-md-7" id="validationCustom4" type="date" required="" />
                    </div>
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> Place</label>
                        <input className="form-control col-xl-8 col-md-7" id="validationCustom4" type="text" required="" />
                    </div>
                    <div className="form-group row">
                        <label className="col-xl-3 col-md-4"><span>*</span> Country</label>
                        <input className="form-control col-xl-8 col-md-7" id="validationCustom4" type="text" required="" />
                    </div>
                </form>

                <div className="pull-left">
                    <button type="button" className="btn btn-primary">Cancel</button>
                </div>
                <div className="pull-right">
                    <button type="button" className="btn btn-primary">Save</button>
                </div>
            </Fragment>
        )
    }
}

export default Tabset_post
