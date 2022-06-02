        // 햄버거 메뉴

        if (window.matchMedia("(min-width: 1200px)").matches) {
            function openLeftMenu() {
                document.getElementById("left_menu").style.width = "30%";
            }/*-- #left_menu의 width를 변경시켜 왼쪽 메뉴가 나타날 수 있도록 함.--*/
            function closeLeftMenu() {
                document.getElementById("left_menu").style.width = "0%";
            }
        } else if(window.matchMedia("(min-width: 700px)").matches) {
            function openLeftMenu() {
                document.getElementById("left_menu").style.width = "40%";
            }/*-- #left_menu의 width를 변경시켜 왼쪽 메뉴가 나타날 수 있도록 함.--*/
            function closeLeftMenu() {
                document.getElementById("left_menu").style.width = "0%";
            }
        } else {
            function openLeftMenu() {
                document.getElementById("left_menu").style.width = "60%";
            }/*-- #left_menu의 width를 변경시켜 왼쪽 메뉴가 나타날 수 있도록 함.--*/
            function closeLeftMenu() {
                document.getElementById("left_menu").style.width = "0%";
            }
        };

            
            // dot 메뉴 시작
                // dot 메뉴 클릭시 active
                $(function () {
                    $('#dot_1').click(function () {
                        $('#dot_menu a').removeClass('active');
                        $('#dot_1').addClass('active');
                    });
                    $('#dot_2').click(function () {
                        $('#dot_menu a').removeClass('active');
                        $('#dot_2').addClass('active');
                    });
                    $('#dot_3').click(function () {
                        $('#dot_menu a').removeClass('active');
                        $('#dot_3').addClass('active');
                    });
                    $('#dot_4').click(function () {
                        $('#dot_menu a').removeClass('active');
                        $('#dot_4').addClass('active');
                    });
                    $('#dot_5').click(function () {
                        $('#dot_menu a').removeClass('active');
                        $('#dot_5').addClass('active');
                    });
                });
    
                // dot 메뉴 스크롤시 active
        if (window.matchMedia("(min-width: 1200px)").matches) {
            $(window).on("scroll", function () {
                if ($(window).scrollTop() >= 0) {
                    $("#dot_1").addClass("active");
                }
    
                if ($(window).scrollTop() >= 630) {
                    $("#dot_1").removeClass("active");
                    $("#dot_2").addClass("active");
                } else {
                    $("#dot_2").removeClass("active");
                }
    
                if ($(window).scrollTop() >= 850) {
                    $("#menu").css({"background-color":"rgba(255,255,255,0.9)"});
                    $("#menu").css({"height":"90px"});
                    $("#menu").css({"box-shadow":"0px 3px 15px rgba(0,0,0,0.2)"});
                } else {
                    $("#menu").css({"background-color":"transparent"});
                    $("#menu").css({"height":"180px"});
                    $("#menu").css({"box-shadow":"none"});
                } // 메뉴바 900PX 보다 스크롤 되는 경우 배경 생기게
    
                if ($(window).scrollTop() >= 1700) {
                    $("#dot_2").removeClass("active");
                    $("#dot_3").addClass("active");
                } else {
                    $("#dot_3").removeClass("active");
                }
    
                if ($(window).scrollTop() >= 2500) {
                    $("#dot_3").removeClass("active");
                    $("#dot_4").addClass("active");
                } else {
                    $("#dot_4").removeClass("active");
                }
    
                if ($(window).scrollTop() >= 3350) {
                    $("#dot_4").removeClass("active");
                    $("#dot_5").addClass("active");
                } else {
                    $("#dot_5").removeClass("active");
                }
    
                if ($(window).scrollTop() >= 4400) {
                    $("#dot_5").removeClass("active");
                }
            });
        } else if (window.matchMedia("(min-width: 700px)").matches) {
            $(window).on("scroll", function () {
                if ($(window).scrollTop() >= 0) {
                    $("#dot_1").addClass("active");
                }
    
                if ($(window).scrollTop() >= 630) {
                    $("#dot_1").removeClass("active");
                    $("#dot_2").addClass("active");
                } else {
                    $("#dot_2").removeClass("active");
                }
    
                if ($(window).scrollTop() >= 850) {
                    $("#menu").css({"background-color":"rgba(255,255,255,0.9)"});
                    $("#menu").css({"height":"90px"});
                    $("#menu").css({"box-shadow":"0px 3px 15px rgba(0,0,0,0.2)"});
                } else {
                    $("#menu").css({"background-color":"transparent"});
                    $("#menu").css({"height":"180px"});
                    $("#menu").css({"box-shadow":"none"});
                } // 메뉴바 900PX 보다 스크롤 되는 경우 배경 생기게
    
                if ($(window).scrollTop() >= 1400) {
                    $("#dot_2").removeClass("active");
                    $("#dot_3").addClass("active");
                } else {
                    $("#dot_3").removeClass("active");
                }
    
                if ($(window).scrollTop() >= 4050) {
                    $("#dot_3").removeClass("active");
                    $("#dot_4").addClass("active");
                } else {
                    $("#dot_4").removeClass("active");
                }
    
                if ($(window).scrollTop() >= 4800) {
                    $("#dot_4").removeClass("active");
                    $("#dot_5").addClass("active");
                } else {
                    $("#dot_5").removeClass("active");
                }
    
                if ($(window).scrollTop() >= 6000) {
                    $("#dot_5").removeClass("active");
                }
            });
        } else {
            $(window).on("scroll", function () {
                if ($(window).scrollTop() >= 0) {
                    $("#dot_1").addClass("active");
                }
    
                if ($(window).scrollTop() >= 630) {
                    $("#dot_1").removeClass("active");
                    $("#dot_2").addClass("active");
                } else {
                    $("#dot_2").removeClass("active");
                }
    
                if ($(window).scrollTop() >= 850) {
                    $("#menu").css({"background-color":"rgba(255,255,255,0.9)"});
                    $("#menu").css({"height":"90px"});
                    $("#menu").css({"box-shadow":"0px 3px 15px rgba(0,0,0,0.2)"});
                } else {
                    $("#menu").css({"background-color":"transparent"});
                    $("#menu").css({"height":"180px"});
                    $("#menu").css({"box-shadow":"none"});
                } // 메뉴바 900PX 보다 스크롤 되는 경우 배경 생기게
    
                if ($(window).scrollTop() >= 1400) {
                    $("#dot_2").removeClass("active");
                    $("#dot_3").addClass("active");
                } else {
                    $("#dot_3").removeClass("active");
                }
    
                if ($(window).scrollTop() >= 3000) {
                    $("#dot_3").removeClass("active");
                    $("#dot_4").addClass("active");
                } else {
                    $("#dot_4").removeClass("active");
                }
    
                if ($(window).scrollTop() >= 3650) {
                    $("#dot_4").removeClass("active");
                    $("#dot_5").addClass("active");
                } else {
                    $("#dot_5").removeClass("active");
                }
    
                if ($(window).scrollTop() >= 5100) {
                    $("#dot_5").removeClass("active");
                }
            });
        }
    
            //dot _menu 앵커 스크롤 애니메이션
                    $(document).ready(function ($) {
                        $("#dot_1").click(function (event) {
                            event.preventDefault();
                            $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
    
                        });
                        $("#dot_2").click(function (event) {
                            event.preventDefault();
                            $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
    
                        });
                        $("#dot_3").click(function (event) {
                            event.preventDefault();
                            $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
    
                        });
                        $("#dot_4").click(function (event) {
                            event.preventDefault();
                            $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
    
                        });
                        $("#dot_5").click(function (event) {
                            event.preventDefault();
                            $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
    
                        });
                    });
    
                    //popup
                    $(function () {
                        $('.main_campaign_baby_hover').click(function () {
                            $("#popup").fadeIn();
                        });
    
                        $('.close_btn').click(function () {
                            $("#popup").hide();
                        });
                    });
    
    
    