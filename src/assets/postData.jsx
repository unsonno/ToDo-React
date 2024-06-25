const apiUrl = "http://localhost:3000/api/task/";
let postData = async (tarea) => {
    try {
      let response = await fetch(apiUrl, {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tarea)
      });
      let data = await response.json();
      return data;
    } catch(e) {
      console.log(e);
      return null;
    }
  };
  export default postData;