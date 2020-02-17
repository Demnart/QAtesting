const login = 'qatestlogin';
const password = 'aiKeichil4';
const email = 'some_email_box@qatesting.ml';

Feature('autorization_form');

Scenario('successful registration', (I) => {

	I.amOnPage('/');
	I.wait(1);
	I.click('Registration');
	I.wait(1);

});
