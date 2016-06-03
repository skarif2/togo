import React, { Component } from 'react'

export const MainLayout = ({ content }) => (
	<div className = 'main-layout'>
		<header>
			<h2>Welcome to Togo</h2>
		</header>
		<main>
			{content}
		</main>
	</div>
)