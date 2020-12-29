def destination(arg_des):
    str_des = input("춘천(운임 : 5000원) 부산(운임:30000원) 대구(운임(20000원) 수원(운임 10000) 중 목적지를 한 곳 입력하세요 : ")

    if(str_des == '춘천'):
        int_des = 5000
    elif(str_des == '부산'):
        int_des = 30000
    elif(str_des == '대구'):
        int_des = 20000
    elif(str_des == '수원'):
        int_des = 10000
    return int_des


def train(arg_train):
    str_train = input("KTX(10000원 추가) / 새마을호(5000원 추가) / 무궁화호(3000원 추가) 중 하나를 입력하세요 : ")

    if(str_train == 'KTX'):
        int_train = 10000
    elif(str_train == '새마을호'):
        int_train = 5000
    elif(str_train == '무궁화호'):
        int_train = 3000
    return int_train


def seat(arg_seat):
    str_seat = input("좌석 / 입석(2000원 할인)중 하나를 입력하세요 : ")

    if(str_seat == '좌석'):
        return 0
    elif(str_seat == '입석'):
        int_seat = -2000
    return int_seat

total = int_des + int_train + int_seat

print("지불하실 운임은 {0}".format(total))
    
