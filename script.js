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
    var formValidator = jQuery('#lp-pom-form-14 > form').validate({
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
        window.location.href = '//try.markhyman.com/brokenbrainep1/';
      }
    });
  }
);
