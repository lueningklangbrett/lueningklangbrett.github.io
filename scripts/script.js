"use strict";

var spielt_gerade = null ;

function main(){
	
	document.rootNode.classList.remove("noscript") ;
	document.rootNode.classList.add("script") ;
	
	$$("section > ul > li").forEach(function(node, index, array){
	
		var audio = node.querySelector("audio") ;
		audio.controls = false ;
		
		node.addEventListener('click', function(){
			if(spielt_gerade != null) {
				spielt_gerade.pause() ;
				spielt_gerade.currentTime = 0 ;
			}
			audio.play() ;
			spielt_gerade = audio ;
		}, false) ;
	}) ;
	
	$$("section").forEach(function(node, index, array){
		
		var ul = node.querySelector("ul") ;
		
		ul.classList.add("nichtanzeigen") ;
		
		node.querySelector("h2").addEventListener('click', function() {
			
			ul.classList.toggle("nichtanzeigen") ;
			ul.classList.toggle("anzeigen") ;
			
		}) ;
	}) ;
	
}

document.addEventListener('DOMContentLoaded', function(){
	main() ;
}, false) ;