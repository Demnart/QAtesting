const login = 'qatestlogin';
const password = 'aiKeichil4';
const check_password = '1234';

const email = 'some_email_box@qatesting.ml';

Feature('registration_with_incorrect_user_confirm_password');

Scenario('registration_with_incorrect_user_confirm_password', (I) => {

        I.amOnPage('/');
        I.wait(1);
        I.click('Registration');
        I.wait(1);
        I.fillField('user_login', login);
        I.wait(1);
        I.fillField('user_email', email);
        I.wait(1);
        I.fillField('user_pass' , password);
        I.wait(1);
        I.fillField('user_confirm_password', check_password);
        I.wait(1);
        I.click('//*[@id="user-registration-form-5"]/form/div[2]/button');
        I.wait(1);
        I.saveScreenshot('incorrect_user_confirm_password.png');
        I.wait(1);

});
