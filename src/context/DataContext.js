import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/chitmembers"

const DataContext=createContext({})
export const DataProvider = ({children})=>{
    const navigate = useNavigate('');
    const [loginNumber,setLoginnumber] =useState('');  //need
    const [adminPassword,setadminPassword] =useState('');  // need
    const [chitmemberDetails, setchitmemberDetails] = useState([])
    const [paymentReceived, setPaymentReceived]=useState(false);
    const [open, setOpen] = useState(false);
    const [itm, setItem] = useState('');
   var loginMobileNo=0;  var loginmember=0; const loginPwd = 'Sumi@123'
   //Declare the Chit Scheme info
    const chitInfo = {
        chitPeriod:46,
        chit_due :250,
        chit_total_amt: 11500
    }

useEffect(() =>{
    //Get the Chit member detail from API
   const fetchPosts = async() =>{
        try {
            const response = await api.get('/chitmembers');
           // console.log(response.data);
            
                setchitmemberDetails(response.data);
            
        }catch(error)
        {
            if(error.response){
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else {
                console.log(`Error: ${error.message}`);
                
            }

        }
    }
fetchPosts();         
},[]);
//Get the Login chit mEmber detail from Api using Login id (mobile number)
//     console.log('Login chit member details',chitmemberDetails);   
//   console.log("Chit member length",chitmemberDetails.length);
  loginMobileNo = sessionStorage.getItem("loginid");  
  //IF member details available from API, then get filter chit member details using mobile number
  if(chitmemberDetails.length>0){
      loginmember= chitmemberDetails.filter((chitMember)=>{return chitMember.mobileNO == loginMobileNo})
   // console.log("chit member is ",loginmember);        
  } 

  // setting the Current period Due date. Due date is always Sunday
const currentDate = new Date();  const currentDay = currentDate.getDay();
let dueDate1 = currentDate.setDate(currentDate.getDate()+(7-currentDay))  ;
var dueDate = 0;
if(currentDay==0){
    dueDate = new Date().toLocaleDateString("hi-IN");  
}
else{
    dueDate = new Date(dueDate1).getDate()+ "/"+ (new Date(dueDate1).getMonth() +1 )+ "/" + new Date(dueDate1).getFullYear()        
}

   /// Maintain the Login button process for chit member 
    const handleLoginChit=(e)=>{
        e.preventDefault();
        sessionStorage.setItem("loginid",loginNumber);
        loginMobileNo = sessionStorage.getItem("loginid");  
        if(chitmemberDetails.length>0){
            loginmember= chitmemberDetails.filter((chitMember)=>{return chitMember.mobileNO == loginMobileNo})
          console.log("chit member is ",loginmember);        
        } 
        //if login id as a admin user id , then it move to password page
      if (loginMobileNo == '8754459104'){
        navigate("/adminPassword")
      }
      /// if login id not an admin and login id is a part of chit member details then it is move to HOME page
      else if(loginmember!=0){
        navigate("/Home")
        sessionStorage.setItem("loginmemberDetail",loginmember);
      }
      // login id not a chit member or admin alert will trigger
      else{
        navigate("/chitscheme") ;
        alert("Enter the Correct mobile number");
 
      }    
      
    }

    // Handling the admin password validation
    const handleAdminPwd = (e)=>{
        e.preventDefault();
        sessionStorage.setItem("adminpwd",adminPassword);
       if(adminPassword == loginPwd )
         navigate("/AdminViewPage") 
       else 
       {
        navigate("/adminPassword");   
        alert("Enter the Correct PAssword")}

    }

    //maintaining the Chit member details using PUT call using API

    const handleChitMembersDetails = async(id,e)=>{
        e.preventDefault();
        //increase the paid count  as 1 for chit member if they paid otherwise we will keep the same count member
        const paidCount = (paymentReceived) ? chitmemberDetails[id-1].paidweeks + 1 : chitmemberDetails[id-1].paidweeks;
       //Set the request body for PUT call
        const updatedChitmember = {id, enrolleName: chitmemberDetails[id-1].enrolleName ,
        mobileNO: chitmemberDetails[id-1].mobileNO,
        chitCount : chitmemberDetails[id-1].chitCount,
        paidweeks: paidCount,
        inProgress:chitmemberDetails[id-1].inProgress,
        overDueWeek : chitmemberDetails[id-1].overDueWeek,
        futureWeek: 46 - (paidCount + chitmemberDetails[id-1].inProgress +chitmemberDetails[id-1].overDueWeek)
       }
       //if Chit member paid the due, then put call will happen
       if (paymentReceived )  {
        console.log(chitmemberDetails[id-1].enrolleName);
        try{
            const response = await api.put(`/chitmembers/${id}`, updatedChitmember);
            console.log(response);
        } catch(err){
            console.log(err.message);
            
        }   
        }  else         
              console.log("wait for sometime");  
    // once done toggle the Open flag for  animation                  
       setOpen(!open)
       setPaymentReceived(false)        
    }

    //expand / collapse the content of chit member when click the button
    const handleEnrolleExpand = (id) =>{
        //  e.preventDefault();
          setItem(id);
          setOpen(!open)  
          if(open==false) setPaymentReceived(false);
      }
     //expand / collapse the content of chit member when click the button
    const handleCollapseChitmember = (id,e)=>{
        setOpen(!open) 
    }  

    return(
        <DataContext.Provider value={
            {

                handleLoginChit ,chitInfo,setLoginnumber,loginNumber,
                 loginMobileNo, dueDate,adminPassword,setadminPassword,
                 handleAdminPwd,chitmemberDetails,handleChitMembersDetails,setPaymentReceived,paymentReceived,
                 setOpen,open,itm, setItem,handleEnrolleExpand,handleCollapseChitmember,loginmember
            }
        }>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext
