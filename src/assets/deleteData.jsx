const apiUrl = "http://localhost:3000/api/task/";
let deleteData = async (id) => {
    try {
      let response = await fetch(apiUrl+id, {
        method: "DELETE",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await response.json();
      return data;
    } catch(e) {
      console.log(e);
      return null;
    }
  }
  export default deleteData ;
