import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

import { MainLayout } from '../ui/Layouts/MainLayout.jsx'

import Togos from '../ui/togos/Togos.jsx'
import AddTogo from '../ui/togos/AddTogo.jsx'
import EditTogo from '../ui/togos/EditTogo.jsx'
import SingleTogo from '../ui/togos/SingleTogo.jsx'

FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (<Togos />)
		})
	}
})
FlowRouter.route('/togo/add', {
	action() {
		mount(MainLayout, {
			content: (<AddTogo />)
		})
	}
})
FlowRouter.route('/togo/:id', {
	action(params) {
		mount(MainLayout, {
			content: (<SingleTogo id={params.id}/>)
		})
	}
})
FlowRouter.route('/togo/edit/:id', {
	action(params) {
		mount(MainLayout, {
			content: (<EditTogo id={params.id}/>)
		})
	}
})