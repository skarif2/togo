import React, { Component } from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react'

export default class SingleTogo extends TrackerReact(Component) {
	render() {
		return(
			<div> 
				<p>SingleTogo</p>
			</div>
		)
	}
}