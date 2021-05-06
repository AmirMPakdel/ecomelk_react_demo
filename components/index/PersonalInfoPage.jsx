import React, { Component } from "react";
import styles from "./PersonalInfoPage.module.css";
import SelectOne from "./SelectOne";
import TextInput from "./TextInput";

export default class PersonalInfoPage extends Component {

    state={
        first_name:"",
        last_name:"",
        owned_type: null,
        phone_number: "",
        national_code: "",
    }

    onTextChange = (key, value)=>{
        let obj = {};
        obj[key] = value;
        this.setState(obj);
    }

    onOwnedType = (id)=>{
        this.setState({owned_type:id})
    }
    
    render(){
        return(
            <div className={styles.con}>

                <TextInput title={"نام"} value={this.state.first_name}
                placeholder={"مثال: مهدی"} className={styles.odd_order}
                onChange={t=>this.onTextChange("first_name",t)}/>

                <TextInput title={"نام خانوادگی"} value={this.state.last_name}
                placeholder={"مثال: رزمی کلیمانی"} className={styles.even_order}
                onChange={t=>this.onTextChange("last_name",t)}/>

                <SelectOne className={styles.owned_type_con} btn_class={styles.owned_type_btn}
                title={"نوع تملک"} options={owned_type} selected={this.state.owned_type}
                onSelect={this.onOwnedType}/>

                <TextInput title={"شماره تماس"} value={this.state.phone_number}
                placeholder={"مثال: 0911878787"} className={styles.even_order}
                orange_alert
                onChange={t=>this.onTextChange("phone_number",t)}/>

                <TextInput title={"کد ملی"} value={this.state.national_code}
                placeholder={"مثال: 5700046318"} className={styles.odd_order}
                orange_alert
                onChange={t=>this.onTextChange("national_code",t)}/>
                
            </div>
        )
    }
}

const owned_type = [
    {
        id:"1", title:"مالک هستم"
    },
    {
        id:"2", title:"وکیل رسمی مالک"
    },
    {
        id:"3", title:"نماینده مالک"
    },
]