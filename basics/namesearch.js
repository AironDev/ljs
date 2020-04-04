
// Check Name Availabiliy

function nameSearch(){
    let userNames = [
        'airon', 'jeemy', 'oscar', 'janet', 'willaims', 'charles', 'rany'
    ];

    // Method 1
/*
    userNames.forEach(userName => {
        if (userName == document.getElementById('namecheck').value){
            document.getElementById('result').innerHTML = 'Username already exist, please choose another name';
            document.getElementById('result').setAttribute("class", "text-danger");
            exit();
            
        }else{
             document.getElementById('result').innerHTML = 'Username is available';
             document.getElementById('result').setAttribute("class", "text-success");   
        }
    });
*/

// Mehod 2
    let result = userNames.filter(userName =>{
        if (userName == document.getElementById('namecheck').value){
            document.getElementById('result').innerHTML = 'Username already exist, please choose another name';
            document.getElementById('result').setAttribute("class", "text-danger");
            exit();
            
        }else{
             document.getElementById('result').innerHTML = 'Username is available';
             document.getElementById('result').setAttribute("class", "text-success");
            //alert('no match');          
        }
    });
}



