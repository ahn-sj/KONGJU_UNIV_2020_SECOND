/*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
		[ login.html ]
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ*/

/* 로그인 관련 */
function loginchk() {
	// 1. 입력된 아이디 가져오기
	// 2. 입력된 비밀번호 가져오기
	// 3. 로그인 체크 (3개정도에 아이디 비밀번호를 미리 만들어놓고 IF문으로 )
	// -- id : user1 user2 user3 admin
	// -- pw : 1111  2222  3333  1234
	// 4. 유효성 체크
	
	/* id의 값을 가져옴 */
	var chk_id = document.getElementById("id").value;
	var chk_pw = document.getElementById("pw").value;
	/* 6) common.js 로그인 성공시 이동 페이지 지정 */
	// 로그인 체크 #01
	if(chk_id == "user1" && chk_pw == "1111") {
		alert("로그인 성공");
		// 로그인 성공 페이지
		location.href = "../HTML/Login_HTML/index.html";
	}
	else if(chk_id == "user2" && chk_pw == "2222") {
		alert("로그인 성공");
		// 로그인 성공 페이지
		location.href = "../HTML/Login_HTML/index.html";
	}
	else if(chk_id == "user3" && chk_pw == "3333") {
		alert("로그인 성공");
		// 로그인 성공 페이지
		location.href = "../HTML/Login_HTML/index.html";
	}
	
	else if(chk_id == "admin" && chk_pw == "1234") {
		alert("로그인 성공");
		// 로그인 성공 페이지
		location.href = "../HTML/Login_HTML/index.html";
	}
	
	else {
		alert("아이디 비밀번호가 일치하지 않습니다.");
	}	
}

/* 로그인시 enter키 입력 시 로그인 기능 */
function enterKey() {
	/* enter가 눌렸을 때 */
	if(window.event.keyCode == 13) {
		loginchk();
	}
}


/*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
		[ signUp.html ]
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ*/

