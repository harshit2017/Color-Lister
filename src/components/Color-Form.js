import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddColor extends Component {

    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
        // we need to bind this explicitly with ES6 classes
    }




    submit(e) {
        const { _title, _color } = this.refs
        e.preventDefault()
        this.props.onNewColor(_title.value, _color.value)
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
        // focus on the title field

    }


    render() {
        return (
            <form onSubmit={this.submit}>
                <input type="text" ref="_title" placeholder="color title" required />
                <input type="color" ref="_color" required />
                <button>ADD</button>
            </form>
        )
    }
}

AddColor.propTypes = {
    onNewColor: PropTypes.func
}

AddColor.defaultProps={
    onNewColor:f=>f
}

// e is event object
// e.preventDefault prevents the default action of element 
// This prevents the form from trying to send a GET request once submitted. 
// ref is an identitfier that react uses to refernce the dom elements
//  Creating _title and _color ref attributes for each input means that we can access those elements with    this.refs._title or this.refs._color
export default AddColor

// To collect data from react component we have inverse data flow solution-
// it involves sending a callback function to the component as a property that the component can use to pass data 
// back as arguments