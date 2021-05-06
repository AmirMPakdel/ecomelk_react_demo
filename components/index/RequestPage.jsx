import React, { Component } from "react";
import styles from "./RequestPage.module.css";
import SelectOne from "./SelectOne";

export default class RequestPage extends Component {

    state={
        selected_request_type: null,
        selected_property_type: null,
    }

    onRequestTypeSelect = (id)=>{
        this.setState({selected_request_type:id})
    }

    onPropertyTypeSelect = (id)=>{
    this.setState({selected_property_type:id})
    }
    
    render(){
        return(
            <>
            <div className={styles.warning_title}>{" ! توجه"}</div>
            <div className={styles.warning_text}>
                {"کاربر گرامی دقت فرمایید آگهی شما نباید تکراری باشد"}
                <a href={"/someRoute"}>{"... ادامه"}</a>
            </div>

            <SelectOne title="نوع درخواست" options={request_types}
            selected={this.state.selected_request_type}
            onSelect={this.onRequestTypeSelect}/>

            <SelectOne title="نوع ملک" options={property_type}
            selected={this.state.selected_property_type}
            onSelect={this.onPropertyTypeSelect}
            disabled={this.state.selected_request_type===null}/>
            </>
        )
    }
}

const request_types = [
    {
      id:"1",
      title:"فروش",
    },
    {
      id:"2",
      title:"رهن و اجاره",
    }
  ];
  
  const property_type = [
    {
      id:"1", title:"آپارتمان",
    },
    {
      id:"2", title:"ویلا",
    },
    {
      id:"3", title:"زمین",
    },
    {
      id:"4", title:"اداری",
    },
    {
      id:"5", title:"تجاری",
    },
  ]