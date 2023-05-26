// DOM이 브라우저에 내장되어있기 때문에 우리는 HTML의 내용을
// Javascript로 접근 !!  제어 !! 할 수 있음
// 모든 DOM의 node들은 1. 속성 2. 메서드를 갖고 있음

// 아래 코드에서 속성과 메서드를 구분해보세요.
document.getElementById("demo").innerHTML = "Hello World!";

// getElementById("demo") get으로 시작하는 문물을 가지고와라 => 메서드
// .innerHTML => 속성

// DM에 접근 및 제어해보기 !

// document.getElementById{"test"}; = document.querySelector("#test")
// <ul id="test">
//    <li>첫 번째 메뉴</li>
//    <li>두 번째 메뉴</li>
//    <li>세 번째 메뉴</li>
//    </ul> */}

// document.querySelector("#test").children
// <li>첫 번째 메뉴</li>
// <li>두 번째 메뉴</li>
// <li>세 번째 메뉴</li>
// </ul>

// document.querySelector("#test").parentElement
{/* <nav>
<ul id="test">
    <li>첫 번째 메뉴</li>
    <li>두 번째 메뉴</li>
    <li>세 번째 메뉴</li>
</ul>
</nav> */}

// const newDiv = document.createElement('div');
// document.body.append(newDiv);
// => html 파일에 없는 자바스크립트 코드로 div를 생성하여 제어함

// document.querySelector("#test").children[1].innerText = '변경한 두 번째 메뉴'
// <li>두 번째 메뉴</li> 내용을 자바스크립트 코드로 변경함

// document.getElementsByTagName('h1')[0].innerText = '변경한 메인 제목입니다!'
// <main>
// <h1>메인 영역의 제목입니다.</h1> => '변경한 메인 제목입니다! 변경 

//document.querySelector('footer').setAttribute("Style", "background-color: red;");
// 자바스크립트 코드를 통해 background-color를 변경함