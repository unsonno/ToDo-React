const apiUrl = "http://localhost:3000/api/task/";
let getData = async (id="") => {
  try {
    let response = await fetch(apiUrl+id, {
      method: "GET",
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
export default getData;