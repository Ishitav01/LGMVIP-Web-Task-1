document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var gender = document.getElementById('gender').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var imageLink = document.getElementById('imageLink').value;
    var skills = Array.from(document.getElementsByName('skills'))
      .filter(function(checkbox) {
        return checkbox.checked;
      })
      .map(function(checkbox) {
        return checkbox.value;
      });
  
    var dataSetContainer = document.getElementById('dataSetContainer');
    var dataSetElement = document.createElement('div');
    dataSetElement.classList.add('data-set');
  
    var genderElement = document.createElement('p');
    genderElement.innerHTML = '<strong>Gender:</strong> ' + gender;
    dataSetElement.appendChild(genderElement);
  
    var nameElement = document.createElement('p');
    nameElement.innerHTML = '<strong>Name:</strong> ' + name;
    dataSetElement.appendChild(nameElement);
  
    var emailElement = document.createElement('p');
    emailElement.innerHTML = '<strong>Email:</strong> ' + email;
    dataSetElement.appendChild(emailElement);
  
    var imageElement = document.createElement('img');
    imageElement.src = imageLink;
    dataSetElement.appendChild(imageElement);
  
    var skillsElement = document.createElement('p');
    skillsElement.innerHTML = '<strong>Skills:</strong> ' + skills.join(', ');
    dataSetElement.appendChild(skillsElement);
  
    dataSetContainer.appendChild(dataSetElement);
  
    document.getElementById('registrationForm').reset();
  });
  