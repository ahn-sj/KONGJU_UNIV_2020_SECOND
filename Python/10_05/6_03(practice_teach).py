destination_pay = {"춘천":5000, "부산":30000, "대구":20000, "수원":10000}
train_pay = {"KTX":10000, "새마을호":5000, "무궁화호":3000}
seat_pay = {"좌석":0, "입석":-2000}

total_pay = 0

def destination (key):
    global total_pay
    total_pay += destination_pay[key]

def train (key):
    global total_pay
    total_pay += train_pay[key]

def seat(key):
    global total_pay
    total_pay += seat_pay[key]

des = input("춘천(운임 : 5000원) 부산(운임:30000원) 대구(운임(20000원) 수원(운임 10000) 중 목적지를 한 곳 입력하세요 : ")
destionation(des)

tra = input("KTX(10000원 추가) / 새마을호(5000원 추가) / 무궁화호(3000원 추가) 중 하나를 입력하세요 : ")
train(tra)

set = input("좌석 / 입석(2000원 할인)중 하나를 입력하세요 : ")
seat(set)

print("지불하실 운임은 {0} 원 입니다.".format(total))
