// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {
    $('#board div').on('click', function(event) {
        // console.log(event.target);
        if($(event.target).empty()) {
            $(event.target).append("<span>X</span>");
        }
    })
});