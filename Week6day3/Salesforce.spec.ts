import { test, expect } from "@playwright/test"

 let Token:any
 let URL:any
 let tokenType:any
 let Id:any

test.describe.serial('Execute the script in serial mode', async()=>{


test("To generate the token using PW API", async ({ request }) => {

  let response= await request.post('https://login.salesforce.com/services/oauth2/token',
        {
            headers: {

                "Content-Type": "application/x-www-form-urlencoded"
            },
            form: {
                "grant_type": "password",
                "client_id": "3MVG9rZjd7MXFdLhTFd7jYNtTiu5DzDqdNCte5DvFnv7tbIspjQ9CGPizYGUq7h6T69VSmfqxT9yY2NS7tz84",
                "client_secret":"09FE1EF4BDD93B17821073243A441F8A780A639C21D925B575C1112A3F5E0DBE",
                "username": "gauthami.vn@testleaf.com",
                "password": "Testleaf@2026"
        }
    })
     let responsebody=await response.json()
        console.log(responsebody);

    console.log(response.status());
    console.log(response.statusText());

    expect(response.status()).toBe(200)
    expect(response.statusText()).toBe("OK")
 
    Token=responsebody.access_token
    console.log(Token);
    
    URL=responsebody.instance_url
    console.log(URL);
    
    tokenType=responsebody.token_type
    console.log(tokenType)

})


test("to create a lead using PW API", async({request})=>{

    let response=await request.post(`${URL}/services/data/v65.0/sobjects/Lead`,

        {
            headers:{

    "Content-Type":"application/json",
    "Authorization":`${tokenType} ${Token}`

            },

            data:{

                "FirstName" :"Hari",
                "LastName":"Prasad",
                "Company":"Testleaf",
                "Salutation":"Mr."

     }
})
    let responsebody=await response.json()
    console.log(responsebody);

    console.log(response.status());
    console.log(response.statusText());

    expect(response.status()).toBe(201)
    expect(response.statusText()).toBe("Created")

    Id=responsebody.id


})


test("to fetch lead using PW API", async({request})=>{

    let response=await request.get(`${URL}/services/data/v65.0/sobjects/Lead/${Id}`,

        {
            headers:{

    "Content-Type":"application/json",
    "Authorization":`${tokenType} ${Token}`

            }
})
    let responsebody=await response.json()
    console.log(responsebody);

    console.log(response.status());
    console.log(response.statusText());

    expect(response.status()).toBe(200)
    expect(response.statusText()).toBe("OK")

})


test("to update the lead using PW API", async({request})=>{

    let response=await request.patch(`${URL}/services/data/v65.0/sobjects/Lead/${Id}`,

        {
            headers:{

    "Content-Type":"application/json",
    "Authorization":`${tokenType} ${Token}`

            },

            data:{

                "FirstName" :"Babu",
                "LastName":"Manickam",
                "Company":"Qeagle",
                "Salutation":"Mr."

            }
})
    
    console.log(response.status());
    console.log(response.statusText());

    expect(response.status()).toBe(204)
    expect(response.statusText()).toBe("No Content")

})


test("to delete the lead using PW API", async({request})=>{

    let response=await request.delete(`${URL}/services/data/v65.0/sobjects/Lead/${Id}`,

        {
            headers:{

    "Content-Type":"application/json",
    "Authorization":`${tokenType} ${Token}`

            }
})
    
    console.log(response.status());
    console.log(response.statusText());

    expect(response.status()).toBe(204)
    expect(response.statusText()).toBe("No Content")

})
})