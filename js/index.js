function ativaScrollSuave(seletor) {
  $(seletor).click(function (event) {
    event.preventDefault();
    var target = $(this).attr('href');

    $('html,body').animate({
      scrollTop: $(target).offset().top
    }, 1500)
  });
}

ativaScrollSuave('a[href*=sobre]')
ativaScrollSuave('a[href*=painel-palestrantes]')
ativaScrollSuave('a[href*=form-inscricao]')
