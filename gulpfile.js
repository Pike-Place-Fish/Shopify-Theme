/*==============================================================================================================================
| PIKE PLACE FISH SHOPIFY THEME: BUILD PROCESS
|
| Author        Katherine Trunkey, Ignia LLC (Katherine.Trunkey@Ignia.com)
| Client        Pike Place Fish
| Project       Shopify Theme
|
| Purpose       Scripts for Gulp-based build process, including minimization, compilation, and dependency management.
|
>===============================================================================================================================
| Revisions     Date            Author                  Comments
|- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
|               06.01.16        Katherine Trunkey       Created initial version.
\-----------------------------------------------------------------------------------------------------------------------------*/

/*==============================================================================================================================
| DEPENDENCIES
\-----------------------------------------------------------------------------------------------------------------------------*/
  var
    gulp                        = require("gulp"),
    watch                       = require('gulp-watch')
    gulpShopifyUpload           = require('gulp-shopify-upload'),
    gulpShopifySass             = require('gulp-shopify-sass'),
    variables                   = require('./gulpSecrets.js');

/*==============================================================================================================================
| TASK: DEFAULT
>-------------------------------------------------------------------------------------------------------------------------------
| The default task when Gulp runs, assuming no task is specified.
\-----------------------------------------------------------------------------------------------------------------------------*/
  gulp.task('default', ['shopifywatch', 'sass']);

/*==============================================================================================================================
| TASK: UPLOAD WATCH
>-------------------------------------------------------------------------------------------------------------------------------
| Runs the gulpShopifyUpload call, and includes settings for Shopify API authentication and theme ID.
\-----------------------------------------------------------------------------------------------------------------------------*/
  gulp.task('shopifywatch', function() {
    return
      watch('./+(assets|layout|config|snippets|templates|locales)/**')
      .pipe(gulpShopifyUpload(variables.shopifyApiKey, variables.shopifyApiPassword, variables.shopifyDomain, variables.shopifyThemeId));
  });

/*==============================================================================================================================
| TASK: SASS
>-------------------------------------------------------------------------------------------------------------------------------
| Runs the gulpShopifySass call, to concatenate separated Sass files into the single customized Timber theme Sass.
\-----------------------------------------------------------------------------------------------------------------------------*/
  gulp.task('sass', function() {
    return
      gulp.src('./*.scss')
      .pipe(gulpShopifySass());
  });
