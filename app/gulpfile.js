// パッケージを読み込む
let gulp = require('gulp');

// タスク「hoge」を設定する
gulp.task('hoge', function()
{
    // タスク「hoge」の内容
    console.log('Hello from hoge');
});

// デフォルトタスクを設定する
gulp.task('default', function()
{
    // デフォルトタスクの内容
    console.log('Hello from default');
});