print("문제3. 주식의 종가")

closing_price = [298500, 296500, 298500, 305000, 302000]

cp_max = max(closing_price)
cp_min = min(closing_price)

print("종가가 가장 높았던 가격은 {0}원이고, 가장 낮았던 가격은 {1}원이다.\n".format(cp_max, cp_min))

def max_price(price_list):
    return max(price_list)

def min_price(price_list):
    return min(price_list)

ma_p = max_price(closing_price)
mi_p = min_price(closing_price)

print("종가가 가장 높았던 가격은 {0}원이고, 가장 낮았던 가격은 {1}원이다.\n".format(ma_p, mi_p))

dic = {"2020.09.28":closing_price[0], "2020.09.29":closing_price[1], "2020.10.05":closing_price[2],
       "2020.10.06":closing_price[3], "2020.10.07":closing_price[4]}
print(dic)

print()

print(dic['2020.10.05'])
