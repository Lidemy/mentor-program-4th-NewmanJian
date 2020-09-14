## 交作業流程

1. 開啟 GitHub classom 找到 mentor-program-4th-NewmanJian，

2. clone GitHub 資料到自己的電腦
開啟 Git bash > git clone`https://github.com/Lidemy/mentor-program-4th-NewmanJian.git`。 > ls 看mentor-program-4th-NewmanJian的位置

3. 查看目前的 branch 
   > git branch -V 發現只有master

4. **建立新 branch** 
   > git branch week1

5. 切換到 branch week1 
   > git checkout week1 

6. **開始寫作業hw1** 寫完 hw1 後存檔，並查看目前狀態
   > git status 可以看到 hw1 被修改

7. 全部作業寫完後，
   > git commit -am week1 **在交作業前檢查是否都沒問題**

8. 將檔案推到 GitHub 自己遠端的repo
   > git push origin week1 
 
9. 開啟 GitHub 點 pull request

10. 點 compare & pull request

11. 點 creat pull request

12. 到 Lidemy學習系統的作業列表，新增作業，貼上PR的連結並送出

13. 助教改完作業後會在遠端 merge branch 到 master

14. 讓遠端的merge與本地同步，
    > 先 git checkout master，接著 git pull origin master

15. 本地與遠端同步之後，刪除本地branch week1
    > git branch -d week1