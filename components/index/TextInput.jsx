import { Tooltip } from "antd";
import React, { Component } from "react";
import styles from "./TextInput.module.css";

export default class TextInput extends Component {

    
    render(){
        
        let add_class = "";

        if(this.props.className){
            add_class+=this.props.className+" ";
        }

        return(
            <div className={styles.con+" "+add_class}>

                <div className={styles.title}>{this.props.title}</div>

                {
                    this.props.red_alert?
                    <div className={styles.sec1}>
                        
                        <input ref={this.props.input_ref} className={styles.input2} type={this.props.type} value={this.props.value}
                        placeholder={this.props.placeholder} onChange={e=>this.props.onChange(e.target.value)}/>
                        
                        <Tooltip placement={"top"} color="rgba(255,255,255,0.8)"
                        title={<span className={styles.tooltip}>{this.props.alert_title}</span>} >
                        <div className={styles.red_alert}>
                        {"!توجه"}
                        </div>
                        </Tooltip>

                    </div>
                    :
                    <input ref={this.props.input_ref} className={styles.input} type={this.props.type} value={this.props.value}
                    placeholder={this.props.placeholder} onChange={e=>this.props.onChange(e.target.value)}/>
                }

                {
                    (!this.props.red_alert && this.props.orange_alert)?
                    <img className={styles.orange_alert} src={"/statics/assets/svg/input_alert.svg"}/>:null
                }
                
            </div>
        )
    }
}