var gulp = require('gulp');
var spawn = require('child_process').spawn;

export function gulp_django_runserver(cb) {
    // https://www.caktusgroup.com/blog/2016/05/02/es6-django-lovers/
    console.log("Starting Django runserver");
    var args = ["manage.py", "runserver"];
    return spawn("python", args, {
        stdio: "inherit",
    });
};
