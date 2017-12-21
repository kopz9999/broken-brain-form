requirejs.config({
  "paths": {
    "jquery.validate": "//cdn.jsdelivr.net/jquery.validation/1.15.1/jquery.validate.min"
  }
});    

require(
  [
    "jquery",
    "jquery.validate"
  ],
  function(jQuery){
    var triggerButton = jQuery('#lp-pom-button-15');
    var clonedTrigger = triggerButton.clone();
    var originalForm = jQuery('#lp-pom-form-14 > form');
    var formValidator = originalForm.validate({
      // Specify validation rules
      rules: {
        email: {
          required: true,
          email: true
        }
      },
      // Specify validation error messages
      messages: {
        email: {
          required: "Email is required",
          email: "Please enter a valid email address"
        }
      },
    })
    triggerButton.hide();
    clonedTrigger.insertAfter(triggerButton);
    clonedTrigger.click(function(e) {
      e.preventDefault();
      if (formValidator.form()) {
        jQuery.ajax({
          type: "POST",
          url: "https://us-central1-ontraport-api.cloudfunctions.net/contacts",
          contentType: "application/json",
          dataType: "json",
          data: JSON.stringify({
            firstname: originalForm.find('#first_name').val(),
            email: originalForm.find('#email').val()
          })
        }).done(function(resp) {
          console.log(resp);
          window.location.href = '/brokenbrainep1/';
        });
      }
    });
  }
);