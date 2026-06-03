export enum Status{
    Completed='completed',
    Pending='Pending'
}


export interface IToDo{
    task:string,
    deadline:string,
    status:Status 
}