function initMaterialize() {
  (function($){
      $(function(){
    
        $('.button-collapse').sideNav();
        $('.parallax').parallax();
    
      }); // end of document ready
    })(jQuery); // end of jQuery name space
}

function initMaterializeModal() {
  $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      keyboard: true
      // ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
      //   // alert("Ready");
      //   // console.log(modal, trigger);
      // },
      // complete: function() { alert('Closed'); } // Callback for Modal close
    }
  );
  });
}

function closeModalBgLayer() {
  $('.modal-overlay').trigger('click');
}
