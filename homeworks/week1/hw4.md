## 跟你朋友介紹 Git

嗨嗨蔡哥，其實關於 Git 我也是略懂略懂，~~建議你可以找一位叫 Huli 的~~ ，但說到 Git 就要來談**版本控制**的概念。工程師每天都需要編輯和新增很多檔案，使用 Git 可以紀錄每一次檔案詳細的狀態，而每一次修改的狀態就可以稱作「版本」，所以要回頭找某個版本時會容易得多。
另外 Git 還能用在團隊管理的部分，如果一個檔案有兩人以上同時修改，先編輯的檔案就容易被覆蓋，這時就會產生很大的問題。因此需要使用 branch 的功能，每位成員建立自已的 branch，並各自在上面進行編輯和修改，等版本穩定以後，再同步合併到主幹 master 上，可以避免各自版本不同步，或者改到同一份檔案產生衝突的情況。

就像蔡哥你有很多笑話，如果只用傳統的方式來命名版本，除了需要建立很多版本，而且很難只從名稱就得知改了什麼內容，因此用 Git 來管理的笑話，是非常適合的。使用 Git 之前需安裝軟體 [Git](https://gitforwindows.org/)，安裝完後可以輸入 git --version，看到版本號碼就表示安裝成功囉!

#### 歡迎來到 Git 的世界

1. 建立 Git 資料夾：mkdir git-demo

2. 切換到 git-demo 資料夾：cd git-demo

3. **初始化 git-demo 資料夾，讓 Git 對這個資料夾進行版控：git init**

4. 設定使用者和信箱：
   git config --global `user.name`  輸入自己的名稱
   git config --global `user.email` 輸入自己的email

#### 基本指令

* git status：查詢目前資料夾的狀態

* git add .：新增全部檔案到版本控制，git add . (file) **如果有編輯或新增檔案，一樣重複 git add . 這個步驟**

* git rm  --cached (file)：回復原來沒有版本控制的狀態

* git commit -m "訊息"：建立一個新版本，並輸入"訊息"

* git log：查詢版本的歷史資料

* git commit -am "訊息"：直接新增檔案並且 commit，可以想成(git add. + git commit)

* git checkout (版本名稱)：回到某個版本，用 git log 可查詢版本號

#### branch指令

* git branch：建立分支

* git branch -V：顯示目前分支

* git branch -m (branch)：重新命名分支

* git branch -d (branch)：刪除分支

#### GitHub 上建立遠端帳號

1. 新建一個 GitGub 帳號，新增一個repo

2. git clone repo url

3. git remote add origin url：設定連結遠端 branch

4. git push origin master：將本地的電腦檔案推到 GitHub

5. git pull origin master：把　GitHub　上最新的檔案抓下來到本地電腦


以上就是 Git 基本操作和教學，呵呵呵！












