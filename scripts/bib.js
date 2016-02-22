"use strict";
// Beginn Bibliothek [
function $ (css) {	// Gibst ein Element zurück, wirft Fehler aus, wenn Selektor nichts findet
	var n = document.querySelector(css) ;
	if(n === null) {
		throw new Error("Selektor gibt kein Element zurück") ;
	}
	return n ;
}

function $$ (css) {	// Gibt alle passenden Elemente als Array zurück
	var arr = [] ,
		nl = document.querySelectorAll(css) ;
	for(var i = 0; i < nl.length; i++) {
		arr.push(nl[i]) ;
	}
	return arr ;
}

function $$$ (css) {	// Gibt alle passenden Elemente als NodeList zurück
	return document.querySelectorAll(css) ;
}

function toArray (v) {
	var arr = [] ;
	for(var i = 0; i < v.length; i++) {
		arr.push(v[i]) ;
	}
	return arr ;
}

function abs(x) {	
	return ((x < 0) ? (x * -1) : (x)) ;
}

function createURI(url, data) {	//Erstellt auf einem assoziativen Array basierend eine dynamische URI
	var r = url ;
	r += '?' ;
	Object.keys(data).forEach(function(d, i, ar){
		r += encodeURIComponent(d) ;
		r += "=" ;
		r += encodeURIComponent(data[d].toString()) ;
		if(i < (ar.length - 1)) {
			r += "&" ;
		}
	}) ;
	return r ;
}

function redirect(url) {		//Leitet automatisch an eine URI weiter
	open(url, '_self', '') ;
}

Object.defineProperty(document, 'rootNode', {	// Eigenschaft für den Wurzelknoten
	enumerable: true ,
	get: function(){
		var cn = toArray(document.childNodes),
			r ;
		cn.forEach(function(n) {
			if(n.nodeType === 1) {
				r = n ;
			}
		}) ;
		return r ;
	}
}) ;

// Einfache Dataset API
Object.defineProperty(Element.prototype, 'dataGet', {
	value: function (key) {
		return this.getAttribute('data-' + key) ;
	}
}) ;

Object.defineProperty(Element.prototype, 'dataSet', {
	value: function (key, value) {
		this.setAttribute('data-' + key, value) ;
	}
}) ;

//Duerchsucht und ersetzt den gesamten String
Object.defineProperty(String.prototype, 'replaceAll', {
	configurable: false,
	value: function _self (w, s) {
		var r = this ;
		var a = r.split(w) ;
		r = a.join(s) ;
		return r ;
	}
}) ;

//sub
Object.defineProperty(String.prototype, 'subscriptNumbers', {	//Stellt sämtliche Zahlen runter
	configurable: false,
	value: function(){
		
		var s = this ;
		
		s = s.replaceAll('0', "₀") ;
		s = s.replaceAll('1', "₁") ;
		s = s.replaceAll('2', "₂") ;
		s = s.replaceAll('3', "₃") ;
		s = s.replaceAll('4', "₄") ;
		s = s.replaceAll('5', "₅") ;
		s = s.replaceAll('6', "₆") ;
		s = s.replaceAll('7', "₇") ;
		s = s.replaceAll('8', "₈") ;
		s = s.replaceAll('9', "₉") ;
		
		return s ;
	}
}) ;

//superscript
Object.defineProperty(String.prototype, 'superscriptNumbers', {	//Stellt sämtliche Zahlen hoch
	configurable: false,
	value: function(){
		
		var s = this ;
		
		s = s.replaceAll('0', "⁰") ;
		s = s.replaceAll('1', "¹") ;
		s = s.replaceAll('2', "²") ;
		s = s.replaceAll('3', "³") ;
		s = s.replaceAll('4', "⁴") ;
		s = s.replaceAll('5', "⁵") ;
		s = s.replaceAll('6', "⁶") ;
		s = s.replaceAll('7', "⁷") ;
		s = s.replaceAll('8', "⁸") ;
		s = s.replaceAll('9', "⁹") ;
		
		return s ;
	}
}) ;

Object.defineProperty(Element.prototype, 'deleteNode', {	//Entfernt einen Knoten
	value: function(){
		this.parentNode.removeChild(this) ;
	}
}) ;

Object.defineProperty(Array.prototype, 'copy', {	//Kopiert den Array
	value: function(){
		var l = [] ;
		this.forEach(function(f){
			l.push(f) ;
		}) ;
		return l ;
	}
}) ;

Object.defineProperty(Object.prototype, 'copy', {	//Kopiert ein Objekt bzw. seine Eigenschaften
	value: function(){
		var that = this ;
		var o = {} ;
		Object.keys(this).forEach(function(a){
			o[a] = that[a] ;
		}) ;
		return o ;
	}
}) ;

Object.defineProperty(Object.prototype, 'copyProperties', { //Kopiert das gesamte Objekt
	value: function(){
		var o = {} ;
		for(var i in this) {
			o[i] = this[i] ;
		}
		return o ;
	}
}) ;

Object.defineProperty(window.location, 'data', {	//Bringt die GET-Parameter in einen assoziativen Array
	value: (function(){
		var d = {} ;
		var a = location.search.substring(1).split('&') ;
		
		a.forEach(function(i){
			var k = i.split('=') ;
			d[decodeURIComponent(k[0])] = decodeURIComponent(k[1]) ;
		}) ;
		
		return d ;
	})()
}) ;

Object.defineProperty(Element.prototype, 'offsetX', {	//Gibt die Entefernung eines Elementes vom linken Dokumentrand zurück
	get: function(){
		var x = 0,
			el = this ;
		do {
			x += el.offsetLeft ;
		} while (el = el.offsetParent) ;
		return x ;
	}
}) ;

Object.defineProperty(Element.prototype, 'offsetY', {	//Gibt die Entefernung eines Elementes vom oberen Dokumentrand zurück
	get: function(){
		var y = 0,
			el = this ;
		do {
			y += el.offsetTop ;
		} while (el = el.offsetParent) ;
		return y ;
	}
}) ;