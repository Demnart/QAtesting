const login = 'qatestlogin';
const password = 'aiKeichil4';

Feature('success_login_with_existed_user');

Scenario('success login', (I) => {

	I.amOnPage('/');
	I.wait(1);
	I.click('My Account');
	I.wait(1);
	I.fillField('username', login);
	I.wait(1);
	I.fillField('password', password);
	I.wait(1);
	I.click('//*[@id="rememberme"]');
	I.wait(1);
	I.click('login');
	I.wait(1);
	I.saveScreenshot('success_login.png');
	I.wait(1);
	I.click('Logout');


});
