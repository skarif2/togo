import React, { Component } from 'react'

import AccountsUI from '../accounts/AccountsUI.jsx'

export const MainLayout = ({ content }) => (
	<div className = 'main-layout'>
		<div className="navbar-fixed">
	    <nav>
	      <div className="nav-wrapper">
	        <a href="#!" className="brand-logo">Togo</a>
	        <ul className="right hide-on-med-and-down">
	          <li><a href="sass.html">All Togo</a></li>
	          <li className="active"><a href="collapsible.html">JavaScript</a></li>
	          <AccountsUI />
	        </ul>
	      </div>
	    </nav>
	  </div>
		<main>
			{content}
		</main>
	</div>
)