function signUp_chk(){
	var signUp_id = document.getElementById("signUp_id").value;
	var signUp_email = document.getElementById("signUp_email").value;
	var signUp_pw = document.getElementById("signUp_pw").value;
	var signUp_pw_chk = document.getElementById("signUp_pw_chk").value;
	var signUp_name = document.getElementById("signUp_name").value;
	var yyy = document.getElementById("yyy").value;
	var mmm = document.getElementById("mmm").value;
	var ddd = document.getElementById("ddd").value;
	var signUp_gender = document.getElementById("signUp_gender").value;
	var signUp_phone = document.getElementById("signUp_phone").value;
	
	var pattern_chk1 = /[`~!@#$%^&*|\\\'\";:\/?]/gi; // 아이디 특수문자 체크
	var pattern_chk2 = /[0-9]/; 				// 비밀번호 숫자 체크
	var pattern_chk3 = /[a-zA-Z]/; 				// 문자 체크
	var pattern_chk4 = /[~!@#$%^&*()_+:{}]/;	// 특수문자 체크
	
	/* 아이디 유효성 체크 */
	if(signUp_id.length == 0){				// 미입력 체크
		alert("아이디를 입력해 주십시오.");
		return; // return만 사용하면 null반환
	}
	else if(signUp_id.search(/\s/) != -1) {	// 아이디 공백 체크
		alert("아이디에 공백은 들어갈 수 없습니다.");
		return; 
	}
	else if(pattern_chk1.test(signUp_id)){	// 아이디 특수문자 체크
		alert("아이디에 특수문자는 들어갈 수 없습니다.");
		return; 
	}
	
	/* 비밀번호 유효성 체크 / 8자리 이상 문자, 숫자, 특수문자를 혼용하여 구성 */
	else if(!pattern_chk2.test(signUp_pw)|| !pattern_chk3.test(signUp_pw) || !pattern_chk4.test(signUp_pw) || signUp_pw.length < 8){
		alert("비밀번호는 8자리 이상 문자, 숫자, 특수문자로 구성하여야 합니다.");
		return;
	}
	
	/* 비밀번호 재확인 체크 */
	else if(signUp_pw != signUp_pw_chk){
		alert("입력하신 비밀번호가 다릅니다.");
		return;
	}
	
	/* 이름 체크 */
	else if(signUp_name.length == 0){
		alert("이름을 입력해 주십시오.");
		return;
	}
	else if(signUp_name.search(/\s/) != -1){
		alert("이름에 공백은 들어갈 수 없습니다.");
		return;
	}
	
	else if(pattern_chk1.test(signUp_name)){
		alert("이름에 특수문자는 들어갈 수 없습니다.");
		return;
	}
	
	/* 생년월일 체크 */
	else if(yyy.length != 4){
		alert("년도는 4자리 숫자이어야 합니다.");
		return;
	}
	
	else if(mmm.length == 0){
		alert("month를 선택하세요.");
		return;
	}
	else if(ddd.length == 0){
		alert("day를 선택하세요.");
		return;
	}
	
	
	/* 성별 체크 */
	else if(signUp_gender.length == 0){
		alert("성별을 선택하세요.");
		return;
	}
	
	/* 휴대전화 체크 */
	else if(signUp_phone.length == 0 || pattern_chk1.test(signUp_phone) || !pattern_chk2.test(signUp_phone) || pattern_chk3.test(signUp_phone) || signUp_phone.search(/\s/) != -1) {
		alert("잘못된 휴대전화 정보입니다.");
		return;
	}
	
	/* 이메일 체크 */
	else if(signUp_email.length == 0){
		alert("email을 입력하세요.");
		return;
	}
	
	/* 유효성 체크 통과 시 가입 진행*/
	else {
		if(confirm("입력한 정보로 가입하시겠습니까?") == true){
			alert("가입되었습니다. 로그인 페이지로 이동합니다.");
			location.href = "../HTML/login_main.html";
		}
	}
}


/*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
		[ detail_fru_tangerine.html ]
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ*/
function product_buy() {
	var detail_fru_chk = document.getElementById("detail_fru_chk").value;
	
	if(confirm("구매하시겠습니까?") == true) { 
		if(detail_fru_chk == 0){
			alert("수량은 1개 이상을 선택해야 합니다.");
		}
		else {
			if(confirm("선택하신 수량이 " + detail_fru_chk + "개가 확실합니까?")== true){
				alert("구매가 완료되었습니다.")
			};
		}
	}
	else {
		alert("구매가 취소되었습니다");
	} 
}

function product_store() {
	if(confirm("장바구니에 담으시겠습니까?") == true) { 
		alert("장바구니에 추가되었습니다"); 
	}
	else {
		alert("취소 되었습니다");
	} 
}

function product_slang() {
		if(confirm("찜 하시겠습니까?") == true) { 
		alert("찜목록에 추가되었습니다"); 
	}
	else {
		alert("취소 되었습니다");
	} 	
}


/*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
		[ find_id_main.html ]
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ*/
/* 인증번호 받기 - 아이디 찾기 */
function findInfo_certification_number_receive() {
	var findInfo_name = document.getElementById("findInfo_name").value;
	var findInfo_mobile = document.getElementById("findInfo_mobile").value;
	
	var pattern_chk1 = /[`~!@#$%^&*()\\\'\\";:\/?]/gi; // 특수문자 체크
	var pattern_chk2 = /[0-9]/; // 숫자체크 
	var pattern_chk3 = /[a-zA-Z]/; // 문자 체크
	
	/* 이름 체크 */	
	if(findInfo_name.length == 0) {
		alert("이름을 입력해주세요");
		return;
	}
	else if(findInfo_name.search(/\s/) != -1) {
		alert("이름에 공백은 들어갈 수 없습니다.");
		return;
	}
	
	else if (pattern_chk1.test(findInfo_name)) {
		alert("이름에 특수문자는 들어갈 수 없습니다.");
		return;
	}
	
	/*휴대전화 체크*/	
	else if(findInfo_mobile.length == 0 || !pattern_chk2.test(findInfo_mobile) || pattern_chk3.test(findInfo_mobile) || findInfo_mobile.search(/\s/) != -1) {
		alert("잘못된 휴대전화 정보 입니다.");
		return;
	}
	
	/* 유효성 체크 통과시 인증번호 발송*/
	else {
		alert("인증번호가 발송되었습니다.");
	}
}

/* id 찾기 버튼 */
function findInfo_chk() {
	var findInfo_name = document.getElementById("findInfo_name").value;
	var findInfo_mobile = document.getElementById("findInfo_mobile").value;
	var findInfo_certfication = document.getElementById("findInfo_certfication").value;
	
	//alert("phone = " + findInfo_mobile);
	var pattern_chk1 = /[`~!@#$%^&*()\\\'\\";:\/?]/gi; // 특수문자 체크
	var pattern_chk2 = /[0-9]/; // 숫자체크 
	var pattern_chk3 = /[a-zA-Z]/; // 문자 체크
	
	/* 이름 체크 */
	if(findInfo_name.length == 0) {
		alert("이름을 입력해주세요");
		return;
	}
	else if(findInfo_name.search(/\s/) != -1) {
		alert("이름에 공백은 들어갈 수 없습니다.");
		return;
	}
	
	else if (pattern_chk1.test(findInfo_name)) {
		alert("이름에 특수문자는 들어갈 수 없습니다.");
		return;
	}
	
	else if (pattern_chk2.test(findInfo_name)){
		alert("이름에 숫자가 들어갈 수 없습니다.");
	}
	
	/*휴대전화 체크 */ 
	else if(findInfo_mobile.length == 0 || !pattern_chk2.test(findInfo_mobile) || pattern_chk3.test(findInfo_mobile) || findInfo_mobile.search(/\s/) != -1) {
		alert("잘못된 휴대전화 정보 입니다.");
		return;
	}
	
	/*인증번호 체크 */
	else if(findInfo_certfication.length == 0) {
		alert("인증번호를 입력해주세요.");
		return;
	}
	
	else if(findInfo_certfication.length != 6) {
		alert("인증번호 6자리를 입력해주세요.");
		return;
	}
	
	else if(pattern_chk3.test(findInfo_certfication) || pattern_chk1.test(findInfo_certfication)) {
		alert("인증번호에 문자나 특수문자는 들어갈 수 없습니다.");
		return;
	}
	
	else {
		alert("입력하신 회원정보가 존재하지 않습니다.");
		alert("로그인 페이지로 이동합니다.");
		location.href = "../HTML/login_main.html";
	}
}


/*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
		[ find_pw_main.html ]
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ*/
/* 인증번호 받기 - 비밀번호 찾기 */
function findInfo_certification_number_receive_2() {
	var findInfo_id = document.getElementById("findInfo_id").value;
	var findInfo_name = document.getElementById("findInfo_name").value;
	var findInfo_mobile = document.getElementById("findInfo_mobile").value;

	var pattern_chk1 = /[`~!@#$%^&*()\\\'\\";:\/?]/gi; // 특수문자 체크
	var pattern_chk2 = /[0-9]/; // 숫자체크 
	var pattern_chk3 = /[a-zA-Z]/; // 문자 체크
	
	/* 아이디 유효성 체크 */
	if(findInfo_id.length == 0) {
		alert("아이디를 입력해 주십시오.");
		return;
	}
	else if(findInfo_id.search(/\s/) != -1) {
		alert("아이디에 공백은 들어갈 수 없습니다.");
		return;
	}
	
	else if(pattern_chk1.test(findInfo_id)) {
		alert("아이디에 특수문자는 들어갈 수 없습니다.");
		return;
	}
	
	/* 이름 체크 */
	else if (findInfo_name.length == 0){
		alert("이름을 입력해 주십시오.");
		return;
	}
	
	else if(findInfo_name.search(/\s/) != -1) {
		alert("이름에 공백이 들어갈 수 없습니다.");
		return;
	}
	
	else if(pattern_chk1.test(findInfo_name)){
		alert("이름에 특수문자는 들어갈 수 없습니다.");
	}
	
	else if(findInfo_mobile.length == 0 || pattern_chk1.test(findInfo_mobile) || !pattern_chk2.test(findInfo_mobile) || pattern_chk3.test(findInfo_mobile) || findInfo_mobile.search(/\s/) != -1) {
		alert("잘못된 휴대전화 정보 입니다.");
		return;
	}

	/*유효성 체크 통과시 인증번호 발송 */
	else {
		alert("인증번호가 발송되었습니다.");		
	}	
}


/* 비밀번호 찾기 버튼 */
function findpw_chk() {
	var findInfo_id = document.getElementById("findInfo_id").value;
	var findInfo_name = document.getElementById("findInfo_name").value;
	var findInfo_mobile = document.getElementById("findInfo_mobile").value;
	var findInfo_certfication = document.getElementById("findInfo_certfication").value;
	
	var pattern_chk1 = /[`~!@#$%^&*()\\\'\\";:\/?]/gi; // 특수문자 체크
	var pattern_chk2 = /[0-9]/; // 숫자체크 
	var pattern_chk3 = /[a-zA-Z]/; // 문자 체크
	
	/* 아이디 유효성 체크 */
	if(findInfo_id.length == 0) {
		alert("아이디를 입력해 주십시오.");
		return;
	}
	else if(findInfo_id.search(/\s/) != -1) {
		alert("아이디에 공백은 들어갈 수 없습니다.");
		return;
	}
	
	else if(pattern_chk1.test(findInfo_id)) {
		alert("아이디에 특수문자는 들어갈 수 없습니다.");
		return;
	}
	
	/* 이름 체크 */
	else if (findInfo_name.length == 0){
		alert("이름을 입력해 주십시오.");
		return;
	}
	
	else if(findInfo_name.search(/\s/) != -1) {
		alert("이름에 공백이 들어갈 수 없습니다.");
		return;
	}
	
	else if(pattern_chk1.test(findInfo_name)){
		alert("이름에 특수문자는 들어갈 수 없습니다.");
	}
	
	else if(findInfo_mobile.length == 0 || pattern_chk1.test(findInfo_mobile) || !pattern_chk2.test(findInfo_mobile) || pattern_chk3.test(findInfo_mobile) || findInfo_mobile.search(/\s/) != -1) {
		alert("잘못된 휴대전화 정보 입니다.");
		return;
	}

	/*인증번호 체크 */
	else if(findInfo_certfication.length == 0) {
		alert("인증번호를 입력해주세요.");
		return;
	}
	
	else if(findInfo_certfication.length != 6) {
		alert("인증번호 6자리를 입력해주세요.");
		return;
	}
	
	else if(pattern_chk3.test(findInfo_certfication) || pattern_chk1.test(findInfo_certfication)) {
		alert("인증번호에 문자나 특수문자는 들어갈 수 없습니다.");
		return;
	}
	
	/*유효성 체크 통과시 비밀번호 찾기 진행*/
	else {
		alert("입력하신 휴대전화 번호로 임시 비밀번호를 발송하였습니다.");
		alert("로그인 페이지로 이동합니다.");
		location.href = "../HTML/login_main.html";
	}	
}

/*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
		[ index.html ]
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ*/
var num = 1;

function main_img_chg(index) {
	if(index) {
		if(num == 4)
			return alert("마지막 이미지입니다.");
		num++;
	} else {
		if(num == 1)
			return alert("첫 번째 이미지입니다.");
		num--;
	}
	var imgTag = document.getElementById("main_img_id");
	imgTag.setAttribute("src", "Images/main_img0" + num + ".jpg");
}

function main_img_chg_login(index) {
	if(index) {
		if(num == 4)
			return alert("마지막 이미지입니다.");
		num++;
	} else {
		if(num == 1)
			return alert("첫 번째 이미지입니다.");
		num--;
	}
	var imgTag = document.getElementById("main_img_id");
	imgTag.setAttribute("src", "../../Images/main_img0" + num + ".jpg");
}

function case_signup_login() {
	if(confirm("로그아웃 상태에서 회원가입을 할 수 있습니다. \n로그아웃 하시겠습니까?") == true){
		alert("로그아웃 되었습니다. \n회원가입 페이지로 이동합니다.");
		location.href = "../signUp.html";
	}	
}
/*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
		[ logout ]
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ*/
/* 로그아웃 확인 */
function logout_chk() {
	if(confirm("로그아웃 하시겠습니까?") == true){
		location.href = "../../index.html";
	}
}

