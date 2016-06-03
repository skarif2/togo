import React, { Component } from 'react'

export default class AddTogo extends Component {
	render() {
		return(
			<div>
				<h3>Add Togo</h3>
				<form>
	        <input
	          type='textarea'
	          rows='4'
	          cols='50'
	          ref='resolution'
	          placeholder='Add new resolution'
	        />
				</form>
			</div>
		)
	}
}