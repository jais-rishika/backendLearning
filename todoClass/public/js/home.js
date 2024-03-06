        function getmoreinfo(element ,createdAt,description){
            const week=["Sunday",'Monday','Tuesday','Wednusday','Thursday','Friday','Saturday']
            const data = new Date(createdAt);
            const date = data.getDate();
            const month = data.getMonth();
            const year = data.getFullYear();
            const day = week[data.getDay()];
            const time = data.getMinutes();
            const hours = data.getHours();

            
            const moreinfoDiv=element.parentElement.querySelector('.moreinfo');
            let newdiv = moreinfoDiv.querySelector('.info');
            if(description.trim()!=''){
                moreinfoDiv.querySelector(".des").style.display='block'
            }
            if (!newdiv) {
                //create a new div element
                newdiv=document.createElement('div');
                newdiv.className="info";
                // Add content to the new div
                newdiv.innerHTML = `
                
                <div class="extra">
                    <span>Created At:</span>
                    <div>
                        <span class="key"> DATE:</span>
                        <span class="value"> ${date}/${month+1}/${year}</span>
                    </div>
                    <div>
                        <span class="key">DAY:</span>
                        <span class="value"> ${day}</span>
                    </div>
                    <div>
                        <span class="key">TIME:</span>
                        <span class="value"> ${hours}:${time}</span>                        
                    </div>
                </div>`
            ;

                // Append the new div to the moreinfo div
                moreinfoDiv.appendChild(newdiv);
            } 

        // /to be used at later stages
            else {
                // Modify the content of the existing div
                newdiv.innerHTML = `
                <div class="extra">
                    <span>Created At:</span>
                    <div>
                        <span class="key"> DATE:</span>
                        <span class="value"> ${date}/${month+1}/${year}</span>
                    </div>
                    <div>
                        <span class="key">DAY:</span>
                        <span class="value"> ${day}</span>
                    </div>
                    <div>
                        <span class="key">TIME:</span>
                        <span class="value"> ${hours}:${time}</span>                        
                    </div>
                </div>`
            }
            

            
            // Toggle the visibility of the moreinfo div
            if (moreinfoDiv.style.display === 'none' || moreinfoDiv.style.display === '') {
                moreinfoDiv.style.display = 'block';
                moreinfoDiv.appendChild(newdiv);
                element.querySelector('.imgarrow').setAttribute("src","/assets/uparrow.png")
            } else {
                moreinfoDiv.style.display = 'none';
                element.querySelector('.imgarrow').setAttribute("src","/assets/downarrow.png")
            }
        }
    
        async function del(id) {
            try{
                console.log(id);
                console.log("i am deleting");
                const res=await fetch(`/api/v1/deletetodo/${id}`,{
                    method: "DELETE",
                    headers: {
                    'Content-Type': 'application/json'
                    },
                })
                alert("data Deleted Successfully");
                window.location.href="http://localhost:3000/api/v1/gettodo";
                
            }
            catch(err){
                console.log("could not delete, sorry");
                console.log(err.message);
            }
        }
        async function updatebtn(id){
            try {
                // const response = await fetch(`/api/v1/gettodo/${id}`, {
                //     //this is why u are able to use other than get and post and since the fact that form can only use post and get
                //     method: "GET",
                //     headers: {
                //         "Content-Type": "application/json",
                //     },
                //     });
                // app.get()
                window.location.href=`http://localhost:3000/updatetodo/${id}`
              } catch (error) {
                console.error('Error fetching todo:', error);
              }
        }
        