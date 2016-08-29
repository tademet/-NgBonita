var gulp = require('gulp');
var ts = require('gulp-typescript');
var gulpFile = require('gulp-file');

gulp.task('npm', function() {
  var pkgJson = require('./package.json');
  var targetPkgJson = {};
  var fieldsToCopy = ['version', 'description', 'keywords', 'author', 'repository', 'license', 'bugs', 'homepage'];

  targetPkgJson['name'] = '@ng-bonita/ng-bonita';

  fieldsToCopy.forEach(function(field) { targetPkgJson[field] = pkgJson[field]; });

  targetPkgJson['main'] = 'index.js';
  targetPkgJson['jsnext:main'] = 'esm/index.js';

  targetPkgJson.peerDependencies = {};
  Object.keys(pkgJson.dependencies).forEach(function(dependency) {
    targetPkgJson.peerDependencies[dependency] = '^' + pkgJson.dependencies[dependency];
  });

  return gulp.src('README.md')
      .pipe(gulpFile('package.json', JSON.stringify(targetPkgJson, null, 2)))
      .pipe(gulp.dest('dist'));
});
