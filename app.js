$(function() {
    $('a[href*="#scrolldown"]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });

$(document).ready(function(){
    $('.submit').click(function (event) {

        const email = $(".email").val();
        const name = $(".name").val();
        const message = $(".message").val();
        const statusElm = $(".status");
        statusElm.empty();

        if (name.length > 1) {
            console.log("ok name");
        } else {
            event.preventDefault();
            statusElm.append("<div>** Name is not valid</div>")
        }

        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            console.log("ok email");
        } else {
            event.preventDefault();
            statusElm.append("<div>** Email is not valid</div>")
        }

        if (message.length > 20) {
            console.log("ok message)");
        } else {
            event.preventDefault();
            statusElm.append("<div> ** Message is too short</div>");
        }
    });
});

$(document).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});

const buttonContainer = document.querySelector('.buttonContainer');
const portfoliosContainer = document.querySelector('#portfoliosPortfoliosContainer');
const sassContainer = document.querySelector('#sassContainer');
const javascriptContainer = document.querySelector('#javascriptContainer');
const reactContainer = document.querySelector('#reactContainer');
const nodejsContainer = document.querySelector('#nodejsContainer');

function hideAll() {
    nodejsContainer.style.display = "none";
    javascriptContainer.style.display = "none";
    sassContainer.style.display = "none";
    portfoliosContainer.style.display = "none"; 
    reactContainer.style.display = "none";
}

document.querySelector('.buttonMain').onclick = () => {
    hideAll();
    portfoliosContainer.style.display = "flex";
    buttonContainer.style.marginBottom = "8em";
};

document.querySelector('.buttonSass').onclick = () => {
    hideAll();
    sassContainer.style.display = "flex";
    buttonContainer.style.marginBottom = "8em";
};

document.querySelector('.buttonJavascript').onclick = () => {
    hideAll();
    javascriptContainer.style.display = "block";
    buttonContainer.style.marginBottom = "2em";
};

document.querySelector('.buttonReact').onclick = () => {
    hideAll();
    reactContainer.style.display = "flex";
    buttonContainer.style.marginBottom = "8em";
};

document.querySelector('.buttonNodejs').onclick = () => {
    hideAll();
    nodejsContainer.style.display = "flex";
    buttonContainer.style.marginBottom = "8em";
};