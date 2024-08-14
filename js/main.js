// date and time js code
function getDateTime() {
    var now = new Date(); 
    var year = now.getFullYear();
    var month = now.getMonth() + 1; 
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    
    // Convert 24-hour format to 12-hour format
    var period = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12; 
    
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
    
    var dateTime = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second + ' ' + period;
    
    return dateTime;
}

setInterval(function(){
    var currentTime = getDateTime();
    document.getElementById("current-dt").innerHTML = currentTime;
}, 1000);


// profile js code//
document.addEventListener('DOMContentLoaded', function () {
    const editBtn = document.getElementById('editBtn');
    const saveBtn = document.getElementById('saveBtn');
    const inputs = document.querySelectorAll('.form-control');
    const changeImageBtn = document.getElementById('changeImageBtn');
    const imageUpload = document.getElementById('imageUpload');
    const profileImage = document.getElementById('profileImage');

    // Handle profile image change
    changeImageBtn.addEventListener('click', function () {
        imageUpload.click(); // Trigger file input click
    });

    imageUpload.addEventListener('change', function () {
        const file = imageUpload.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profileImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle edit button click
    editBtn.addEventListener('click', function () {
        inputs.forEach(input => input.removeAttribute('readonly'));
        editBtn.style.display = 'none';
        saveBtn.style.display = 'inline-block';
    });

    saveBtn.addEventListener('click', function () {
        inputs.forEach(input => input.setAttribute('readonly', true));
        editBtn.style.display = 'inline-block';
        saveBtn.style.display = 'none';

        // Update profile card with new values
        profileName.textContent = document.getElementById('fullName').value;
        profileRole.textContent = document.getElementById('email').value;
        profileLocation.textContent = document.getElementById('address').value;
    });
});