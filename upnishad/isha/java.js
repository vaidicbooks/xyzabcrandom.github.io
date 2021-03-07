function fire() {
  var page = document.getElementById('select').value;
    if (page == "") {
        window.location = "https://vedicbooks.cf/upnishad/isha"      
     } else {
         window.location= "https://vedicbooks.cf/upnishad/isha/" +page;     
        }
}