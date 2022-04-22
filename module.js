import axios from "axios";

async function getData(userid) {
    if (userid != isNaN) {
        let {data : user} = await axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`);
        let {data : post} = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`);

        console.log(user,"post",post)
    } else {
        console.log("userID is not a number");
    }
}

export default getData;