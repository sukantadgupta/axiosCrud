// const form = document.getElementById('myForm');

// form.addEventListener('submit', function(event) {
//   event.preventDefault(); // prevents the form from submitting and refreshing the page

//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const phone = document.getElementById('phone').value;

//   const userDetails = {
//     name: "John Doe",
//     email: "johndoe@example.com",
//     phone: "555-1234"
//   };
  

//   // Store the user details in local storage
//   localStorage.setItem('name', name);
//   localStorage.setItem('email', email);
//   localStorage.setItem('phone', phone);

//   // Optional: display a success message to the user
//   alert('User details saved successfully!');
// });






const myForm = document.getElementById('myForm');

axios.get("https://crudcrud.com/api/4e37d73afcac44f893299c37457d0084/appointmentData")
.then((res)=>{
  // console.log(res);
  showNewUserGet(res.data);
}
)

myForm.addEventListener('submit', function(event) {
  event.preventDefault(); // prevents the form from submitting and refreshing the page

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  const userDetails = {
    name: name,
    email: email,
    phone: phone,
  };

  axios.post("https://crudcrud.com/api/4e37d73afcac44f893299c37457d0084/appointmentData", userDetails)
  .then((res)=>{
    // console.log(res);
    showNewUserPost(res.data);
  }
  )

 
  
//   // Store the user details in local storage
//   localStorage.setItem('userDetails', JSON.stringify(userDetails));
  
//   const itemsList = document.getElementById('items');
  
//   // Create a single list item for all the user details
//   const detailsItem = document.createElement('li');
//   detailsItem.textContent = `Name: ${name}, Email: ${email}, Phone: ${phone}`;
 

//   const deleteItem = document.createElement('input');
//   deleteItem.type = "button";
//   deleteItem.value = "Delete";
 

//   deleteItem.onclick =() => {

//     localStorage.removeItem("userDetails");
//     itemsList.removeChild(detailsItem);
//   }

//   const editItem = document.createElement('input');
//   editItem.type = "button";
//   editItem.value = "Edit";
 

//   editItem.onclick =() => {

//     localStorage.removeItem("userDetails");
//     itemsList.removeChild(detailsItem);
    
//  document.getElementById('name').value = name;
//    document.getElementById('email').value = email;
//   document.getElementById('phone').value = phone;
//   }

//   detailsItem.appendChild(deleteItem);
//   detailsItem.appendChild(editItem);

//   itemsList.appendChild(detailsItem);




});

function showNewUserPost(res){
  
  
  const itemsList = document.getElementById('items');
  
  // Create a single list item for all the user details
  const detailsItem = document.createElement('li');
  detailsItem.textContent = `Name: ${res.name}, Email: ${res.email}, Phone: ${res.phone}`;
  detailsItem.id = res._id;
;
  const deleteItem = document.createElement('input');
  deleteItem.type = "button";
  deleteItem.value = "Delete";
  detailsItem.id = res._id;
 

  deleteItem.onclick =(e) => {
// console.log(e.target)
     let user_id=detailsItem.id;
        axios.delete(`https://crudcrud.com/api/4e37d73afcac44f893299c37457d0084/appointmentData/${user_id}`)
        .then((res)=> {
            removeUserFromList(user_id)
        })
        .catch(()=>
        console.log(err))
      
      
  }

  const editItem = document.createElement('input');
  editItem.type = "button";
  editItem.value = "Edit";
 

  editItem.onclick =() => {

    localStorage.removeItem("userDetails");
    itemsList.removeChild(detailsItem);
    
 document.getElementById('name').value = name;
   document.getElementById('email').value = email;
  document.getElementById('phone').value = phone;
  }

  detailsItem.appendChild(deleteItem);
  detailsItem.appendChild(editItem);

  itemsList.appendChild(detailsItem);
} 

function showNewUserGet(res){
  
  
    const itemsList = document.getElementById('items');
    
    res.map((items,index) => {
        // console.log(`Name: ${items.name}, Email: ${items.email}, Phone: ${items.phone}`);
        const detailsItem = document.createElement('li');
        detailsItem.textContent = `Name: ${items.name}, Email: ${items.email}, Phone: ${items.phone}`;
        detailsItem.id = items._id;
      
        const deleteItem = document.createElement('input');
        deleteItem.type = "button";
        deleteItem.value = "Delete";
       
      
        deleteItem.onclick =() => {
      
        //   localStorage.removeItem("userDetails");
        //   itemsList.removeChild(detailsItem);
        let user_id=items._id;
        axios.delete(`https://crudcrud.com/api/4e37d73afcac44f893299c37457d0084/appointmentData/${items._id}`)
        .then((res)=> {
            removeUserFromList(user_id)
        })
        .catch(()=>
        console.log(err))
        }
      
        const editItem = document.createElement('input');
        editItem.type = "button";
        editItem.value = "Edit";
       
      
        editItem.onclick =() => {
      
          localStorage.removeItem("userDetails");
          itemsList.removeChild(detailsItem);
          
       document.getElementById('name').value = name;
         document.getElementById('email').value = email;
        document.getElementById('phone').value = phone;
        }
      
        detailsItem.appendChild(deleteItem);
        detailsItem.appendChild(editItem);
      
        itemsList.appendChild(detailsItem);

        
        
    })
    // Create a single list item for all the user details
   

  } 

  function removeUserFromList(userId){

    console.log(userId)

    const parentNode = document.getElementById("items");
    const childDelete = document.getElementById(userId);
    console.log(parentNode);
    console.log(childDelete);


    if(childDelete){
        parentNode.removeChild(childDelete);
    }
  }