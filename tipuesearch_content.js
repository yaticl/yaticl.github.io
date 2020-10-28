var tipuesearch = {"pages":[{"title":"關於我","text":"我的個人部落格，用以學習、紀錄與分享。","tags":"pages","url":"https://blog.ya-ti.ml/pages/about.html","loc":"https://blog.ya-ti.ml/pages/about.html"},{"title":"如何更改 Microsoft Word 引用來源的語言","text":"緣起 在用 Microsoft Word 寫 paper 的時候，會需要加入引用文章，我通常是利用 Microsoft Academic 來儲存需要引用的文章，因為它可以將引用的文章輸出成可以被 Word 載入的 XML 檔案。由於 paper 基本都是用英文來寫，但是我們系統和城市的語言通常都是設定成中文，導致在 Word 中想要自動插入參考的時候會變成中英文夾雜，反而吃了 Word 的在地化設計這個優點的虧。 解決辦法 這個問題已經有人問過了，根據微軟 MVP 的 回答 ，有兩種方法可行。 方法一 Word 本身就有設定讓使用者編輯引用來源的語言，只要將語言由預設改成英文就可以了，如圖所示： 此方法最簡單直覺，但是需要一個一個編輯來源設定，操作起來比較麻煩。 方法二 另一個方法是修改引用來源的 XML 檔案，在每一個引用來源的 <Source> 標籤內加入一個語言的標籤 <LCID> 1033 </LCID> 1033 是英文 ( 美國 ) 的代碼，可以視需求更改。每一個引來源加入語言標籤後應該由符合如下的格式： <Source> ...# 省略其他標籤 <LCID> 1033 </LCID> </Source> 這種修改方法搭配文字編輯器的尋找功能可以比方法一的修改速度快很多。","tags":"Microsoft Office","url":"https://blog.ya-ti.ml/如何更改Microsoft-Word引用來源的語言.html","loc":"https://blog.ya-ti.ml/如何更改Microsoft-Word引用來源的語言.html"},{"title":"如何將網站從 WordPress 遷移至 Pelican","text":"緣起 由於最近我在免費主機上架的 WordPress 網站，可靠性愈來愈差了，自動更新版本常常失敗，新的外掛也裝不上去，網站連線速度也不快，不過畢竟是免費的主機，可靠性本來就無法保證，因此興起了將網站搬家的念頭。 因為我的網站都是靜態的內容為主，所以想要將網站架在 GitHub Pages 上。 由於我對 Python 比較熟悉，所以決定使用 Pelican 來生成靜態網站。 網站遷移成功之後就來記錄一下搬家的心得。 使用 Pelican Pelican 是一個用 Python 寫的靜態網站產生器，以 reStructuredText 或是 Markdown 格式來寫內容，支援自訂主題與擴充功能。 Pelican 就是個 Python module，可以簡單的用 Pip 安裝 ，因為我對 Markdown 比較熟悉，所以安裝 Markdown 版本。 新增 Pelican 專案可以參考官方 文件 ，網站基本結構如下： yourproject/ ├── content │ └── pages │ └── (articles) ├── output ├── pelicanconf.py # Main settings file └── publishconf.py # Settings to use when ready to publish Pelican 的內容分為兩種，其中 pages 為跟時間順序無關的靜態內容，而 articles 是跟有時間順序的內容。 pelicanconf.py 是生成網站用的設定檔案， publishconf.py 是發行網站用的設定檔案。 內容的檔案都需要在開頭加入 metadata，用來正確的生成網站結構，其中 Markdown 的格式為： Title : My super title Date : 2010 - 12 - 03 10 : 20 Modified : 2010 - 12 - 05 19 : 30 Category : Python Tags : pelican , publishing Slug : my - super - post Authors : Alexis Metaireau , Conan Doyle Summary : Short version for index and feeds This is the content of my super blog post . 在發行網站前，可以先用以下命令先在 http://localhost:8000 測試網站功能，詳細說明可以參考 文件 。 pelican --autoreload --listen 主題 Pelican 支援自訂主題，除了可以自行創作之外，社群也分享了很多 主題 可以直接採用，各種主題的效果也可以在 這裡 預覽。 要使用主題，只需要在 pelicanconf.py 當中加入主題的路徑： THEME = 'path/to/pelican-theme' 我現在用的主題是 Flex 。 擴充功能 Pelican 支援擴充功能 (Plugins) 來增強網站的功能，社群分享的擴充功能一樣可以在 GitHub 上找到。 要使用擴充功能，要在 pelicanconf.py 當中加入擴充的路徑與名稱： PLUGIN_PATHS = [ 'path/to/pelican-plugins' ] PLUGINS = [ 'assets' , 'sitemap' , 'gravatar' ] 匯入 WordPress 網站內容 Pelican 有提供 匯入工具 pelican-import ，可以將其他網站的內容轉換成 Markdown 或是 reStructuredText，期支援的格式包含 WordPress XML 檔案。 在使用 pelican-import 之前需要先安裝一些相依性，包含 BeautifulSoup4 、 lxml 與 Pandoc 。 若要將 WordPress XML 轉換為 Markdown 格式，使用方法為： pelican-import -m markdown --wpfile -o ~/output ~/posts.xml 由於無法完美的轉換內容，所以匯入之後還是需要手動修復依些內容。 佈署網站到 GitHub Pages 當網站準備好之後，就可以佈署到 GitHub Pages 上了，關於使用方式參考官方 文件 。 當設定好後，其佈署流程為： 1. 使用發行用的設定檔案 publishconf.py 產生網站檔案 pelican content -o /path/to/output -s publishconf.py 2. 將生成的網站檔案用 Git 的 push 命令將檔案上傳到用來發行 GitHub Pages 的 GitHub repository，假設網站檔案放在倉庫的 gh-pages branch，則其命令為 git push origin gh-pages","tags":"架站相關","url":"https://blog.ya-ti.ml/如何將網站從WordPress遷移至Pelican.html","loc":"https://blog.ya-ti.ml/如何將網站從WordPress遷移至Pelican.html"},{"title":"Microsoft Surface Pro X 體驗心得","text":"緣起 我是一位 Microsoft Surface 系列產品的長期使用者，每當微軟推出新型態的裝置時，如果有機會都想體驗一下。 微軟在 2019 的秋季發表會中推出了 Surface Pro X，是微軟首次親自推出的全時連網電腦 (Always-Connected PC)，根據微軟的 工程說明 ，該裝置為 2-in-1 型態的重新思考，並且再次嘗試搭載了 ARM 指令集的處理器。 雖然 Windows on ARM 的軟體支援度一直被媒體詬病，但是這件事從發表的時候就是已知，很多媒體也只是再講一次早就知道的事情，而且因為使用方式不同，某些方面無法提供我想要知道的資訊。由於很想知道台裝置的能耐，因此趁著近期的優惠想買來體驗一番。 這次入手的 Pro X 是 8 GB RAM、128 GB SSD 版本，從入手到現在已經體驗約一個多月，紀錄一下到目前為止的主觀體驗心得。 只對某些內容感興趣，可以使用下面的快速連結： 緣起 硬體 設計 配件 Type Cover Surface Slim Pen 性能 壓力測試 使用體驗 生產力體驗 日常體驗 電池續航力 關於 X86 程式 總結 硬體 設計 來跟手上持有的裝置來做個比較，從 Surface Pro 3 開始到現在，包含最近入手的 Pro X，已經持有過 5 台 Surface 裝置了，由於 Pro 3 已經轉給老爸了，現在手上有 4 台現役的裝置： 左一的 Pro X 是唯一黑色的 Surface，左二是之前的主力機 Book 2，右一是第一代的 Go，右二是我念碩班的夥伴 Pro ( 第五代 )，中間的手機是 Lumia 950，是除了這張照片以外負責拍照的相機。 由螢幕大小來個疊疊樂比較一下厚度： 可以看出來 Pro X 的厚度是最薄的 7.3 mm，機身也是最為圓潤，所以我覺得握持手感最好的一台 Surface。 由於本來 Pro X 是用來取代老 Pro ( 第五代 )，所以來比較一下： Pro X 的機身材質由鎂合金 + 烤漆變成了跟 Laptop 一樣的鋁合金 + 陽極氧化鋁上色，導致重量上沒有比 Pro ( 第五代 ) 輕多少，但優點是基本不會掉漆了。 Pro X 機身長度比 Pro ( 第五代 ) 短一點點但寬度長一點點，尺吋基本一樣。目前 Pro X 黑色一種顏色，好看是好看但是很沾指紋，希望以後也能像 Laptop 一樣推出多種顏色。 Type Cover 的厚度基本一樣，只有要放筆的那一塊地方比以前厚，如果是用不能放筆的鍵盤就基本一樣了。由於 Pro X 機身較薄，因此整體的厚度更薄了。 Pro X 相較 Pro ( 第五代 )，採用窄邊框的設計，塞入了更大的螢幕，大了 0.7 吋，設計上更加貼近現在的主流審美。 螢幕同樣都是 267 PPI，螢幕觀感基本一樣好。 再來跟 Book 2 比較一下： 比較之後可以發現面積沒有差很多，但是厚度差距非常明顯，重量差了約 600 公克，也就是一罐水的重量，攜帶性有一定的差距。 Pro X 因為窄邊框的設計，螢幕只比 Book 2 小 0.5 吋而已，且螢幕也都是 267 PPI，螢幕細膩度看不出區別。 配件 Pro X 相較於老 Pro 系列，除了機身的設計改變之外，配件也有改進。 Type Cover 我買的是包含 Surface Slim Pen 充電功能的 Type Cover，材質為微軟愛用的 Alcantara，筆是以磁力吸附在充電座上，一樣有一條磁鐵可以吸附在螢幕上，當不用筆的時候可以完全隱藏存在。 鍵盤和觸控板的部分基本上與老 Pro 系列的體驗相同，我覺得觸控板應該可以做更大一點。 另外鍵盤與機身的連接方式也從 6 pin 的金屬觸點，變成了類似 Surface Connect 的接口，所以鍵盤也不能跟舊款通用了。 鍵盤腕托底部增加了磁鐵，蓋上後可以吸住螢幕了，可以盡量避免放包包裡面時意外喚醒。 Surface Slim Pen Slim Pen 因為要無線充電的關係，外觀改成了親膚的塑膠材質，雖然筆身較細，但是我覺得握感沒有比較差。 筆尖改成類似鉛筆的設計，目前似乎沒有可以更換的筆尖。尾端一樣有橡皮擦功能，而且一樣也是個按鍵。 性能 Surface Pro X 搭載跟高通合作開發的 Microsoft SQ1 SoC，根據維基百科上的 資訊 ，應該是客製版的高通 Snapdragon 8cx，CPU 為 Kryo 495，4 大核 (3 GHz) + 4 小核 (1.80 GHz) 的設計，GPU 是 Adreno 685 (2100 GFLOPs)，整合 X24 LTE modem，支援 Gigabit LTE，使用 TSMC N7 製成，7 W TDP，號稱與 Pro 6 相比能源效率可高達三倍，規格上以高通的 ARM 晶片來說應該算是當代性能最好的等級。 大部分的時候，性能與 Book 2 比較感覺不出區別，多工的時候明顯比用 Intel 雙核處理器的 Pro 好。 壓力測試 根據官網的介紹，Pro X 搭載了碳複合無風扇冷卻系統，從 IFIXIT 的拆解圖可以大致了解其散熱模組主要由一塊均熱板與一根熱管所組成： 在冷氣房的環境之下，接上電源，電池未在充電狀態，電源模式調整為最佳效能，先使用 AIDA64 單烤 FPU 15 分鐘。 由於 AIDA64 很多感測器的數值無法正確讀出，我以工作管理員提供的數值為主，參考一篇 文章 ，前四個是小核心，後四個是大核心。 工作管理員的時脈數值，根據我的觀察，其顯示數值應該為： $$(\\text{ 核心時脈 } \\times \\text{ 核心負載 }) \\div \\text{ 啟用核心數量。}$$ 在全核心都滿載的情況下，時脈可以一直維持在 \\(2.38 \\text{ GHz} \\approxeq (3+1.8) \\div 2\\) ，推測是雖然號稱 3 GHz，但其實跟 Snapdragon 855+ 的最高時脈一樣是 2.96 GHz，這樣算出來的數值就完全符合了。 在相同的測試環境下，以 3DMark 中唯一支援 ARM 的 Night Raid 做 GPU 的壓力測試，測試結果以 99.9% 的成績通過。 在跑壓力測試的時候，用手直接摸機身背後，只感覺溫而已，甚至比手機還不熱，相較於 Pro ( 第五代 )、Book 2 還有 Go 等被動散熱的 Surface，相同的測試要以燙來形容。 由此可見，Pro X 可以較長時間完全發揮效能，而且機身的發熱量居然也不高。 事實上，快速充電的時候比壓力測試還熱。 使用體驗 生產力體驗 說到 Windows 平板電腦，主要賣點就是生產力。我的工作流程，主要需求的軟體是 Microsoft Edge、Microsoft Office 全套、Drawboard(PDF 閱讀與標記 )、Python、Visual Studio Code (VS Code) 還有遠端桌面。 這些軟體除了 Python 在 Windows on ARM 上沒原生支援外，其他都有原生支援。不過 Windows Subsystem for Linux (WSL) 這個好東西是原生，ARM 在 Linux 下的生態相較於 Windows 可就豐富了許多，有很多開源軟體可以用，例如前面提到的 Python，所以原生軟體不夠多，系統也可以來 2-in-1 一下。 最近剛好想要將我的部落格從 WordPress 改成用 Pelican (Python) 生成網頁然後 host 在 GitHub Pages ( 寫文章時候的這個網站 )，以 WSL 為後端，VS Code 和 Edge 為前端，我可以在 Pro X 上完成所有工作。 需要長時間或是高強度計算的工作，因為效率問題，也不會在之前的主力機 Book 2 上處理，本來就都是遠端到桌上型電腦來處理，Pro X 當然也能正常勝任。 因此我目前的工作流程都沒有因為是 ARM 處理器有太大的影響。 我在辦公室是使用 Surface Dock 接上一個 4K 與一個 1200P 的螢幕，對於都是用內建 GPU 輸出顯示的 Surface 來說壓力較大， 由於這一世代除了 Go 2 以外的 Surface，內建 GPU 性能比起以前孱弱的 Intel (U)HD 620 強不少，所以與圖形性能相關體驗 Pro X 反而比起 Book 2 好，動畫再也不會掉幀數了。 Pro X 的新設計還帶來了其他體驗的提升，因為 Pro X 的螢幕只比 Book 2 小 0.5 吋但是便攜性更高，出門負擔更低，並且比 Pro ( 第五代 ) 多支援 LTE 連網，所以只要有訊號的地方都能做事，可以更自由的選擇工作地點。 日常體驗 我日常對平板電腦的需求主要是上網、看影片與聽音樂，最常用的是 Edge、myTube! (Youtube)、bilibili (UWP) 與 Spotify ( 用 Edge 安裝成 PWA)，這些都是 ARM 原生，所以日常用的軟體體驗一如既往。 值得一提的是，Pro X 搭載 2W 的立體聲揚聲器，加上 Dolby Audio Premium 音效，聲音體驗比用過的 Surface 都好。 Pro X 支援全時連網，Instant On，按下電源鍵或是打開 Type Cover 就馬上喚醒，提供 iPad 般現代化行動裝置體驗。 可惜沒有想像中的完美，還是預設待機 11 小時候休眠，雖然這時間可以調整，但是有第二個閥值，待機時耗電超過 5% 還是會休眠，這是 by design 。 電池續航力 Pro X 官方宣稱典型使用方式最長可以使用 13 小時，由於機身較薄電池電量只有 38.2 Whr，實際續航力沒有想像中的優異。 我最近一週當中會有一整天白天都外出使用，我的使用方式為全程都掛著 Teams，同時使用 Edge、VS Code、用 WSL 跑 Python 且會同時用藍芽耳機聽音樂，休息的時候會看一下影片，根據電池報告，這幾天的預估續航力都是約 7 個多小時，跟實際感覺差不多，下午的時候都是藍芽耳機先沒電 ( 耳機續航力標稱 6 小時 )。 類似的使用方式電池報告預估的時間跟 Book 2 差不多，但是 Book 2 的電池有 75 Whr，明顯比用 Intel 處理器的 Pro 好。 Pro X 支援快充，用隨附的 65W 充電器的確很快就充到 80% 以上，且支援 PD 充電，我用支援 45W 輸出的行動電源，充的也滿快。 關於 X86 程式 根據微軟的 說明 ，X86 程式應該是在執行的時候做 JIT binary translation，然後快取一段時間。由於是 JIT，當打開 X86 程式的時候，冷啟動會比原生的久，觀察工作管理員也可以發現，啟動的時候會占用較多的 CPU 和 RAM。 像是 AIDA64 或是 Steam 這種比較小型的程式，用起來感覺很流暢，與原生的差異不是很大，但是像打開 Visual Studio 2019 (VS 2019) 這種大型的程式就不是這麼回事了。 VS 2019 需要編譯的時間需要比較長，也會占用很多 CPU 與 RAM，導致剛打開的時候用起來會很卡，但是編譯完成後就會變流暢了。 看起來 JIT 編譯的方式不適合大型的程式，難怪 Apple 會引入安裝的時候編譯，希望微軟之後也能跟上。 關於相容性，我嘗試在 VS 2019 編譯一個 UWP 範例，目標平台選擇 ARM，居然可以成功建置，且在 Debug 模式下執行程式，勉強也算能自產自銷吧 🤣。當然我認為這項功能只是用來平滑過渡到 ARM 上，不應該這種裝置的主要使用方式。 總結 Pro X 目前的體驗感受，算是比我預期的好，本來我只打算當個能用 Office 和 UWP 的 Edge book，後來發現可以做很多事，就直接拿來作為主力機了。 到目前為止我認為 Pro X 是一台好機器，但是不適合所有人，而我剛好是目標人群。我覺得很多開發者其實對 Windows on ARM 是很有興趣，但是缺乏工具鏈，微軟你家的 .Net framework 都沒有原生支援，一堆 WinForms 和 WPF 程式是要怎麼搞原生。 不過最近感覺微軟比較有心要扶植 ARM 了，WinForms 和 WPF 將會在 .Net 5 下支援 ARM64 ，微軟也推出 支援 ARM 的 OpenJDK ，甚至 Clang 也加入支援了，我覺得 Windows on ARM 的未來還是很有潛力，能給消費者帶來更多選擇絕對不是壞事。","tags":"硬體","url":"https://blog.ya-ti.ml/Microsoft-Surface-Pro-X-體驗心得.html","loc":"https://blog.ya-ti.ml/Microsoft-Surface-Pro-X-體驗心得.html"},{"title":"如何暫時解決因為第三方軟體導致 Windows 10 搜尋列中的應用程式 icon 顯示異常問題","text":"問題原因 某些第三方的檔案同步軟體，例如 Google 的 Drive File Stream，因為會在登錄檔新增機碼，導致系統某些地方異常，使得 Windows 10 的應用程式 icon 在搜尋列顯示異常。 解決方法 此問題似乎已經存在多年，Google 依然沒有修復，目前要根治只能直接移除，不過有暫時性的處理。暫時性的處裡來自 該篇文章 的第三篇，方法如下： 執行登入檔編輯程式 到 HKEY_CLASSES_ROOT\\.png 位置 尋找 shellex 下是否存在機碼 刪除機碼 在 shellex 點右鍵選擇 使用權限 在 群組與使用者名稱 中選擇 Administrators 將 完全控制 與 讀取 的 拒絕 框都打勾 重開機 打開系統顯示設定，若有使用多個顯示器先改成單一顯示器顯示 修改 縮放與版面配置 中的縮放設定，從 100% ( 或是當前推薦數值 ) 調整至 125% ( 或是更高或更低的 X25% 數值 )，此步驟應是希望系統重新 cache icon 打開搜尋列，看 icon 顯示是否正常，若沒有則重複上個步驟 親測 icon 恢復之後可以先把權限改回來，可以在系統重新 cache 之前保持正常，以避免潛在問題。","tags":"Tips","url":"https://blog.ya-ti.ml/如何暫時解決因為第三方軟體導致-Windows-10-搜尋列中的應用程式-icon-顯示異常問題.html","loc":"https://blog.ya-ti.ml/如何暫時解決因為第三方軟體導致-Windows-10-搜尋列中的應用程式-icon-顯示異常問題.html"},{"title":"如何在 Visual Studio Code 中使用 Cascadia Code 字體","text":"Cascadia Code 是微軟在 Build 2019 隨著 Windows Terminal 一起發表的字體，是一種專為命令列與程式碼編輯器開發的等寬字體，並支援程式合字或連字符號，詳細的介紹可以參考原始的 部落格文章 。 在 Visual Studio Code 中使用 Cascadia Code 字體並啟用合字功能 Cascadia Code 的安裝方法在官方的 維基 中可以找到，可在 GitHub 直接下載最新版的字體。由於官方的維基中的 Visual Studio Code 安裝教學可能因為版本不同或是有安裝其他 Extensions 的關係，啟用字體的方法略有不同，以下是我目前的啟用步驟： 安裝好 Cascadia Code 字體 打開 Visual Studio Code 的設定頁面，接著打開 Text Editor -> Font 子頁面，將 Editor: Font Family 中的內容修改為 'Cascadia Code', Consolas, 'Courier New', monospace 最後一步啟用跟官方的教學不一樣，需要在 Font Ligatures 選項中編輯 setting.json 檔案，在檔案中加入一行 \"editor.fontLigatures\": true 來啟用合字功能。","tags":"Tips","url":"https://blog.ya-ti.ml/如何在-Visual-Studio-Code-中使用-Cascadia-Code-字體.html","loc":"https://blog.ya-ti.ml/如何在-Visual-Studio-Code-中使用-Cascadia-Code-字體.html"},{"title":"如何解決執行 bash script 時遇到 \" '\\r': command not found\" 的問題","text":"前言 在使用 WSL 執行 bash script 有時會遇到像這樣的錯誤： -bash: '\\r' : command not found 經過搜尋之後在 stackoverflow 找到解答，該錯誤訊息是因為 Windows 的 newline 符號與 Linux 不同所導致，由於我是在 Windows 的環境下編寫 bash script，然後在 WSL 執行，所以會遇到此錯誤。 解決方法 由 stackoverflow 提供的解答，方法為在 WSL 之中安裝 dos2unix ，以 Debian/Ubuntu 為範例，安裝方法為： sudo apt-get install dos2unix 使用方法為： dos2unix [ options ] [ file ... ] [ -n infile outfile ... ] 就能夠把 script 轉換成 bash 可以正確讀取的格式。","tags":"Tips","url":"https://blog.ya-ti.ml/如何解決執行-bash-script-時遇到-command-not-found-的問題.html","loc":"https://blog.ya-ti.ml/如何解決執行-bash-script-時遇到-command-not-found-的問題.html"},{"title":"如何解決 Windows 系統下 Matplotlib 在 HiDPI 顯示器顯示過小的問題","text":"前言 由於在使用 Matplotlib 時，發現在使用高解析度的螢幕有內容顯示過小的問題，不會隨著 Windows 的設定來縮放，導致看起來很吃力。經過搜尋，發現是因為 Matplotlib 預設使用 Qt5 來 rendering，而 Qt5 在 Windows 下預設不會自動縮放，這裡介紹兩種方法來解決這個問題。 更新 ：新增如何在 Qt5 中啟用 DPI 縮放的功能。 方法一：啟用 Qt5 中的 DPI 縮放功能 如何啟用 Qt5 DPI scaling 的範例 code： # 需要先 import matplotlib 的 backend Qt5 import PyQt5 as qt # 用 matplotlib 畫圖之前要先啟用 Qt5 DPI scaling qt . QtWidgets . QApplication . setAttribute ( qt . QtCore . Qt . AA_EnableHighDpiScaling , True ) 方法二：替換 Matplotlib 的 backend 此為如何將 backend 從預設的 Qt5 替換為 Tk 的範例 code： import matplotlib.pyplot as plt if plt . get_backend () == 'Qt5Agg' : # 判斷 backend 是否為 Qt5 plt . switch_backend ( 'TkAgg' ) # 將 backend 替換為 Tk Tk 為 Python 內建的原生 UI，可以隨著 Windows 的設定來縮放，不過可能是因為用 bilinear 來縮放，某些影像 rendering 可能會有 aliasing，手動調整視窗大小可以改善此瑕疵。 參考資料 One way to deal with High DPI (4k) Screens in Python 關於 Matplotlib backend 的詳細資料與還有哪些 backend 能替換，可以閱讀官網上的 說明 。","tags":"Python","url":"https://blog.ya-ti.ml/解決-Windows-系統下-Matplotlib-在-HiDPI-顯示器顯示過小的問題.html","loc":"https://blog.ya-ti.ml/解決-Windows-系統下-Matplotlib-在-HiDPI-顯示器顯示過小的問題.html"},{"title":"如何將 YouTube 切換回舊版介面","text":"背景 由於 Google 不知道是否為了使自家服務只在自家的 Chrome 瀏覽器具有相對優勢，例如最近此篇 報導 讓我想寫這篇文章。其中一例是在新版的 YouTube 介面使用過時的 API，導致除了 Chromium based 的瀏覽器性能表現低落，然後 Google 又把還原成舊版的按鍵移除，只好找別的方法切換為舊版介面。 方法 Windows Central 與 Reddit 提供了幾種方法可以將 YouTube 切換為舊版介面，其中我測試使用方法一，覺得簡單方便，而且不需要安裝任何而外的東西，只要不刪除 Cookies 就可以保持設定，完全按照上面的流程會變成英文版，我做了小修改讓他變成中文版，方法如下： 登入 YouTube 首頁。 打開瀏覽器的開發者工具，各家瀏覽器開啟的方式略有不同，不知道怎麼開的自行搜尋。 找到紀錄 Cookies 的分頁，也是各個瀏覽器略有不同，不知道在哪自行搜尋。以 Microsoft Edge 44.18362.1.0 為例，位置在儲存空間頁面。 切換到紀錄 YouTube Cookies 的頁面，找到 Name 為 \"PREF\" 的 Cookies，位置參考 Windows Central 提供的圖。 修改 Value，替換為 \"al=zh-TW&f5=30030&f6=8\" 。 重新整理 YouTube，應該就能切換為舊版介面。","tags":"Tips","url":"https://blog.ya-ti.ml/如何將-YouTube-切換回舊版介面.html","loc":"https://blog.ya-ti.ml/如何將-YouTube-切換回舊版介面.html"},{"title":"Miniconda","text":"簡介 對剛入們 Python 的人，安裝整個 Anaconda Distribution 是最容易的方式。但是一般而言，會建議 Python 專案開發是一個專案建立一個虛擬環境。既然每一個專案都要建立一個環境，base environment 理應不需要安裝這麼多套件，所以當你只想要使用 conda 來管理環境可以只選擇安裝 Miniconda ，它只會安裝最基本 conda 管理工具。 初始化 安裝完成後可以執行 (conda > 4.6.12): conda init 來初始化 Anaconda 環境，執行後可以讓支援的 shell 都可以使用 conda。 Windows 環境下，我喜歡搭配 Microsoft PowerShell (PowerShell Core) ，原因是因為 conda activate 和 Windows PowerShell 有相容性問題，又覺得 CMD 太 old school 了。 初始化後， %USERPROFILE%\\Documents\\ 下會多 PowerShell\\ 和 WindowsPowerShell\\ 兩個資料夾儲存設定檔案，前者個是屬於 PowerShell Core，後者是屬於 Windows PowerShell，由於後者的設定檔案會導致啟動的時候報錯，可以刪除。 如果不喜歡每次打開 shell 都會自動啟用 base 環境，可以執行 : conda config --set auto_activate_base False 來取消自動啟用。 Anaconda Navigator Miniconda 裡面不包含 Anaconda Navigator，如果想用 Anaconda Navigator，這個圖形化管理介面來管理環境， 可以在 base 環境中將它安裝回來，在文字介面的 Shell 輸入： conda install anaconda-navigator 如此就能簡單的安裝完成了。","tags":"Python","url":"https://blog.ya-ti.ml/miniconda.html","loc":"https://blog.ya-ti.ml/miniconda.html"},{"title":"貝氏模型擬合範例 (Bayesian Model Fitting Instance)","text":"一個 Bayesian model fitting 的範例，幫助如何使用 Bayesian model 解決問題。 Bayes rule 定義一個 likelihood \\(P(D | M)\\) ，其中 \\(D\\) 為來自於 model \\(M\\) 的實驗數據。 基於預期知識 \\(C\\) ，定義一個 model \\(M\\) 的 prior \\(P(M | C)\\) ，其中 model \\(M\\) 包含一些我們想要找的參數。 則由 Bayes' theorem 可以得知 posterior： $$P(M \\| D) \\propto P(M | C)P(D | M).$$ Linear models 假設有一個感測器，其量測到的信號被一個高斯雜訊影響，則可以將信號產生模型寫成 : \\(y=a + noise\\) ，其中 \\(y\\) 為量測到的 data， \\(a\\) 是模型的參數。 首先我們先產生人造的 data： % matplotlib inline import scipy as sp import matplotlib.pyplot as plt a = 5 # true mean of the optical signal s = 4 # true noise std n = 20 # data points y = a + s * sp . randn ( n , 1 ) # Generate n data 根據 generative model，隱含了 likelihood 可以被表示成 \\(p(y|a) = \\prod_{i=1}&#94;{n} (2 \\pi \\sigma&#94;2)&#94;{-1/2} e&#94;{-\\frac{(y_i-a)&#94;2}{2\\sigma&#94;2}}\\) ： va = sp . linspace ( - 15 , 15 , 1000 ) N = va . shape [ 0 ] lik = sp . exp ( -. 5 * sp . sum (( sp . tile ( y , [ 1 , N ]) - sp . tile ( va , [ n , 1 ])) ** 2 , 0 ) / s ** 2 ) lik = lik / sp . sum ( lik ) # normalize 在還沒量測之前，我們猜測量測到的信號會是中心為 \\(0\\) 且標準差為 \\(5\\) 的 Gaussian distribution： a0 = 0 s0 = 5 pr = sp . exp ( -. 5 * ( va - a0 ) ** 2 / s0 ** 2 ) pr = pr / sp . sum ( pr ) 根據 Bayes' theorem，可以推得模型的 posterior： \\(p(a|y) = p(a) \\times p(y|a)\\) 我們將上述的 distribution 都畫出： po = lik * pr po = po / sp . sum ( po ) ML = va [ sp . argmax ( lik )] MAP = va [ sp . argmax ( po )] plt . figure ( 1 ) hli = plt . plot ( va , lik , 'r' ) hpr = plt . plot ( va , pr , 'b' ) hpo = plt . plot ( va , po , 'k' ) plt . scatter ( y , sp . zeros ( y . shape )) plt . legend ([ 'likelihood' , 'prior' , 'posterior' , 'data' ]) plt . show () print ( 'The value of variable a with maximum likelihood is {:.4f} \\n ' . format ( ML )) print ( 'The value of variable a with maximum posterior is {:.4f} \\n ' . format ( MAP )) The value of variable a with maximum likelihood is 4 . 4595 The value of variable a with maximum posterior is 4 . 3393 只藉由少量的 data，可以發現機率最高的參數已經接近我們的真實信號產生模型參數，其中 likelihood 是只利用所量測到的 data 估計模型參數，而 posterior 是加入 prior 修正後的結果或是妥協，如果 data 愈多，則會傾向於相信 data。 Grid search for two variables 若我們不知道雜訊的標準差，則也需要將雜訊的標準差加入為需要尋找的模型參數。 舉例來說，一個信號 \\(x\\) 會在感測器上有 \\(a\\) 的增益，但是量測到的信號會被雜訊所影響，則模型可以寫成： \\(y=a \\times x + noise\\) a = 2 # true a sig = 5 # true sigma x = sp . linspace ( 0 , 10 , n ) y = a * x + sig * sp . randn ( x . shape [ 0 ]) y = y . reshape ([ len ( x )]) # plot data plt . figure ( 2 ) plt . scatter ( x , y ) plt . xlabel ( 'x' ) plt . ylabel ( 'y=a*x+noise' ) plt . title ( 'y=a*x+noise' ) plt . show () Grid search 就是取樣大量的參數來尋找最佳的參數組合，因此我們對 \\(a\\) 與 \\(\\sigma&#94;2\\) 取樣，希望計算 posterior 最高的參數組合： def normpdf ( x , mu , sigma ): u = ( x - mu ) / abs ( sigma ) y = ( 1 / ( sp . sqrt ( 2 * sp . pi ) * abs ( sigma ))) * sp . exp ( - u * u / 2 ) return y va = sp . linspace ( 0 , 5 , 100 ) # values of a vs = sp . linspace ( 0.01 , 50 , 100 ) # values of s&#94;2 posterior = sp . zeros ([ vs . shape [ 0 ], va . shape [ 0 ]]) for i in range ( vs . shape [ 0 ]): for j in range ( va . shape [ 0 ]): S = va [ j ] * x # prediction lik = vs [ i ] ** ( - n / 2 ) * sp . exp (( - 0.5 ) * sp . sum (( y - S ) ** 2 ) / vs [ i ]) # likelihood pr = 1 / vs [ i ] * normpdf ( va [ i ], 0 , 4 ) # prior posterior [ i , j ] = lik * pr # posterior posterior = posterior / sp . sum ( posterior [:]) 接著畫出 posterior distribution: plt . figure ( 3 ) plt . imshow ( posterior , extent = [ va [ 0 ], va [ va . shape [ 0 ] - 1 ], vs [ vs . shape [ 0 ] - 1 ], vs [ 0 ]], aspect = 'auto' ) plt . xlabel ( 'a' ) plt . ylabel ( 's&#94;2' ) plt . title ( 'posterior distribution' ) plt . colorbar () plt . show () 然後藉由對中一個參數做積分，我們可以畫出 marginal probability，也就是兩個參數的機率分布： # plot marginals plt . figure ( 4 , figsize = ( 10 , 5 )) plt . subplot ( 1 , 2 , 1 ) plt . title ( 'Marginal pdf p(a)' ) plt . plot ( va , sp . sum ( posterior , 0 )) # sum one dimension of grid plt . subplot ( 1 , 2 , 2 ) plt . title ( 'Marginal pdf p(s&#94;2)' ) plt . plot ( vs , sp . sum ( posterior , 1 )) plt . show () maxidx = sp . unravel_index ( posterior . argmax (), posterior . shape ) print ( 'The value of variables with maxium posterior are {:.4f} and {:.4f} \\n ' . format ( va [ maxidx [ 1 ]], vs [ maxidx [ 0 ]])) The value of variables with maxium posterior are 1.8687 and 17.6832 最後我們就能得到最佳的參數組合。 Jupyter notebook 版本 Reference ONBI - Bayesian model fitting practical","tags":"Statistical Optics","url":"https://blog.ya-ti.ml/bayesian-model-fitting-instance.html","loc":"https://blog.ya-ti.ml/bayesian-model-fitting-instance.html"},{"title":"二維離散小波轉換 (2D Discrete Wavelet Transform)","text":"簡介 小波轉換 (Wavelete transform) 與傅立葉轉換 (Fourier transform) 類似，是一種信號分析的方法，特色是是同時具有空間解析度 (spatial resolution) 與頻率解析度 (frequency resolution)，其中二維小波轉換 (2D Discrete Wavelet Transform) 經常被用於影像分析。 實作 一層 2D 小波轉換的實作流程圖如下，先對 rows 做分解再對 columns 做分解，最後會分解成四種成分，解析度變成前一層的 1/2 \\(cA_{i}\\) :approximation coefficients at level \\(i\\) \\(cH_{i}\\) :horizontal coefficients at level \\(i\\) \\(cV_{i}\\) :vertical coefficients at level \\(i\\) \\(cD_{i}\\) :diagonal coefficients at level \\(i\\) 初始 \\(cA\\_0\\) 為原始影像。 範例 PyWavelets 是一個 Python 的小波函式庫，可以實現多維小波轉換，其中影像的一階離散小波轉換的範例如下： % matplotlib inline import pywt as pt import scipy as sp import matplotlib.pyplot as plt # Load image img = pt . data . camera () # Wavelet transform of image, and plot approximation and details titles = [ 'Approximation' , ' Horizontal detail' , 'Vertical detail' , 'Diagonal detail' ] cA , ( cH , cV , cD ) = pt . dwt2 ( img , 'db1' ) ''' pywt.dwt2 return structure ------------------- | | | | cA(LL) | cH(LH) | | | | (cA, (cH, cV, cD)) <---> ------------------- | | | | cV(HL) | cD(HH) | | | | ------------------- ''' plt . figure () plt . title ( 'Original' ) plt . imshow ( img , 'gray' ) fig , ax = plt . subplots ( 2 , 2 , figsize = ( 7 , 7 )) fig . suptitle ( '1st level wavelet decomposition' ) ax [ 0 , 0 ] . set_title ( titles [ 0 ]) ax [ 0 , 0 ] . imshow ( cA , 'gray' ) ax [ 0 , 1 ] . set_title ( titles [ 1 ]) ax [ 0 , 1 ] . imshow ( cH , 'gray' ) ax [ 1 , 0 ] . set_title ( titles [ 2 ]) ax [ 1 , 0 ] . imshow ( cV , 'gray' ) ax [ 1 , 1 ] . set_title ( titles [ 3 ]) ax [ 1 , 1 ] . imshow ( cD , 'gray' ) plt . show () Jupyter notebook 版本 參考 Mathwork PyWavelets","tags":"Digital Image Processing","url":"https://blog.ya-ti.ml/2d-discrete-wavelet-transform.html","loc":"https://blog.ya-ti.ml/2d-discrete-wavelet-transform.html"},{"title":"局部歸一化 (Local Normalization)","text":"簡介 局部歸一化的目標是使影像亮度的 mean 與 variance 在局部相鄰區域趨於一致，用來改善不均勻照明或是遮蔽的影響。 實作 對原始影像 \\(f(x,y)\\) 的 local normalization 可以寫成： $$g(x)=\\frac{f(x,y)-m_{f}(x,y)}{\\sigma_f(x,y)},$$ 其中 \\(m_f(x,y)\\) 是 \\(f(x,y)\\) 的 local mean 估算值 \\(\\sigma_f(x,y)\\) 是 local variance 的估算值 \\(g(x,y)\\) 是輸出影像。 local mean 與 variance 的估算通過 Gaussian filter， \\(\\sigma_1\\) 與 \\(\\sigma_2\\) 是 Gaussian window size，用來控制 local mean 與 local variance，通常 \\(\\sigma_2\\) 應該大於 \\(\\sigma_1\\) 。 範例 % matplotlib inline import scipy as sp import skimage.filters as fil import matplotlib.pyplot as plt from skimage.color import rgb2gray from skimage.data import camera from skimage import img_as_float def local_norm ( img , sigma_1 , sigma_2 ): local_mean = fil . gaussian ( img , sigma_1 ) numerator = img - local_mean local_variance = fil . gaussian ( numerator ** 2 , sigma_2 ) denominator = local_variance ** ( 0.5 ) output = numerator / denominator output = output + abs ( output . min ()) output = output / output . max () return output img = img_as_float ( camera ()) img = img / img . max () sigma_1 = 4 sigma_2 = 40 normalized = local_norm ( img , sigma_1 , sigma_2 ) plt . figure () plt . title ( 'Original image' ) plt . imshow ( img , 'gray' ) plt . figure () plt . title ( 'Normalized image' ) plt . imshow ( normalized , 'gray' ) plt . show () Jupyter notebook 版本 參考 Local Normalization","tags":"Digital Image Processing","url":"https://blog.ya-ti.ml/local-normalization.html","loc":"https://blog.ya-ti.ml/local-normalization.html"},{"title":"邊界偵測 (Edge Detection)","text":"通常在一張影像當中，我們會感興趣的地方會是亮度變化比較大的地方，因為這些地方可以被當作用來描述該影像的特徵，其中一種由亮度變化形成的特徵就是影像的邊界 (edge) 位置。 影像梯度 (Image gradient) 由於我們對影像有亮度變化的地方有興趣，因此需要一種數學描述這種變化，即為 image gradient。 Image gradient 是一 2D 向量 (vector)，對應水平和垂直方向，方向定義為亮度最有可能增加的方向，簡單來說就是暗 -> 亮，長度對應變化率。在影像中一點 \\((x,y)\\) 的梯度可以表示為 $$\\triangledown f = \\begin{bmatrix} \\frac{\\partial f}{\\partial x} \\\\ \\frac{\\partial f}{\\partial y} \\end{bmatrix} = \\begin{bmatrix} g_x \\\\ g_y \\end{bmatrix},$$ 其方向為 $$\\theta = \\tan&#94;{-1} \\begin{bmatrix} \\frac{g_y}{g_x} \\end{bmatrix},$$ 其長度為 $$g = \\sqrt{g_{x}&#94;2+g_{y}&#94;2}.$$ Sobel operator Sobel operator 或 Sobel filter 是一種常被用來計算影像梯度運算子，其方法為利用 \\(3 \\times 3\\) 的 kernel 對影像做 convolution ( 摺積 )。 假設 \\(\\mathbf{A}\\) 為來源影像， \\(\\mathbf{G_x}\\) 與 \\(\\mathbf{G_y}\\) 分別對應水平與垂直方向的梯度圖，代表來源影像中每一個點的梯度，則可以表示為 $$\\mathbf{G_x}=\\begin{bmatrix} 1 & 0 & -1\\\\ 2 &0 & -2\\\\ 1 & 0 & -1 \\end{bmatrix} \\ast \\mathbf{A} \\text{ and } \\mathbf{G_y}=\\begin{bmatrix} 1 & 2 & 1\\\\ 0 & 0 & 0\\\\ -1 & -2 & -1 \\end{bmatrix} \\ast \\mathbf{A}.$$ 所以梯度的強度圖可以寫成 $$\\mathbf{G} = \\sqrt{\\mathbf{G_x}&#94;2 + \\mathbf{G_y}&#94;2}.$$ 同理梯度的方向圖可以寫成 $$\\Theta = \\tan&#94;{-1} \\begin{bmatrix} \\frac{\\mathbf{G_y}}{\\mathbf{G_x}} \\end{bmatrix}.$$ Canny edge detector Canny edge detector 是一種用來偵測影像中邊界的演算法，基本版的流程分為五個步驟： 使用 Gaussian filter 平滑化影像，目的是為了降噪 計算影像梯度的強度 利用 non-maximum suppression 找出強邊界，比較每一個像素，只留下強度比相鄰像素的強度都強的像素 應用 double threshold 分出強邊界與弱邊界，設定 high threshold 與 low threshold，如果強度大於 high threshold 分為強邊界，若強度小於 high threshold 且大於 low threshold 分為弱邊界，其他則會被排除 排除沒有跟強邊界相連的弱邊界 範例 scikit-image 有實作 Sobel filter 與 Canny edge detector，Sobel filter 輸出為梯度強度影像，Canny edge detector 輸出為二值影像，如下所示： % matplotlib inline import numpy as np import matplotlib.pyplot as plt from skimage.data import camera from skimage.filters import sobel from skimage import feature image = camera () edge_sobel = sobel ( image ) edge_canny = feature . canny ( image , sigma = 2.0 ) fig , ax = plt . subplots ( ncols = 2 , sharex = True , sharey = True , figsize = ( 8 , 4 )) ax [ 0 ] . imshow ( edge_sobel , cmap = plt . cm . gray ) ax [ 0 ] . set_title ( 'Sobel Edge Detection' , fontsize = 12 ) ax [ 0 ] . axis ( 'off' ) ax [ 1 ] . imshow ( edge_canny , cmap = plt . cm . gray ) ax [ 1 ] . set_title ( 'Canny Edge Detection' , fontsize = 12 ) ax [ 1 ] . axis ( 'off' ) plt . show () Jupyter notebook 版本 參考 Edge operators Canny edge detector","tags":"Digital Image Processing","url":"https://blog.ya-ti.ml/edge-detection.html","loc":"https://blog.ya-ti.ml/edge-detection.html"},{"title":"直方圖等化 (Histogram Equalization)","text":"影像的 histogram 指的是，在一張影像當中強度值統計分布，通常橫軸代表強度值，縱軸代表數量。histogram equalization，是一種利用影像的直方圖增強影像對比的方法，其概念如下圖 ( 來自維基百科 )。 希望影像的強度值分布變得比較均勻。 數學理論 假設一張灰階影像 \\({x}\\) ，且令 \\(n_i\\) 為強度值 \\(i\\) 的數量，則在影像中一個像素出現強度值 \\(i\\) 的機率為 $$p_x(i)=\\frac{n_i}{n}, 0 \\leq i < L,$$ 其中 \\(L\\) 為強度值的總量 ( 對於一般的 8 bit 影像為 256)， \\(n\\) 像素的總量，通常會將 \\(i\\) 的範圍 normalize 到 \\([0,1].\\) 定義 \\(p_x\\) 對應的累積分布 (CDF) 為 $$cdf_x(i)=\\sum_{j=0}&#94;{i}p_x(j),$$ 我們希望創造一個轉換函數 \\(k=T(i)\\) ，使新的影像 \\({p_y(k)}\\) 有均勻的值方圖分布，相當於線性化影像的 CDF，例如 $$cdf_y(k)=kC, \\text{for some constant }C.$$ 由 CDF 的性質，則我們可以寫出以下的轉換關係 $$cdf_y(k)=cdf_y(T(i))=cdf_x(i).$$ 假設 \\(p_y(k)=C=\\frac{1}{i_{min}-i_{max}}\\) ，則 $$T(i)=\\frac{1}{C} \\int_{i_{min}}&#94;{i} p_x(i)di+\\min(x) \\text{ for } i_{min} \\leq i \\leq i_{max}.$$ 局部直方圖等化 (Local Histogram Equalization) 一般的直方圖等化是對整張影像做，通常新的直方圖只會是大概線性的 CDF，因此後來有一種局部版本的直方圖等化，使 CDF 更加的線性。在 scikit-image 有實作此方法，範例如下： % matplotlib inline import numpy as np import matplotlib import matplotlib.pyplot as plt from skimage import data from skimage.util.dtype import dtype_range from skimage.util import img_as_ubyte from skimage import exposure from skimage.morphology import disk from skimage.filters import rank matplotlib . rcParams [ 'font.size' ] = 11 def plot_img_and_hist ( image , axes , bins = 256 ): \"\"\"Plot an image along with its histogram and cumulative histogram. \"\"\" ax_img , ax_hist = axes ax_cdf = ax_hist . twinx () # Display image ax_img . imshow ( image , cmap = plt . cm . gray ) ax_img . set_axis_off () # Display histogram ax_hist . hist ( image . ravel (), bins = bins ) ax_hist . ticklabel_format ( axis = 'y' , style = 'scientific' , scilimits = ( 0 , 0 )) ax_hist . set_xlabel ( 'Pixel intensity' ) xmin , xmax = dtype_range [ image . dtype . type ] ax_hist . set_xlim ( xmin , xmax ) # Display cumulative distribution img_cdf , bins = exposure . cumulative_distribution ( image , bins ) ax_cdf . plot ( bins , img_cdf , 'r' ) return ax_img , ax_hist , ax_cdf # Load an example image img = img_as_ubyte ( data . moon ()) # Global equalize img_rescale = exposure . equalize_hist ( img ) # Equalization selem = disk ( 30 ) img_eq = rank . equalize ( img , selem = selem ) # Display results fig = plt . figure ( figsize = ( 8 , 5 )) axes = np . zeros (( 2 , 3 ), dtype = np . object ) axes [ 0 , 0 ] = plt . subplot ( 2 , 3 , 1 ) axes [ 0 , 1 ] = plt . subplot ( 2 , 3 , 2 , sharex = axes [ 0 , 0 ], sharey = axes [ 0 , 0 ]) axes [ 0 , 2 ] = plt . subplot ( 2 , 3 , 3 , sharex = axes [ 0 , 0 ], sharey = axes [ 0 , 0 ]) axes [ 1 , 0 ] = plt . subplot ( 2 , 3 , 4 ) axes [ 1 , 1 ] = plt . subplot ( 2 , 3 , 5 ) axes [ 1 , 2 ] = plt . subplot ( 2 , 3 , 6 ) ax_img , ax_hist , ax_cdf = plot_img_and_hist ( img , axes [:, 0 ]) ax_img . set_title ( 'Low contrast image' ) ax_hist . set_ylabel ( 'Number of pixels' ) ax_img , ax_hist , ax_cdf = plot_img_and_hist ( img_rescale , axes [:, 1 ]) ax_img . set_title ( 'Global equalize' ) ax_img , ax_hist , ax_cdf = plot_img_and_hist ( img_eq , axes [:, 2 ]) ax_img . set_title ( 'Local equalize' ) ax_cdf . set_ylabel ( 'Fraction of total intensity' ) # prevent overlap of y-axis labels fig . tight_layout () plt . show () Jupyter notebook 版本 參考 Histogram equalization Local Histogram Equalization","tags":"Digital Image Processing","url":"https://blog.ya-ti.ml/histogram-equalization.html","loc":"https://blog.ya-ti.ml/histogram-equalization.html"},{"title":"Python 心得","text":"Python Python 是一種直譯式高階程式語言，由 Guido van Rossum 發明，其哲學是強調 code 的可讀性和簡潔的語法，而且具有動態型別與自動記憶體管理功能。Python 常被用於 Web 開發與科學計算，特別是最近機器學習函式庫幾乎都有提供 Python API。 為什麼我要選擇 Python？ 我在大學時期比較常用的是 MATLAB 來做科學計算，MATLAB 確實方便好用，但畢竟是付費軟體，通常個人也買不起，出了校門可能就沒辦法用，因此嘗試轉用 Python。因為 Python 是開源的高階語言，藉由開源社群的力量，有著大量的函式庫，能做的事其實比 MATLAB 還多，而且用起來更自由，不用像 MATLAB 綁定傻大粗又不穩的開發環境。個人覺得以科學計算而言，Python 的上手難度沒有比 MATLAB 難上多少，但是可以獲得自由，所以入坑 Python。 Anaconda Distribution 簡介 Anaconda Distribution 是一個面相資料科學的免費 Python 發行版，收集了超過 1000 種的開源套件，並有自己的套件與環境管理工具，適合 Python 的新手使用，安裝方式很像 MATLAB，主程式 +Toolbox。 Anaconda 對 Windows、macOS 與 Linux 都有提供支援，同時支援 Python 2 和 Python 3，安裝包預裝超過 150 個套件，並可以選擇性安裝開源的 IDE Spyder 或是 Visual Studio Code ，但是也可以搭配任何支援 Python 的開發環境或是編輯器使用，可以選自己喜歡的用法，像我目前偏好搭配 Visual Studio Code 使用，因為它輕量且與 Git 整合度高。 Conda conda 是 Anaconda 自帶的套件管理工具，conda 的用法，官方有提供簡單上手的表格如下 常用套件 Package Summary imageio A library for reading and writing image IPython Productive Interactive Computing Jupyter Jupyter Notebook Matplotlib A rich architecture for interactive computing NumPy Array processing for numbers, strings, records, and objects OpenCV Computer vision and machine learning library scikit-image A collection of algorithms for image processing scikit-learn A set of python modules for machine learning and data mining SciPy Scientific library for mathematics, science, and engineering PyTorch An open source machine learning framework that accelerates the path from research prototyping to production deployment. TensorFlow An end-to-end open source machine learning platform","tags":"Python","url":"https://blog.ya-ti.ml/python-心得.html","loc":"https://blog.ya-ti.ml/python-心得.html"},{"title":"北京天壇","text":"天壇，坐地鐵到天壇東門站就可以到，現在是個收門票的公園景點，也有很多各國的觀光客。收費分兩種，分成門票和聯票，只買門票是進不去某些地方，像是最重要的主殿，只能在外圍逛，第一次來只好買聯票了。 這次是從北門進來，但是建築是坐北朝南，所以比較像是反著走，應該要從南門近來比較有感覺。 祈年殿 其他宮殿 公園很大，大部分的景色都是植株，也看的見很多鳥","tags":"旅遊","url":"https://blog.ya-ti.ml/北京天壇.html","loc":"https://blog.ya-ti.ml/北京天壇.html"},{"title":"上海豫園","text":"豫園商圈 上海的著名景點，也是坐地鐵就能到，可以看到很多來自世界各國的觀光客。 大多數的建築都是傳統中式風格 老街商圈，非常熱鬧 中式風格的星巴克，搭配一群老外 城隍廟，是景點要收門票，這次沒進去 豫園 這時候算旺季，全票 40，學生可以買半票 20，台灣學生也算喔。 裡面也是很多各國的觀光客 上海外灘 從車站走一小段就能到上海外灘，著名的夜景點。","tags":"旅遊","url":"https://blog.ya-ti.ml/上海豫園.html","loc":"https://blog.ya-ti.ml/上海豫園.html"},{"title":"上海交通大學","text":"上海交通大學是地鐵的一站，因此交通也很方便。這裡剛好是我要去豫園轉車的站，就順便來逛逛。 上海交大在假日似乎也是個景點，有滿多遊客 ( 我也是 ) 校景 校徽上的錨，不知道是不是真的原物 以前的舊圖書館，現在是校史博物館，裡面介紹交大的歷史發展，意外的是新竹的交大也有列進去喔 校園內看見盛開的花 這裡的建築不是看起有歷史就是很現代 上海交大的二餐，這裡吃飯都要刷校園卡，因此沒辦法試試這邊二餐的味道 QQ","tags":"旅遊","url":"https://blog.ya-ti.ml/上海交通大學.html","loc":"https://blog.ya-ti.ml/上海交通大學.html"},{"title":"上海南翔","text":"上海南翔鎮，坐地鐵到南翔站就能到，是上海比較有中國文化的地方，有老街可以逛，在地的特色小吃是小籠包。 南翔老街 由於來的時候是假日，因此老街滿熱鬧 小橋流水 有歷史的塔 老街附近的寺廟 中午在附近的街上吃烤魚 古猗園 當地另一個有名的景點，從車站要走一小段才能到。 基本上就是以前有錢人家的庭院，現在是要收費的公園。","tags":"旅遊","url":"https://blog.ya-ti.ml/上海南翔.html","loc":"https://blog.ya-ti.ml/上海南翔.html"},{"title":"Maximum-Length Sequence","text":"簡介 Maximum-Length Sequence (MLS) 是一種二值序列，長度 \\(P=2&#94;N-1\\) ，其中 \\(N\\) 代表整數。MLS 可以利用以下的關係式遞迴產生： $$n(k+3)=n(k) \\oplus n(k+2),$$ 其中 \\(\\oplus\\) 代表 XOR 運算。若將將產生出來的 \\(0,1\\) 邏輯值由下式轉換成 \\(1,-1\\) ，則為 MLS 訊號： $$0 \\rightarrow 1$$ $$1 \\rightarrow -1.$$ 性質 在 MLS 當中， \\(0\\) 與 \\(1\\) 的數量大約相同，有 \\(2&#94;{N-1}\\) 個 \\(1\\) 和 \\(2&#94;{N-1}-1\\) 個 \\(0\\) 。另一個的性質是 MLS 訊號的自相關為 delta function。 範例 在 Scipy 的函示庫中的 signal 模組有實作 MLS，其範例如下： import scipy as sp import matplotlib.pyplot as plt from scipy.signal import max_len_seq N = 6 # nbits seq = max_len_seq ( N )[ 0 ] print ( seq ) [1 1 1 1 1 1 0 1 0 1 0 1 1 0 0 1 1 0 1 1 1 0 1 1 0 1 0 0 1 0 0 1 1 1 0 0 0 1 0 1 1 1 1 0 0 1 0 1 0 0 0 1 1 0 0 0 0 1 0 0 0 0 0] 將序列轉換成訊號，驗證自相關性質： from numpy.fft import fft , ifft , fftshift , fftfreq spec = fft ( seq ) acorrcirc = ifft ( spec * sp . conj ( spec )) . real P = len ( seq ) plt . figure () plt . plot ( sp . arange ( - P / 2 + 1 , P / 2 + 1 ), fftshift ( acorrcirc ), '.-' ) plt . show () Jupyter notebook 版本 參考 MLS Theory Scipy","tags":"Digital Signal Processing","url":"https://blog.ya-ti.ml/maximum-length-sequence.html","loc":"https://blog.ya-ti.ml/maximum-length-sequence.html"},{"title":"Toeplitz Matrix","text":"簡介 Toeplitz matrix 又被稱為常對角矩陣，是一個對角線都是常數的矩陣。 對任一 \\(n \\times n\\) 的矩陣 \\(\\mathbf{A}\\) ，可以表示成： $$\\mathbf{A}=\\begin{bmatrix} a_0 & a_{-1} & a_{-2} & \\cdots & a_{-(n-1)} \\\\ a_1 & a_0 & a_{-1} & \\ddots & \\vdots \\\\ a_2 & a_1 & \\ddots & \\ddots & \\vdots \\\\ \\vdots & \\ddots & \\ddots & a_0 & a_{-1} \\\\ a_{n-1} & \\cdots & a_2 & a_1 & a_0 \\end{bmatrix},$$ 其通式可以寫成： $$\\mathbf{A}=A_{i,j}=A_{i+1,j+1}=a_{i-j}.$$ 範例 Scipy 中有實作創造 Toeplitz matrix： from scipy.linalg import toeplitz c = [ 1 , 2 , 3 ] # c 為指定矩陣的第一行 toeplitz ( c ) array ([[ 1 , 2 , 3 ], [ 2 , 1 , 2 ], [ 3 , 2 , 1 ]]) r = [ 1 , 4 , 5 , 6 ] # r 為指定矩陣的第一列 toeplitz ( c , r ) array ([[ 1 , 4 , 5 , 6 ], [ 2 , 1 , 4 , 5 ], [ 3 , 2 , 1 , 4 ]]) Jupyter notebook 版本 Convolution convolution 運算中的輸入，可以轉換成 toeplitz matrix，使運算可以寫成矩陣乘法。 \\(h\\) 與 \\(x\\) 的 convolution 可以表示成： $$y=h\\ast x=\\begin{bmatrix} h_1 & 0 & \\cdots & 0 & 0 \\\\ h_2 & h_1 & \\ddots & \\vdots & \\vdots \\\\ h_3 & h_2 & \\ddots & \\vdots & \\vdots \\\\ \\vdots & h_3 & \\ddots & h_1 & \\vdots \\\\ h_m & \\vdots & \\ddots & h_2 & h_1 \\\\ 0 & h_m & \\ddots & h_3 & h_2 \\\\ 0 & 0 & h_m & \\vdots & h_3 \\\\ \\vdots & \\vdots & \\vdots & h_m & \\vdots \\\\ 0 & 0 & \\cdots & 0 & h_m \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\\\ x_3 \\\\ \\vdots \\\\ x_n \\end{bmatrix}$$ 參考 Scipy 維基百科","tags":"Linear Algebra","url":"https://blog.ya-ti.ml/toeplitz-matrix.html","loc":"https://blog.ya-ti.ml/toeplitz-matrix.html"},{"title":"Hadamard Matrix","text":"簡介 Hadamard matrix 是一種只包含 \\((-1,+1)\\) 的矩陣，其特性是取任兩行或是列放在一起比較，則會有一半是同號，另一半則是不同號。 當要畫出該矩陣時，定義 \\(+1\\) 代表黑色，而 \\(-1\\) 代表白色。 特性 \\({n \\times n}\\) 的 Hadamard matrix \\(H_n\\) 會有 \\(n \\frac{n(n-1)}{2}\\) 個 \\((-1)\\) 方塊以及 \\(\\frac{n(n+1)}{2}\\) 個 \\((+1)\\) 的方塊。 令 \\(H_n\\) 為 \\(n\\) 階的 Hadamard matrix，則其定義為： $$H_n{H_n}&#94;T=nI_n,$$ 其中 \\(I_n\\) 為 \\(n \\times n\\) 的單位矩陣。 Sylvester's construction 假設 \\(H_n\\) 為 \\(n\\) 階的 Hadamard matrix，則可以藉由分區矩陣： $$\\begin{bmatrix} H & H \\\\ H & -H \\end{bmatrix}.$$ 來形成 \\(2n\\) 階的的 Hadamard matrix，這個方法被稱為 Sylvester's construction，對於 \\(2\\leqslant k \\in N\\) ，其通式為： $$H_{2&#94;k}=\\begin{bmatrix} H_{2&#94;{k-1}} & H_{2&#94;{k-1}} \\\\ H_{2&#94;{k-1}} & -H_{2&#94;{k-1}} \\end{bmatrix}=H_2 \\otimes H_{2&#94;{k-1}},$$ 其中 \\(\\otimes\\) 為 Kronecker product。 範例 在 Scipy 的函式庫有用 Sylvester's construction 實作，輸入必須為 \\(2\\) 的次方整數，回傳 \\(n\\) 階的 Hadamard matrix，以下為文件中的範例： import scipy as sp from scipy.linalg import hadamard hadamard ( 4 ) 其輸出為： array ([[ 1 , 1 , 1 , 1 ], [ 1 , - 1 , 1 , - 1 ], [ 1 , 1 , - 1 , - 1 ], [ 1 , - 1 , - 1 , 1 ]]) 若根據定義將其圖形化出： import matplotlib.pyplot as plt H = hadamard ( 4 ) H = - H plt . figure plt . imshow ( H , 'gray' , origin = 'lower' ) plt . show () Jupyter notebook 版本 參考 Hadamard Matrix 維基百科","tags":"Linear Algebra","url":"https://blog.ya-ti.ml/hadamard-matrix.html","loc":"https://blog.ya-ti.ml/hadamard-matrix.html"},{"title":"如何取得免費 SSL 憑證","text":"更新：網站已經改版，變成 ZeroSSL 的系統，使用方式跟以前比起來略有不同。 有鑑於 Google 將會把沒有加密的網站認定為不安全，因此我也把我的網站改為加密連線。 Let's Encrypt 是一個免費提供 SSL 憑證的機構，很多主機商有支援取得此機構的 SSL 認證，但是我的主機商是付費的服務，因此我只好自己動手了。 取得憑證 我的網站是使用 SSL For Free 這個網站，幫我們取得 Let's Encrypt 提供的免費 SSL。這裡簡單介紹如何取的 SSL 憑證： ZeroSSL 提供 三種方法 來認證你是網域持有人： 1. 電子郵件驗證 要透過電子郵件驗證您的網域，先選擇其中一個可用的驗證電子郵件地址，並確保您有權存取關聯的電子郵件收件匣。這個方法最方便，但是只適合持有整個網域的持有人，不適合我這種用免費子網域的人。 2. DNS (CNAME) 驗證 第二種驗證方法是在網域供應商的後台新增一筆 DNS (CNAME) 紀錄。依照網頁上的指示新增一筆 CNAME 紀錄，由於 DNS 可能不會馬上生效，建議把 TTL 調成最短，設定完成後，點一下提供的連結看驗證是否生效了。 3. HTTP 檔案上傳驗證 第三個方法是 HTTP 檔上載驗證，下載提供的 txt 檔案，然後上傳到網站中的指定路徑，上傳成功後打開網址，檢查有沒有內容。 上傳 SSL 憑證 驗證成功後會生成 SSL 認證給你下載，之後到主機上的 cPanel 貼上剛剛取得的金鑰， 如此一來申請的網域就取得 SSL 憑證了。 最後一個重點是，此方法取得的 SSL 憑證效力只有 90 天，過期要重新認證，因此建議註冊帳號，讓認證快過期時發提醒給你。","tags":"架站相關","url":"https://blog.ya-ti.ml/如何取得免費-SSL-憑證.html","loc":"https://blog.ya-ti.ml/如何取得免費-SSL-憑證.html"},{"title":"Modified Uniformly Redundant Array (MURA) Mask","text":"MURA 常被應用於編碼，而 MURA mask 是一種利用 MURA sequence 生成的遮罩，因此首先介紹如何生成一維序列。MURA 序列是二元序列，可為任何的自定義長度 \\(L\\) ，但是 \\(L\\) 必須為一質數，則一維的 MURA 加密序列 \\(A\\) 可以表示為： $$A_i=\\begin{cases} 0 & \\text{ if } i=0 \\\\ 1 & \\text{ if } i \\text{ is a quadratic residue modulo } L \\text{ and } i\\neq 0 \\\\ 0 & \\text{ otherwise } \\end{cases}.$$ 根據 \\(A\\) ，則可以得到解碼序列 \\(G\\) ： $$G_i=\\begin{cases} +1 & \\text{ if } i=0 \\\\ +1 & \\text{ if } A_i=1,i \\neq 0 \\\\ -1 & \\text{ if } A_i=0,i \\neq 0 \\\\ \\end{cases}.$$ 長寬為 \\(p \\times p\\) 的二維 MURA 編碼遮罩可以表示成 \\(\\mathbf{A}= \\{ A_{ij} \\}\\) ，其中： $$A_{i_j}=\\begin{cases} 0 & \\text{ if } i=0 \\\\ 1 & \\text{ if } j=0,i\\neq 0 \\\\ 1 & \\text{ if } C_i C_j=1 \\\\ 0 & \\text{ otherwise } \\end{cases} \\text{ 當中 } C_i=\\begin{cases} +1 & \\text{ if } i \\text{ is a quadratic residue modulo } p \\\\ -1 & \\text{ otherwise } \\end{cases}.$$ 則二維的解碼遮罩 \\(\\mathbf{G}\\) 一樣可以由 \\(\\mathbf{A}\\) 求得： $$G_{ij}=\\begin{cases} +1 & \\text{ if } i=0,j=0 \\\\ +1 & \\text{ if } A_{ij}=1 \\\\ -1 & \\text{ if } A_{ij}=0 \\end{cases}.$$ 上述的 quadratic residue 為二次剩餘，當存在某個 \\(x\\) ，且 \\(x&#94;2 \\equiv q(\\text{mod }n)\\) ，則 \\(q\\) 是 \\(n\\) 的二次剩餘。由於長寬必須要為質數，因此可以用 Euler's criterion 來判斷一個整數是否為某質數的二次剩餘： $$a&#94;{\\frac{p-1}{2}}\\equiv \\begin{cases} +1 (\\text{mod } p) & \\text{ if there is an integer x such that } a \\equiv x&#94;2(\\text{mod }p) \\\\ -1 (\\text{mod } p)& \\text{ if there is no such integer} \\end{cases}.$$ 以下為二維 MURA 編碼遮罩的 MATLAB 範例： function [ t ] = generateMURAs2D ( p ) % Generate MURA mask % Input: MURAs length p % Output: MURA mask t if isprime(p) t = zeros ( p , p ); [ i , j ]= ndgrid ( 1 : p , 1 : p ); residuelist = unique ( mod ( ( 0 :( abs ( p ) / 2 )) .&#94; 2 , p ) ); i_qrm = ismember ( i - 1 , residuelist ); j_qrm = ismember ( j - 1 , residuelist ); ij_AndNor = ~ xor ( i_qrm , j_qrm ); t ( ij_AndNor )= 1 ; t ( 1 ,:)= 0 ; t ( 2 : end , 1 )= 1 ; else fprintf('p is NOT a prime number.\\n') ; t =[]; end end 如果輸入的質數為 59，則結果如下： 而其對應的解碼矩陣的 MATLAB 範例如下： function [ t_hat ] = decodeMURAs2D ( t ) %Generate decode MURAs mask % Input: encoded mask A % output: decoding mask G t_hat = double ( t == 1 ); t_hat = t_hat + double ( t == 0 ) * ( - 1 ); t_hat ( 1 , 1 ) = 1 ; end Reference Optical Imaging and Spectroscopy. By David J. Brady 維基百科","tags":"Computational Imaging","url":"https://blog.ya-ti.ml/modified-uniformly-redundant-array-mura-mask.html","loc":"https://blog.ya-ti.ml/modified-uniformly-redundant-array-mura-mask.html"}]};