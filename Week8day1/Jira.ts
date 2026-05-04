import axios from "axios";

let email="gauthamshara@gmail.com"
let endPoint="https://gauthamshara.atlassian.net/rest/api/2/issue"
let apiToken="ATATT3xFfGF0q_aOPVmyKjPhWRdfO3-8dG_9F6tsrkNLIs1HXB29wd8QDry1yQdTb2SQMJbcUOG1TLJ4G_W_OpzgkhM8bPzD05rtBiXYxRP6lVWo1wKG7b6k7naJW0y8JhYTvGYyrPlglwSa7doCZ9rWC-ZtUss6E0NdEYQEtGVLVgrI3UTiF50=F323D773"
let apiKey="PM"



async function CreateIssue(Summary:string, Description:string){

const response= await axios.post(endPoint,
{

    "fields": {
"project":{
"key":apiKey
},

"summary":Summary,
"description":Description,

"issuetype": {
      "name": "Bug"
    },

    "assignee": {
      "id": "712020:b1411c88-7510-4387-afbd-1fc006ffe837"
    },


    }
},
{
    headers:{
        "Content-Type":"application/json"
    },
    auth:{

        "username":email,
        "password":apiToken
    }


})

console.log(response.data);
console.log(response.status);
console.log(response.statusText);




}

CreateIssue("Bug created through PW API","Creating Jira request")