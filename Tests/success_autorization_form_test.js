const login = 'qatestlogin';
const password = 'aiKeichil4';
const email = 'some_email_box@qatesting.ml';

Feature('autorization_form');

Scenario('successful registration', (I) => {

	I.amOnPage('/');
	I.wait(1);
	I.click('Registration');
	I.wait(1);
	I.fillField('user_login', login);
	I.wait(1);
	I.fillField('user_email', email);
	I.wait(1);
	I.fillField('user_pass' ,password);
	I.wait(1);
	I.fillField('user_confirm_password', password);
	I.wait(1);
	I.click('//*[@id="user-registration-form-5"]/form/div[2]/button');
	I.wait(1);
	I.saveScreenshot('success_registration.png');
	I.wait(1);

});
