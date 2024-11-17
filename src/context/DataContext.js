import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DataContext=createContext({})
export const DataProvider = ({children})=>{
    const [loginNumber,setLoginnumber] =useState('');
    const [loginMemberInfo,setloginMemberInfo]= useState([]||'');
    var loginmemberDetails =[];
    var [currentDueDate,setcurrentDueDate]=useState('');
   var loginMobileNo=0;
   var loginMemInfo={};
    const chitInfo = {
        chitPeriod:46,
        chit_due :250,
        chit_total_amt: 11500

    }

    ///Chit declare member information
   const chitMemberInfo = [
        {
        id: 1,
        enrolleName:"Chandra",
        mobileNO: 9976824238,
        chitCount : 3,
        paidweeks:1,
        inProgress:1,
        overDueWeek : 0,
        futureWeek:44
     },
     {
        id: 2,
        enrolleName:"KalaiSelvi",
        mobileNO: 9677780083,
        chitCount : 2,
        paidweeks:1,
        inProgress:1,
        overDueWeek : 0,
        futureWeek:44
     },

     {
        id: 3,
        enrolleName:"Malathi",
        mobileNO: 9944347004,
        chitCount : 1,
        paidweeks:1,
        inProgress:1,
        overDueWeek : 0,
        futureWeek:44
     },
     
     {
        id: 4,
        enrolleName:"Sasi",
        mobileNO: 6381106221,
        chitCount : 1,
        paidweeks:1,
        inProgress:1,
        overDueWeek : 0,
        futureWeek:44
     },
     
     {
        id: 5,
        enrolleName:"Sangeetha",
        mobileNO: 9965165324,
        chitCount : 1,
        paidweeks:1,
        inProgress:1,
        overDueWeek : 0,
        futureWeek:44
     },
     
     {
        id: 6,
        enrolleName:"Poobalan",
        mobileNO: 8220422903,
        chitCount : 1,
        paidweeks:0,
        inProgress:1,
        overDueWeek : 1,
        futureWeek:44
     },
     
     {
        id: 7,
        enrolleName:"Mathiyazhagan",
        mobileNO:8056054225,
        chitCount : 1,
        paidweeks:1,
        inProgress:1,
        overDueWeek : 0,
        futureWeek:44
     }


]

useEffect(() =>{
    loginMemInfo = sessionStorage.getItem("loginmemberDetail");
          
});
const currentDate = new Date();  const currentDay = currentDate.getDay();
let dueDate1 = currentDate.setDate(currentDate.getDate()+(7-currentDay))  ;
const dueDate = new Date(dueDate1).getDate()+ "/"+ (new Date(dueDate1).getMonth() +1 )+ "/" + new Date(dueDate1).getFullYear()        

    const navigate = useNavigate('');
    const handleLoginChit=async(e)=>{
        e.preventDefault();
        sessionStorage.setItem("loginid",loginNumber);
       await( setloginMemberInfo(chitMemberInfo.filter((chitmember)=>loginNumber===chitmember.mobileNO)))      
       sessionStorage.setItem("loginmemberDetail",JSON.stringify(chitMemberInfo.filter((chitmember)=>loginNumber===chitmember.mobileNO)));               
      if( chitMemberInfo.filter((chitmember)=>loginNumber===chitmember.mobileNO).length!==0){
        navigate("/Home")
      }
      else{
        navigate("/") ;
        alert("Enter the Correct mobile number");
 
      }    
      
    }
    return(
        <DataContext.Provider value={
            {

                handleLoginChit ,chitInfo,chitMemberInfo,setLoginnumber,loginNumber,loginMemberInfo,
                currentDueDate , loginMobileNo, loginMemInfo,loginmemberDetails,dueDate
            }
        }>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext
