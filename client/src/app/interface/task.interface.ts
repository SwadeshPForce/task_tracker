export interface IAddTask{
   title: string,
    description: string,
}

export interface ITask extends IAddTask{
    _id: string,
    createdAt: string,
    updatedAt:string
}