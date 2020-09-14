## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
1.`<hr/>`：水平線，在不同主題間插入以作區隔。

2.`<s>`：刪除線，在元素上顯示刪除線。

3.`<select>`：下拉選單，讓使用者在下拉選單中選取一個選項。

````` html
<select name ="device">
  <option value="iPad">iPad</option>
  <option value="iPhone">iPhone</option>
  <option value="Apple Watch">Apple Watch</option>
</select>
````` 

## 請問什麼是盒模型（box modal）
在 CSS 裡面，html 的每個元素都可被視作為一個盒子，每個盒子的結構由內到外有元素內容(content)、內邊距(padding)、邊框(border)和外邊距(margin)，然後可以針對這個盒子調整大小。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
inline：元素可在同一行內呈現，調整寬高和上下邊距不影響元素的排列位置，但其高度會被其內容撐開。

block：元素寬度預設會撐到最大，並且占滿整行，即使設定長寬和、margin和padding，但仍會占滿一整行。

inline-block：以inline的方式呈現，但同時擁有block的屬性，且能水平排列。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

static：正常流向，瀏覽器預設的排列方式，由上而下排列。

relative：相對定位，以static為基準，進行上下左右的移動。

absolute：絕對定位，其定位點是往上找第一個 position 不是 static 的元素。如上層找不到可定位的元素，會以body來作定位。

fixed：固定定位，把元素放在與瀏覽器的相對位置上，即使上下捲動頁面，仍然會在其位置。