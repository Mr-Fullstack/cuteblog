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
interface UserTypeProps  {
  id:number;
  label:'ADMIN' | 'READER' | 'EDITOR';
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

// APIs 

interface ApiErrorProps {
  message:string;
  code:number;
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

type UserCreateApiResponseSucess =  {
  data: UserApiResponse
}

type UserCreateApiResponseError =  {
  data: ApiErrorProps
}

type ResponseData = {
  payload?:any;
  message?:string;
  statusCode?:number;
};
 

// form 