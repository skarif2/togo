import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check'

export const TogoColleciton = new Mongo.Collection('togos');

Meteor.methods({
	addTogo(togo) {
		console.log(togo);
	},
	updateTogo(togo, updatedTogo) {
		console.log(updatedTogo);
	},
	deleteTogo(togo) {
		console.log(togo);
	}
})