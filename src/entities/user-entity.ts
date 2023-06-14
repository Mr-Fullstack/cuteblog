export class User {

  private props : UserEntityProps;

  constructor(props: UserEntityProps)
  {
    this.props = props;
  }

  get name(){
    return this.props.name;
  }

  get id(){

    return this.props.id;
  }

  get email(){

    return this.props.email;
  }

  get typeUser(){

    return this.props.typeUser;
  }

  // get token(){

  //   return this.props.token
  // }

  getAllProps(){

    return {
      id:this.props.id,
      name:this.props.name,
      email:this.props.email,
      typeUser:this.props.typeUser,
      // token:this.props.token
    }
  }
}