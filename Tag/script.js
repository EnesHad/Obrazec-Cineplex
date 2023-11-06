function formatPhoneNumber(input) {
  // Remove non-numeric characters
  const phoneNumber = input.value.replace(/\D/g, '');

  // Format the phone number with dashes
  input.value = phoneNumber.replace(/(\d{3})(\d{3})(\d{3})/, '$1-$2-$3');
};
function enforceLettersOnly(input) {
// Remove non-letter characters and update the input value
input.value = input.value.replace(/[^A-Za-z]+/g, '');
};





// Add an event listener to the form submission
document.getElementById("checkboxForm").addEventListener("submit", function(event) {
  const checkboxes = document.querySelectorAll('#checkboxForm input[type="checkbox"]');
  let checkedCount = 0;

  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      checkedCount++;
    }
  });

  if (checkedCount === 0) {
    alert("Please select at least one checkbox before submitting.");
    event.preventDefault(); // Prevent form submission if no checkboxes are selected
  }
});

// Add an event listener to enable the submit button when at least one checkbox is checked
document.getElementById("checkboxForm").addEventListener("change", function() {
  const checkboxes = document.querySelectorAll('#checkboxForm input[type="checkbox"]');
  let checkedCount = 0;

  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      checkedCount++;
    }
  });

  const submitButton = document.getElementById("submitButton");
  if (checkedCount > 0) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "disabled");
  }
});

