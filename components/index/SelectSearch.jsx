import React, { Component } from "react";
import styles from "./SelectSearch.module.css";
import { Select } from "antd";
import { Option } from "antd/lib/mentions";

export default class SelectSearch extends Component {

    
    onChange = ()=>{}

    onFocus = ()=>{}

    onBlur = ()=>{}

    onSearch = ()=>{}
    
    render(){
        return(
            <Select
                showSearch
                className={styles.con}
                dropdownClassName={styles.dropdown}
                placeholder={this.props.placeholder}
                optionFilterProp="children"
                onChange={this.onChange}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onSearch={this.onSearch}
                filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                {
                    this.props.options.map((v,i)=>(
                        <Option className={styles.option} key={i} value={v.id}>{v.title}</Option>
                    ))
                }
            </Select>
        )
    }
}