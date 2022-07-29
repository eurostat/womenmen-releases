//====================================================================================
// Modal Popup Window Variables
//====================================================================================
	
	var modalEnd;
	var modalStart;
	var modalFade;	
	var modalSpeed;
	var modalPopup;
	var popupTitle;
	var popupContent;
	var modalStyle;
	var modalWindow;
	var modalTitle;
	var modalBody;
	var modalContent;
	var modalclsBtn;

$(function() {	
		
//====================================================================================
// Initialise Modal Popup Window
//====================================================================================

	modalPopup  = '<div id="modalPopup" class="Modal">';
	modalPopup += '<div class="Modal-Content">';
	modalPopup += '<div class="Modal-Header">';
	modalPopup += '<span class="Modal-Title"></span>';
	modalPopup += '<span id="modalCloseBtn" class="close-btn">&times;</span></div>';
	modalPopup += '<div class="Modal-Body"></div>';
	modalPopup += '<div class="Modal-Footer">';
	modalPopup += '</div></div></div>';
		
	$("body").prepend(modalPopup);
		
	modalStyle 	 = {};
	modalFade	 = 400;
	modalSpeed	 = 500;
	modalEnd 	 = 0;
	modalStart 	 = "0px"; // change value to -600px to animate down from screen top
	modalWindow  = $(".Modal");
	modalTitle	 = $(".Modal-Title");
	modalBody	 = $(".Modal-Body");
	modalContent = $(".Modal-Content");
	modalclsBtn  = $("span #modalCloseBtn");
	
//====================================================================================
// Modal Popup Window
//====================================================================================

	openPopup = function(style, title, content){

		modalTitle.html(title);
		modalBody.html(content);
		
		modalWindow.css({"display":"block"});
		modalContent.css(style);
		modalContent.css({ top: modalStart});
		
		modalContent.animate({ top: modalEnd}, modalSpeed);
		
	}

	modalCloseBtn.onclick = function() {
		
		modalWindow.fadeOut(modalFade);
		
	}
	
	window.onclick = function(event) {

		if ($(event.target).hasClass("Modal")) {
			
			modalWindow.fadeOut(modalFade);
			
		}
		
	}

});