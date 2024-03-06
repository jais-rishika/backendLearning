//select the update form
        const fr = document.querySelector("#updateform");

        //from the above url finding out the id as it is not provided as a param
        const url = new URL(window.location.href);
        const pathname = url.pathname;
        const pathParts = pathname.split("/");
        const id = pathParts[pathParts.length - 1];
        
        fr.addEventListener("submit", async (event) => {
        event.preventDefault();
        
        //create a newform object
        const formData = new FormData(fr);
        const title = formData.get("title");
        const description = formData.get("description");

        try {
            //fetching the res from the page where update logic written -> updateTodo.js
            const response = await fetch(`/api/v1/updatetodo/${id}`, {
            //this is why u are able to use other than get and post and since the fact that form can only use post and get
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, description }),
            });

            alert("Data Updated Successfully");
            //going to gettodo 
            window.location.href="http://localhost:3000/api/v1/gettodo";
        } catch (err) {
            console.log(err.message);
        }
        });