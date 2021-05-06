import React, { Component } from "react";
import styles from "./Switch.module.css";

export default class Switch extends Component {
    
    render(){

        let add_class="";
        let shape_class="";

        if(this.props.checked){
            add_class+=styles.checked_con;
            shape_class+=styles.checked_shape;
        }

        return(
            <div className={styles.con+" "+add_class} onClick={()=>this.props.onChange(!this.props.checked)}>

                <div className={styles.shape+" "+shape_class}/>
                
            </div>
        )
    }
}