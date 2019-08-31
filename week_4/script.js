var rice_data = 0;
var wheat_data = 0;
var sugar_data =0;
var salt_data = 0;
var cofee_data = 0;
var oats_data = 0;
function add () {
	var rice = document.getElementById('rice_add').value;
	rice_data = rice_data + Number(rice)
	document.getElementById('show_details_rice').innerHTML = "Total Stock of Rice is =" + " " + rice_data +" " + "Unit";
}
function reduce () {
	var rice = document.getElementById('rice_minus').value;
	rice_data = rice_data - Number(rice)
	if (rice_data <= 50){
		alert('You have to add Rice in stock')
	}
	document.getElementById('show_details_rice').innerHTML = "Total Stock of Rice is =" +" " +rice_data +" "+ "Unit";
}
	
function wheat_add() {
	var wheat = document.getElementById('wheat_add').value;
	wheat_data = wheat_data+ Number(wheat)
	document.getElementById('show_details_wheat').innerHTML = "Total stock of wheat is =" +" " + wheat_data +" "+ "Unit";
}

function wheat_minus() {
	var wheat = document.getElementById('wheat_minus').value;
	wheat_data = wheat_data - Number(wheat)
	if (wheat_data <= 50){
		alert('You have to add wheat in stock')
	}
	document.getElementById('show_details_wheat').innerHTML = "Total stock of wheat is =" +" " + wheat_data +" "+ "Unit";
}

function sugar_add() {
	var sugar = document.getElementById('sugar_add').value;
	sugar_data = sugar_data + Number(sugar)
	document.getElementById('show_details_sugar').innerHTML = "Total stock of sugar is =" +" " + sugar_data +" "+ "Unit";
}

function sugar_minus() {
	var sugar = document.getElementById('sugar_minus').value;
	sugar_data = sugar_data - Number(sugar)
	if(sugar_data <=50){
		alert('You have to add sugar in stock')
	}
	document.getElementById('show_details_sugar').innerHTML = "Total Stock of sugar is =" +" " + sugar_data +" "+ "Unit";
}

function salt_add() {
	var salt = document.getElementById('salt_add').value;
	salt_data = salt_data + Number(salt)
	document.getElementById('show_details_salt').innerHTML = "Total stock of salt is =" +" " + salt_data +" "+ "Unit";
}

function salt_minus() {
	var salt = document.getElementById('salt_minus').value;
	salt_data = salt_data - Number(salt)
	if(salt_data <= 50){
		alert('You have to add salt in stock')
	}
	document.getElementById('show_details_salt').innerHTML = "Total Stock of salt is ="  +" " + salt_data +" "+ "Unit";
}

function cofee_add() {
	var cofee = document.getElementById('cofee_add').value;
	cofee_data = cofee_data + Number(cofee)
	document.getElementById('show_details_cofee').innerHTML = "Total stock of cofee is ="+" " + cofee_data +" "+ "Unit";
}

function cofee_minus() {
	var cofee = document.getElementById('cofee_minus').value;
	cofee_data = cofee_data - Number(cofee)
	if(cofee_data <= 50) {
		alert('You have to add cofee into Stock')
	}
	document.getElementById('show_details_cofee').innerHTML = "Total Stock of cofee is ="+" " + cofee_data +" "+ "Unit";
}

function oats_add() {
	var oats = document.getElementById('oats_add').value;
	oats_data = oats_data + Number(oats)
	document.getElementById('show_details_oats').innerHTML = "Total stock of oats is ="+" " + oats_data +" "+ "Unit";
}

function oats_minus() {
	var oats = document.getElementById('oats_minus').value;
	oats_data = oats_data - Number(oats)
	if (oats_data <= 50) {
		alert('You have to add Oats in stock')
	}
	document.getElementById('show_details_oats').innerHTML= "Total Stock of oats is ="+" " + oats_data +" "+ "Unit";
}