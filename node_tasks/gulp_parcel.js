var gulp = require('gulp');
var spawn = require('child_process').spawn;

export function gulp_parcel(cb) {
    console.log("Starting Parcel bundler - minified");
    var args = ["build", "vue/vuemain.js", "-d", "vue/static/vue/", "--out-file", "vuemain.min.js", "--no-source-maps"];
    var runserver = spawn("parcel", args, {
        stdio: "inherit",
    });
    runserver.on('close', function(code) {
        if (code !== 0) {
            console.error('Parcel exited with error code: ' + code);
        } else {
            console.log('Parcel exited normally - minified');
        }
    });
    return runserver;
};

export function gulp_parcel_wrapped() {
    // hack for gulp.watch to work
    return gulp_parcel();
}

export function gulp_parcel_nomin(cb) {
    console.log("Starting Parcel bundler - no minify");
    var args = ["build", "vue/vuemain.js", "-d", "vue/static/vue/", "--out-file", "vuemain.js", "--no-source-maps", "--no-minify"];
    var runserver = spawn("parcel", args, {
        stdio: "inherit",
    });
    runserver.on('close', function(code) {
        if (code !== 0) {
            console.error('Parcel exited with error code: ' + code);
        } else {
            console.log('Parcel exited normally - no minify');
        }
    });
    return runserver;
};

export function gulp_parcel_wrapped_nomin() {
    // hack for gulp.watch to work
    return gulp_parcel_nomin();
}
