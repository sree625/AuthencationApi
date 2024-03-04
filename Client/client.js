fetch("http://localhost:8000/addUser", {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
          name: "sreeekutty c",
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data, "datat"));