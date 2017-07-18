/**
 * Created by helci on 7/18/2017.
 */

var Account = function () {
  this.email = undefined;
  this.name = undefined;
  this.surname = undefined;
  this.user = undefined;
  this.password = undefined;
};

var AccountController = {
    validateEmail:function () {
        if(isMailValid($("#accountEmail")))
            return true;
        else{
            return false;
        }
    },
    validateUserName:function () {
        
    },
    validateFields:function () {
        
    },
    createAccount:function () {
        
    }
};