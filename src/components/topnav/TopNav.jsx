import React from 'react'
import DropDown from '../dropdown/DropDown'
import notifications from '../../assets/JsonData/notification.json'
import user_image from '../../assets/images/tuat.png'
import user_menu from '../../assets/JsonData/user_menus.json'
import Thememenu from '../theme/Thememenu'

import './topnav.css'

import {Link} from 'react-router-dom'

// import firebase from '../../utils/firebase';
import { useEffect, useState } from "react";
import {onSnapshot ,collection} from 'firebase/firestore'
import db from "./../../utils/firebase"
// firebase.firestore().collection('notificaation').add({})

const curr_user ={
    display_name:'knoT',
    image:user_image
}

// const ref = firestore.collection("notificaation");
// console.log(ref);

const renderNotificationItem =(item,index) =>(
    <div className='notification-item' key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle =(user) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt=""/>
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
    )

const renderUserMenu=(item,index) =>(
        <Link to='/' key={index}>
            <div className="notification-item">
                <i className={item.icon}></i>
                <span>{item.content}</span>
            </div>
        </Link>
    )


const TopNav = () => {

  


    return (
        <div className='topnav'>
             <div className="topnav__search">
                 <input type="text" placeholder="Search here..."/>
                 <i className='bx bx-search'></i>
             </div>
             <div className="topnav__right">
                 <div className="topnav__right-item">
                     {}
                     <DropDown
                        customToggle={() => renderUserToggle(curr_user) }
                        contentData={user_menu}
                        renderItems={(item,index) => renderUserMenu(item,index)}
                     />
                 </div>
                 <div className="topnav__right-item">
                     {}
                     <DropDown
                        icon='bx bx-bell'
                        badge='12'
                        contentData={notifications}
                        renderItems={(item,index) => renderNotificationItem(item,index)}
                        renderFooter={()=><Link to='/'>View All</Link>}
                     />

                 </div>
                 
             </div>
        </div>
    )
}

export default TopNav
