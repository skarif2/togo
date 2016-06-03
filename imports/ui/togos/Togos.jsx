import React, { Component } from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react'

import Togo from './Togo.jsx'

export default class Togos extends TrackerReact(Component) {

	render() {
		return(
			<div>

				<h3>What is your togo?</h3>

				<Togo />

			</div>
		)
	}
}