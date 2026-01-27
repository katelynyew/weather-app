// async function populate() {
//     const requestURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/toronto?unitGroup=uk&key=KNYUMZKWMSTCP7BPFFFEZ6ZNN&contentType=json";
//     const request = new Request(requestURL);

//     const response = await fetch(request);
//     const result = await response.json();
    
//     console.log(result);
// }
// populate();

// fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/toronto?unitGroup=uk&key=KNYUMZKWMSTCP7BPFFFEZ6ZNN&contentType=json')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function(err) {
//         console.log(err);
//     })
const img = document.querySelector("img");


async function getImage() {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=XHcKrywITsh1tVreO4kNx9z8A0PVTMgz&s=nicorobin');
    const result = await response.json();
    const src = result.data.images.original.url;
    img.src = src;
}
getImage();
// fetch('https://api.giphy.com/v1/gifs/translate?api_key=XHcKrywITsh1tVreO4kNx9z8A0PVTMgz&s=nicorobin')
//     .then(function(response) {
//         return (response.json());
//     })
//     .then(function(response) {
//         img.src = response.data.images.original.url;
//     })
    

