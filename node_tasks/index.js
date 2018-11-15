import gulp from 'gulp'

import { gulp_parcel, gulp_parcel_nomin } from './gulp_parcel.js'
import { gulp_django_runserver } from './gulp_django_commands.js'

gulp.task('parcel', gulp_parcel)
gulp.task('parcel_nomin', gulp_parcel_nomin)
gulp.task('runserver', gulp_django_runserver)

export function gulp_watch(done) {
    gulp.watch('vue/*', gulp.parallel('parcel'));
    done();
};

gulp.task('watch', gulp_watch)

// Runs when Gulp is called with no args.
gulp.task('default', gulp.parallel(['runserver', 'parcel', 'parcel_nomin', 'watch']))
