
type admin={
    adminName: string,
    privileges:string[]
}

type employee={
    name: string,
    empid:number,
    date: string
}


type QA=admin & employee 

let QAprofile:QA={
    adminName: "Qeagle",
    privileges:['server'],
    name: "Gauthami",
    empid:1001,
    date: "02-04-2026"
    
}

console.log(QAprofile);
