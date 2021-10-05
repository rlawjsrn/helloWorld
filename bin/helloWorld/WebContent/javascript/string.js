'hello'.slice(0, 3); //0,1,2를 가져오겠다.
'hello'.substring(0, 3); //
'hello'.substr(1, 2) //1번 위치에서부터 2개값을 가져오겠다.

// 970101-2345678
// 990301-1234567
// 000503-3456789
// 010914567890


function checkGender(birthInfo) { //입력된 주민번호 => 남여 구분하는 함수.
    //2000년 01.01 이전 출생자 주민번호 뒷자리(1:남자, 2:여자)
    //2000년 01.01 이후 출생자 주민번호 뒷자리(3:남자, 4:여자)
    let substr = birthInfo.substr(7, 1)

    if (substr == '1' || substr == '3') {
        console.log("남자");
    } else if (substr == '2' || substr == '4') {
        console.log("여자");
    } else {
        console.log("오류");
    }

    return "남자" | "여자"
}

checkGender('970101-2345678'); //여자
checkGender('990301-1234567'); //남자
checkGender('000503-3456789'); //남자
checkGender('010914567890'); //오류