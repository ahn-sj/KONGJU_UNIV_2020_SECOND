print("문제1. BMI 측정")

# 체중과 신장은 소수점 아래까지 계산하므로 float 자료형으로 인자값 2개를 받는다
kg = float(input("체중(kg)을 입력하세요."))
meter = float(input("신장(m)을 입력하세요."))


# BMI 계산을 위한 함수 (2개의 매개변수를 받는 BMI_fun() 선언)
def BMI_fun(kg_arg, meter_arg):
# 입력받은 kg과 m를 체질량 지수(BMI)로 계산하기 위한 식
    BMI = round((kg / (meter**2)), 1)

# BMI에 따라 나뉘는 체형
    if(BMI < 18.5): # 문제 1-1
        print("마른체형 입니다.")
    elif(18.5 <= BMI and BMI < 25.0):
        print("표준체형 입니다.")
    elif(25.0 <= BMI and BMI < 30.0):
        print("비만 입니다.")
    elif(BMI >= 30.0):
        print("고도비만 입니다.")

# BMI지수가 25이상이면 비만 또는 고도비만 이므로 if조건식에 다음과 같은 조건 설정
    if(BMI >= 25.0): # 문제 1-2
# BMI가 25보다 작은 순간부터 표준체형이므로 kg에 i(1~100)의 값을 빼주고
# 뺀 값과 연산을 했을 때 25.0보다 작을경우가 되면 break문을 만나 for문을 종료시킨다
        for i in range(1, 100):
            if(float(round(((kg - i) / meter**2), 1) < 25.0)):
                print("{0}kg을 감량해야 표준체형 입니다.".format(i))
                break

# 입력받은 2개의 인자값 (kg, meter)를 함수의 매개변수로 넣어주는 명
BMI_fun(kg, meter)
