// Postar comentário
 function postear () {
    var firstcontainer2 = $("<div></div>");
    firstcontainer2.attr({
      class: 'comments',
    });
    $("#comment-section-post").append(firstcontainer2);
    var userName = "Silmara disse:";
    var user = $("<span></span>").text(userName);
    user.attr({
      class: 'font-weight-bold d-block littlefont',
    });
    firstcontainer2.append(user);
    var profile = $("<img></img>");
    profile.attr({
      class: 'littleprofile',
      src: "assets/images/profilefriends.png"
    });
    firstcontainer2.append(profile);
    var cardcommenttext2 = ($('#card-comment-post').val());
    var commentext = $("<span></span>").text(cardcommenttext2);
    firstcontainer2.append(commentext);
} 

$(document).ready(function () {


  /*compartilhando pensamentos"*/
  $('#bt-post').click(function () {
    $('#simplepost').clone().prependTo("#containerpost");
    $('#post-description').text(($('#comment').val()));
    $('#comment-section-post').html('');
    //apagar campos
    $('#comment').val('');
  }); //Final da função

 
  //Função colocar fotos
  function archivo(evt) {
    var files =  document.getElementById('files').files;

    //obtendo a imagem no campo file
    for (var i = 0, f; f = files[i]; i++) {
      //Apenas imagens são permitidas
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();
      
      reader.onload = (function (theFile) {
        return function (e) {
          // Criamos a imagem.
          document.getElementById("list").innerHTML = ['<img class=" thumb littlepicture d-block  mx-auto m-2 mb-4 mt-0" src="', e.target.result, '" title="', escape(theFile.name), '"/>'].join('');
        };
      })(f);
      reader.readAsDataURL(f);
    }
  }

  document.getElementById('bt-post').addEventListener('click', archivo, false);
});