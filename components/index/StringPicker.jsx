import React, { Component } from "react";
import styles from "./StringPicker.module.css";

export default class StringPicker extends Component {
    
    render(){

        let add_class = "";
        if(this.props.className){
            add_class+= this.props.className+" ";
        }

        return(
            <div className={styles.con+" "+add_class}>

                {
                    strings.map((v,i)=>{


                        let className=styles.btn+" amp_btn ";
                        if(((i+1) % 4) == 0){
                            className+=styles.fourth_el
                        }
                        return(
                        <div className={className} onClick={()=>this.props.onSelect(v.text)} key={i}>{v.text}</div>
                        )
                    })
                }
                
            </div>
        )
    }
}

const strings = [
    {text:"شهرک"},
    {text:"میدان"},
    {text:"بلوار"},
    {text:"خیابان"},
    {text:"بزرگراه"},
    {text:"چهارراه"},
    {text:"کوچه"},
    {text:"بن بست"},
    {text:"بلوک"},
    {text:"ساختمان"},
    {text:"واحد"},
    {text:"پلاک"},
]