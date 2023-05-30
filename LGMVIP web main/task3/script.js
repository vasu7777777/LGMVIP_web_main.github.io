var submissions = [];

    document.getElementById("registrationForm").addEventListener("submit", function(event) {
      event.preventDefault();

    
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var image = document.getElementById("image").value;
      var gender = document.getElementById("gender").value;
      var skills = document.getElementById("skills").value;

      
      var submission = {
        name: name,
        email: email,
        image: image,
        gender: gender,
        skills: skills
      };

    
      submissions.push(submission);

      
      var output = document.getElementById("output");
      output.innerHTML = "<h2>Submitted Data:</h2>";

      for (var i = 0; i < submissions.length; i++) {
        output.innerHTML += "<div class='submission'>" +
          "<p><strong>Name:</strong> " + submissions[i].name + "</p>" +
          "<p><strong>Email:</strong> " + submissions[i].email + "</p>" +
          "<p><strong>Image:</strong></p>" +
          "<img src='" + submissions[i].image + "' alt='User Image' style='max-width: 10%'>" +
          "<p><strong>Gender:</strong> " + submissions[i].gender + "</p>" +
          "<p><strong>Skills:</strong> " + submissions[i].skills + "</p>" +
          "</div>";
      }


      document.getElementById("registrationForm").reset();
    });