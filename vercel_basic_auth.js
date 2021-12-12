const protect = require('static-auth')
const safeCompare = require('safe-compare')

const pageTemplate = `
<!doctype html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <title>認証エラー</title>
</head>

<body>
    <main>
        <h1>認証エラー</h1>
        <h2>401 Unauthorized</h2>
        <p>入力されたユーザー情報、もしくはパスワード情報が正しくありません</p>
    </main>
</body>

</html>
`

const app = protect(
    '/',
    (username, password) => safeCompare(username, process.env.USER_NAME)
        && safeCompare(password, process.env.PASSWORD),
    {
        directory: __dirname + '/out',
        realm: 'vercel-basic-auth.node-static-auth',
        onAuthFailed: res => {
            res.end(pageTemplate)
        }
    }
)

module.exports = app