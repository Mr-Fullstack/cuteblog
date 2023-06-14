export class User {

  private props : UserEntityProps;

  get name() {
    return this.props.name;
  }

  get id() {

    return this.props.id;
  }

  get email() {

    return this.props.email;
  }

  get typeUser() {

    return this.props.typeUser;
  }

  getAllProps() {

    return {
      id:this.props.id,
      name:this.props.name,
      email:this.props.email,
      typeUser:this.props.typeUser,
      // token:this.props.token
    }
  }

  constructor(props: UserEntityProps)
  {
    this.props = props;
  }
  
}