import React from 'react'
class UserClass extends React.Component {
    constructor(name,location){
        super(name,location);
    }
    render() {
        console.log("name 000",this.props.name)
        console.log("Location 9999", this.location);
        return (
            <div>
                <p>This is Class Component....</p>
                <h2>Name: {this.props.name}</h2>
                <h2>Location: Delhi</h2>
                <h2>Contact 7206834409</h2>
            </div>
        )
    }
}

export default UserClass;