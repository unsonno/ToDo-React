const apiUrl = "http://localhost:3000/api/task/";
let putData = async (obj) => {
    try {
      let response = await fetch(apiUrl+obj.id, {
        method: "PUT",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj)
      });
      let data = await response.json();
      return data;
    } catch(e) {
      console.log(e);
      return null;
    }
  }

  export default putData;