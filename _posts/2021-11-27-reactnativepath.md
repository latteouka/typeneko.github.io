---
layout: post
title: React Native 學習流程紀錄
date: 2021-11-27
---
## Udemy Course 
先找了兩個最大的課程，但發現他們都是用expo，之前爬文就覺得一開始還是直接碰native cli比較好，所以就放棄退回點數，後來買了Fadi Nouh的React Native: Learn By Doing [2021]（感謝黑色星期五課程都兩百多而已），課程短短的，看到中間大概了解就不想繼續看了，因為會發現有點像只是在拼CSS的感覺，但有大概瀏覽一下有哪些東西可以運用（課程內都用react native內建的components）。  
總之大概要先學會環境、Navigation基本、就有辦法用react做出一個很純粹的App了。
## Youtube
到處看影片想要多找到一些學習方向的關鍵字，然後發現有NativeBase（給我類似chakra-ui的感覺，覺得神便利）、Reanimated、Moti等等可以用，都需要實作再去學。不知道有沒有需要特別運用Redux，這部分有想要繼續了解。
## Database
這個真的很難爬文，比較了一下，目前我要做的比較偏offline端，所以選Realm（好像被mongodb買了，所以雲端同步也有方案，等以後實做看看）。如果要做比較即時的服務，應該會選Firebase。  
之前用couchdb做的經驗，覺得自己架太麻煩了，現在backend就算要花錢，也想要能越簡單越好。  
關於更新會不會動到local資料，爬文都說不會，等實做測試，應該會需要對db version跟migration有更多了解。

