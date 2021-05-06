import React, { Component } from "react";
import Steps from "../components/index/Steps";
import MainLayout from "../layouts/MainLayout";
import styles from "./index.module.css";
import RequestPage from "../components/index/RequestPage";
import PersonalInfoPage from "../components/index/PersonalInfoPage";
import PropertyInfoPage from "../components/index/PropertyInfoPage";

export default class index extends Component {

  constructor(props){
    super(props);
    this.state={
      estimated_min: 5,
      current_step: 1,
    }

    this.state.request_page = <RequestPage/>;

    this.state.personal_info_page = 
    <PersonalInfoPage/>;

    this.state.property_info_page = 
    <PropertyInfoPage/>;
  }

  onNext = ()=>{
    if(this.state.current_step < 3){
      this.setState({current_step:this.state.current_step+1})
    }
  }

  onBack = ()=>{
    if(this.state.current_step > 1){
      this.setState({current_step:this.state.current_step-1})
    }
  }
  
  render(){
    return(
      <MainLayout>

        <Steps step={this.state.current_step}/>

        <div className={styles.wrapper1}>

          {
            this.state.current_step===1?
            this.state.request_page:null
          }
          {
            this.state.current_step===2?
            this.state.personal_info_page:null
          }
          {
            this.state.current_step===3?
            this.state.property_info_page:null
          }

          <div className={styles.bot_nav_bar}>

            {
              this.state.current_step!==1?
              <div className={styles.bn_back_btn+" amp_btn"} onClick={this.onBack}>
                <img className={styles.bn_back_img} src="/statics/assets/svg/back_arrow.svg"/>
                {"مرحله قبل"}
              </div>:
              <div className={styles.estimated_min}>{"زمان پیش بینی شده "+this.state.estimated_min+" دقیقه"}</div>
            }

            <div className={styles.bn_next_btn+" amp_btn"} onClick={this.onNext}>
              {"مرحله بعد"}
              <img className={styles.bn_next_img} src="/statics/assets/svg/next_arrow.svg"/>
            </div>

          </div>

        </div>

      </MainLayout>
    )
  }
}

