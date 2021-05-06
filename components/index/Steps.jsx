import React, { Component } from "react";
import styles from "./Steps.module.css";

export default class Steps extends Component {


    
    render(){
        return(
            <div className={styles.con}>

                <div className={styles.wrapper}>

                    <Step step={this.props.step} number={1} title={"درخواست"}/>
                    <Step step={this.props.step} number={2} title={"اطلاعات فردی"}/>
                    <Step step={this.props.step} number={3} title={"اطلاعات ملک"}/>
                    <Step step={this.props.step} number={4} title={"تاریخ و زمان"}/>
                    <Step step={this.props.step} number={5} title={"تایید پرداخت"}/>

                    <Line step={this.props.step} number={1}/>
                    <Line step={this.props.step} number={2}/>
                    <Line step={this.props.step} number={3}/>
                    <Line step={this.props.step} number={4}/>

                </div>

            </div>
        )
    }
}

function Step(props){

    let add_class="";
    let title_class="";
    if(props.step >= props.number){
        add_class+=styles.step_con_active+" ";
        title_class+=styles.step_title_active+" ";
    }

    return(
        <div className={styles.step_con+" "+add_class}>
            
            <span>{props.number}</span>

            <div className={styles.step_title+" "+title_class}>{props.title}</div>
            
        </div>
    )
}

function Line(props){

    let add_class = "";

    if(props.number>1){
        add_class += styles["prg_line"+props.number]+" ";
    }

    if(props.number < props.step){
        add_class += styles.prg_line_active;
    }

    return(
        <div className={styles.prg_line+" "+add_class}/>
    )
}