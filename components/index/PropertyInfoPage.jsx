import React, { Component } from "react";
import styles from "./PropertyInfoPage.module.css";
import SelectSearch from "./SelectSearch";
import StringPicker from "./StringPicker";
import Switch from "./Switch";
import TextInput from "./TextInput";

export default class PropertyInfoPage extends Component {

    state={
        area:"",
        price:"",
        address:"",
        checked:true,
    }

    onInputChange = (key, value)=>{
        let obj={};
        obj[key]=value;
        this.setState(obj);
    }

    onStringPicker = (text)=>{
        console.log(this.address_input);
        if(this.state.address){this.state.address+=" "}
        this.state.address+=text+" ";
        this.setState(this.state, ()=>{
            this.address_input.focus();
        });
    }

    onCheckBox = (value)=>{
        this.setState({checked:value});
    }
    
    render(){
        return(
            <div className={styles.con}>

                <div className={styles.sec1}>

                    <TextInput title={"متراژ"} placeholder={"مترمربع 100"}
                    value={this.state.area} red_alert
                    alert_title={"متراژ حقیقی ملک، معیار تعرفه نهایی میباشد"}
                    className={styles.area_input} onChange={(t)=>this.onInputChange("area",t)}/>

                    <TextInput title={"قیمت"} placeholder={"تومان 100,000,000"}
                    value={this.state.price} orange_alert
                    className={styles.price_input} onChange={(t)=>this.onInputChange("price",t)}/>

                </div>

                <div className={styles.sec2}>

                    <div className={styles.location_title}>{"موقعیت"}</div>

                    <div className={styles.location_wrapper}>

                        <SelectSearch placeholder={"استان"}
                        options={states_list}/>

                        <SelectSearch placeholder={"شهر"}
                        options={cities_list}/>
                        
                        <SelectSearch placeholder={"محله"}
                        options={districts_list}/>

                    </div>

                </div>

                <div className={styles.sec3}>

                    <div className={styles.map_title}>{"محدود GPS"}</div>

                    <div className={styles.map_con}>

                        <div className={styles.map_backdrop}>

                            <div className={styles.map_text}>{"حدالامکان محدوده ملک را دقیق وارد نمایید مسئولیت عدم دسترسی به موقع کارشناس بر عهده شما می باشد."}</div>

                            <div className={styles.understood_btn+" amp_btn"}>{"متوجه شدم"}</div>

                        </div>

                    </div>

                </div>

                <div className={styles.sec4}>

                    <TextInput title={"آدرس شما"} value={this.state.address}
                    input_ref={(r)=>this.address_input=r}
                    placeholder={"مثال: شهرک ولیعصر، بلوار امام خمینی، ساختمان نیکو، پلاک۲"}
                    className={styles.address_input} onChange={(t)=>this.onInputChange("address",t)}/>

                    <StringPicker onSelect={this.onStringPicker}/>

                    <div className={styles.check_sec}>
                        
                        <Switch checked={this.state.checked} onChange={this.onCheckBox}/>
                       
                        <div className={styles.checkbox_title}>{"آدرس ملک من در آگهی برای عموم به نمایش گذاشته شود ."}</div>
                    
                    </div>

                </div>
                
            </div>
        )
    }
}

const states_list = [
    {
        id:"1", title:"تهران"
    },
    {
        id:"2", title:"گیلان"
    },
    {
        id:"3", title:"آذربایجان شرقی"
    },
]

const cities_list = [
    {
        id:"1", title:"فلان شهر و ..."
    },
    {
        id:"2", title:"شهر دیگر"
    },
    {
        id:"3", title:"شهری با اسمی بسیار بسیار طولانی"
    },
]

const districts_list = [
    {
        id:"1", title:"شهرداری"
    },
    {
        id:"2", title:"کوی دانشجو"
    },
]