import requests
from bs4 import BeautifulSoup
search_meal= input('食材を入力＞＞')
search='https://www.orangepage.net/recipes/search?q='+search_meal
r = requests.get(search) #ページ情報の取得
# print(r.headers) #header情報の表示
print("----------------------------")
html = BeautifulSoup(r.content, 'html.parser')
tit=html.find_all("p",class_="font-medium leading-[1.5] text-title mb-2 line-clamp-2 max-md:line-clamp-3 max-md:text-xs")# text のみを抽出
tit_string =[tit.string for tit in tit]
for t in tit_string:
    if search_meal in t:
        print(t)