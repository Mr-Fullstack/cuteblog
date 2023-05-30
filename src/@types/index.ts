// Entities

interface UserProps {
  name:string;
  email:string;
}

interface UserEntityProps extends UserProps {
  id:string;
  token:string;
}

interface PostProps {
  userId:string;
  content:string;
  label:string;
  categoryId:string;
}

interface PostEntityProps extends PostProps{

}

// APIs 

interface ApiErrorProps {
  message:string;
  code:number;
}



// API Request

interface UserPropsRequest{
  password:string;
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
  payload?: any;
  message?:string;
  statusCode?:number;
};
 