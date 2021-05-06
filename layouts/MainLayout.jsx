import React, { Component } from "react";
import styles from "./MainLayout.module.css";

export default class MainLayout extends Component {

    componentDidMount(){
        if(window.innerWidth > 1280){
            let rem = ((window.innerWidth * 16) / 1280 );
            document.getElementsByTagName("html")[0].style.fontSize = `${rem}px`;
          }else if(window.innerWidth < 330){
            let rem = 14;
            document.getElementsByTagName("html")[0].style.fontSize = `${rem}px`;
          }
      
          window.addEventListener("resize", (e)=>{
              if(window.innerWidth > 1280){
                  let rem = ((window.innerWidth * 16) / 1280 );
                  document.getElementsByTagName("html")[0].style.fontSize = `${rem}px`;
              }else if(window.innerWidth < 330){
                document.getElementsByTagName("html")[0].style.fontSize = `${14}px`;
              }else{
                document.getElementsByTagName("html")[0].style.fontSize = `${16}px`;
              }
          });
    }
    
    render(){
        return(
            <>
            <div className={styles.MaLay_header_con}>

                <div className={styles.MaLay_header_wrapper}>

                    <img className={styles.MaLay_header_back_img} src="/statics/assets/svg/header_back.svg"/>

                    <img className={styles.MaLay_header_logo_img} src="/statics/assets/svg/logo.svg"/>

                    <div className={styles.MaLay_header_right_sec}>

                        <a href="/register" className={styles.MaLay_header_register_btn}>ورود / ثبت نام</a>
                        
                        <img className={styles.MaLay_header_menu_btn} src="/statics/assets/svg/header_menu_icon.svg"/>

                    </div>

                </div>

            </div>
            {
                this.props.children
            }
            </>
        )
    }
}