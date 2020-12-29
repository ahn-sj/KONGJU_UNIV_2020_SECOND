from urllib.request import urlopen
import bs4

index_cd = 'KPI200'
page_n = 1

naver_index = 'https://finance.naver.com/sise/sise_index_day.nhn?code=' + index_cd + '&' + str(page_n)
source = urlopen(naver_index).read()

source = bs4.BeautifulSoup(source, 'lxml')

print(source.prettify())
