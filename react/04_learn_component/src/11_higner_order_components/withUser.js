import UserContext from "./UserContext";

function withUser(WrappedComponent) {
  return props => {
    return (
      <UserContext.Consumer>
        {
          user => <WrappedComponent {...props} {...user}/>
        }
      </UserContext.Consumer>
    )
  }
}

export default withUser