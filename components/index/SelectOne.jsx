import React, { Component } from "react";
import styles from "./SelectOne.module.css";

export default class SelectOne extends Component {

    onSelect = (id)=>{
        if(!this.props.disabled){
            this.props.onSelect(id);
        }
    }
    
    render(){

        let add_class = "";
        if(this.props.className){
            add_class += this.props.className+" ";
        }

        let btn_class = "";
        if(this.props.btn_class){
            btn_class+=this.props.btn_class+" ";
        } 

        return(
            <div className={styles.con+" "+add_class}>

                <div className={styles.title}>{this.props.title}</div>

                <div className={styles.select_con}>

                    {
                        this.props.options.map((v,i)=>(
                            <Select key={v.id} id={v.id} title={v.title}
                            className={btn_class}
                            onSelect={this.onSelect}
                            selected={this.props.selected}/>
                        ))
                    }

                </div>
                
            </div>
        )
    }
}

function Select(props){

    let add_class = "";

    if(props.className){
        add_class+= props.className+" ";
    }

    if(props.selected === props.id){
        add_class+= styles.sel_con_active+" ";
    }

    return(
        <div className={styles.sel_con+" "+add_class} 
        onClick={(e)=>{props.onSelect(props.id)}}>
            {props.title}
        </div>
    )
}