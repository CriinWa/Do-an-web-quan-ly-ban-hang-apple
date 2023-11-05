let login_form_total = document.getElementById('form_login_total');

function open_login() {
    login_form_total.style.display = 'flex';
}
function close_login() {
    login_form_total.style.display = 'none';
}

var accounts = [
    { name: 'admin', password: 'admin123', phone: '123', address: '', gmail: ''}, 
    { name: 'Trần Gia Nguyễn', password: '123', phone: '0938412412', address: '159 Bùi Đình Túy, Phường 24, Quận Bình Thạnh, Thành phố Hồ Chí Minh', gmail:'trangianguyen.com@gmail.com'}
];
var index = -1;  

function check_login(event) {
    event.preventDefault();
    
    // Lấy giá trị từ form
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var login_notify =document.getElementById('login_notify');
    var login_text = document.getElementById('login_text');
    var div_login = document.getElementById('div_login');
    // Kiểm tra tài khoản và mật khẩu
    accounts.forEach(function(account, i) {
      if (account.phone === phone && account.password === password) {
        index = i;
      }
    });
    
    if (index !== -1) {
      login_text.innerHTML = "Xin chào,<br>" + accounts[index].name;
      div_login.onclick='';
      div_login.onmouseover=function() {
        showContent();
      };
      div_login.onmouseout=function() {
        hideContent();
      };
      close_login();
    } else {
        login_notify.style.backgroundColor='#FFB200';
        login_notify.textContent = 'Sai số điện thoại hoặc mật khẩu';
      setTimeout(function() {
        login_notify.style.backgroundColor = 'transparent';
        login_notify.textContent = '';
      }, 2000);
    }
  }
  
function showContent() {
    document.getElementById('div_logout').style.display = 'flex';
}
function hideContent() {
    document.getElementById('div_logout').style.display = 'none';
}

function logout() {
    var login_text = document.getElementById('login_text');
    var div_login = document.getElementById('div_login');
    index = -1;
    login_text.innerHTML = "Đăng<br>nhập";
    div_login.onmouseover='';
    div_login.onmouseout='';
    hideContent();
    div_login.onclick=function() {
        open_login();
    };
}