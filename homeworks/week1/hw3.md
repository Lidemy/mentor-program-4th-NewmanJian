## 教你朋友 CLI

嗨嗨 HOW 哥，既然你誠心誠意地問了，我就大發慈悲的告訴你，首先你要知道 **什麼是Command line**? 

Command Line(CLI) 就是**透過純文字告訴電腦要做什麼**，我們平常要操作電腦都是使用 GUI介面(Graphical User Interface)，比如說點選<我的電腦>圖示，然後進入資料夾，雖然對使用者來說很方便，但是在寫程式的時候，直接透過文字對電腦下指令是比較快速的。

 要使用Command Line之前必須先有一個能跟電腦跟溝通的程式。
 MAC：直接搜尋terminal使用或是下載 [iTerm2](https://www.iterm2.com/)
 Windows：下載 [Git](https://gitforwindows.org/)，安裝完成 Git Bash 後就能使用

#### 基本指令
以下用Windows示範

* pwd(print working directory)：目前路徑

* ls(list segment):列印出所有檔案和路徑。ls -l 則會顯示更詳細的檔案資料，如檔案屬性、檔案數、建檔日期等

* cd(change directory)：切換資料夾
   cd.. : 回到上一層
   cd ~ : home目錄，使用者獨特的資料夾，像是我的文件夾
   cd / : 根目錄

* touch : 碰一下檔案，使其改變時間，如沒有檔案則會**新建檔案。**

* mkdir(make directory) : 創建資料夾

* rm　: 刪除檔案，rm file。
  rmdir　: 刪除資料夾，rmfdir folder，若資料夾有東西，會出現目錄不是空的，無法刪除
  rm -r ：rm-r folder 無論資料夾是否有檔案，都能直接刪除，另外要注意的是要回到檔案的上一層資料夾，才能進行刪除

* cp(copy) : copy hello_1 hello_2，複製新檔案hello_2

* mv(move) : 移動檔案或是重新命名
  絕對路徑：不會因為檔案位置而改變，如/Users/Newman

  相對路徑：目前檔案的路徑，是有可能改變的，如目前在/Users/Newman 輸入 mv desktop 會出現錯誤訊息，因為 Newman 底下沒有 desktop 這個資料夾

* clear：清除版面

 #### 進階指令 

* date：印出現在的時間

* cat(catenate)：連結檔案

* less: 分頁式印出檔案

* grep: 抓取特定關鍵字，如grep (文字) (檔案)

* echo: 印出字串，如echo Newman

* curl: 送出request

  
#### 綜合指令 

* `>` ：新增內容並覆蓋，如 echo "test" > tempo.txt，會加入test到tempo.txt裡面，並把tempo.txt的內容清空
  
* `>>`：只新增文字，不會清空原來的檔案

* |：把左邊的輸出 變成 右邊的輸入

好，我知道前面說了那麼多，你應該直接按end了，最後回答 HOW 哥的問題
1. mkdir wifi 建立 wifi 資料夾
2. cd wifi 切換到 wifi 資料夾
3. touch afu.js 建立 afu.js 檔案

打完收工


