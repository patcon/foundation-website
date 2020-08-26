$(document).ready(function(){
  let activeModalContent = '';

  function accordionHandler () {
    $(this).find("button[js-toggle='icon']").toggleClass('active')
    $(this).siblings("div[js-data='faqAnswer']").slideToggle('fast')
    $(this).toggleClass('removeQuestionWrapperBorder')
  }

  function handleOpenContactUsModal () {
    $("div[js-view='modalOverlay']").show();
    $('body').css('overflow','hidden');
    $("div[js-view='contactUsModal']").slideDown();
    activeModalContent = 'contactUsModal';
  }

  function handleCreateInitiativeModal () {
    $("div[js-view='modalOverlay']").show();
    $('body').css('overflow','hidden');
    activeModalContent = 'createYourInitiativeModal';
    $("div[js-view='createYourInitiativeModal']").slideDown();
  }

  function handleCloseModal () {
    $(`div[js-view='${activeModalContent}']`).slideUp();
    $("div[js-view='modalOverlay']").hide();
    $('body').css('overflow','auto');
    activeModalContent = '';
  }

  function handleMobileMenuToggle () {
    $(".mobileNavOverlay").toggle()
    $(".mobileNavWrapper").animate({
      width: 'toggle'
    })
  }

  // Accordion 
  const faqPanels = $("div[js-toggle='question']");
  faqPanels.each((_index, panel) => panel.addEventListener('click', accordionHandler))

  // Open contact us  modal
  $("button[js-event='contactUs']").click(handleOpenContactUsModal)
  
  // Open create initiative modal
  $("button[js-event='applyToStart']").click(handleCreateInitiativeModal)

  // Close modal
  $("button[js-event='closeModal']").click(handleCloseModal)
  
  // Mobile menu toggle
  $(".js-menuToggle").click(handleMobileMenuToggle);

  //Handle on scroll
  $(window).scroll(function () {
    const scrollTop = $(document).scrollTop();
    if (scrollTop > 50) {
      $("header").addClass('stickyHeader')
    } else {
      $("header").removeClass('stickyHeader')
    }

    $("section[js-view='mainSection']").each((_index, section) => {
      const domRect = $(section)[0].getBoundingClientRect();
      const id = $(section).attr('id');
      if (domRect.top <= 77 && domRect.bottom > 77) {
        $(`a[js-link='${id}']`).addClass('active')
      } else {
        $(`a[js-link='${id}']`).removeClass('active')
      }
    })
  })
});
