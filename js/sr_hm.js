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

            