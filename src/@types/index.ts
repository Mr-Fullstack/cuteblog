// Entities

interface UserLitleProps {
  id:number;
  name:string;
  email:string;
}

interface UserProps {
  name:string;
  email:string;
}

type UserTypeLabel = 'ADMIN' | 'READER' | 'EDITOR';

interface UserTypeProps  {
  id:number;
  label:UserTypeLabel;
}

interface UserEntityProps extends UserProps {
  id:number;
  typeUser:UserTypeProps;
}

interface PostProps {
  authorId:number;
  content:string;
  title:string;
  categories?:string[];
}


interface PostEntityProps extends PostProps{
  id:number;
  published:boolean|null;
  createdAt:Date|null;
  updatedAt:Date|null;
}


// API Request

interface UserPropsRequest{
  name:string;
  email:string;
}

// API Reponse 

type UserApiResponse =  {
  user: UserEntityProps
}

type ResponseData<T> = {
  payload?:T;
  error?:string;
  statusCode:number;
};

