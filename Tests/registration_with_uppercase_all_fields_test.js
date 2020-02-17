const login = 'ADFQER';
const password = 'ASDFJQEWR';
const email = 'QATESTIN@QATESTING.ML';


Feature('registration_with_uppercase_all_fields');

Scenario('test something', (I) => {

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
        I.saveScreenshot('all_fields_uppercase.png');
        I.wait(1);
});
