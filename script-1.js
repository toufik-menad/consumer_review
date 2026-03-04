 function getFirstName(){
  const firstName = document.getElementById("firstName").value;
  console.log(firstName)
 }
 function getLastName(){
  const lastName = document.getElementById("lastName").value;
  console.log(lastName)
 }
 function getReview(){
  const review = document.getElementById("review").value;
  console.log(review)
 }
 
 function clearFirstName(){
  const firstNameClear = document.getElementById("firstName").value = " ";
  console.log(firstNameClear)
 }
 function clearLastName(){
  const lastNameClear = document.getElementById("lastName").value = " ";
  console.log(lastNameClear)
 }
 function clearReview(){
  const reviewClear = document.getElementById("review").value = " ";
  console.log(reviewClear)
 }

 async function getData() {
    const url = "https://api.dzplanet.shop/api/categories/with-products";
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error('Response status: ${response.status}');
        }
        const result = await response.json();
        console.log(result);
    } catch (error){
      console.log("error message");
    }
 }