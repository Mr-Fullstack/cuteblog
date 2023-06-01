export class Post {

  private props : PostEntityProps;

  constructor(props: PostEntityProps)
  {
    this.props = props;
  }

  get id(){

    return this.props.id
  }

  get title(){
    return this.props.title
  }

  get content(){

    return this.props.content
  }

  get published(){

    return this.props.published
  }

  get authorId(){

    return this.props.authorId
  }

  get categories(){

    return this.props.categories
  }

  get createdAt(){

    return this.props.createdAt
  }

  get updatedAt(){

    return this.props.updatedAt
  }
  

  getAllProps(){

    return {
      id:this.props.id,
      title:this.props.title,
      content:this.props.content,
      published:this.props.published,
      authorId:this.props.authorId,
      categories:this.props.categories,
      createdAt:this.props.createdAt,
      updateAt:this.props.updatedAt
    }
  }
}