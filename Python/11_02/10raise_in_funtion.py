def some_function():
    print("1 ~ 10 사이의 수를 입력하세요 > ")
    num = int(input())
    # 1 ~ 10사이의 수가 발생
    if num < 1 or num > 10:
        #함수안에 raise를 발생시킴
        raise Exception("유효하지 않은 숫자입니다. {0}".format(num))
    else:
        print("입력한 수는 {0}입니다.".format(num))

try:
    #예외가 발생되면 except로 넘어와서 exception가 실행
    some_function()
    # 예외가 발생할 경우에 except가 실행되면서 some_function에 raise exception가 실행됨
except Exception as err:
    print("예외가 발생했습니다. {0}".format(err))
#except = 객
