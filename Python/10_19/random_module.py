import random

print("# random 모듈")

#random() : 0.0 ~ 1.0 범위 사이의 값을 float으로 리턴
#uniform(min, max) : min과 max범위 사이의 값을 float으로 리턴

print("- random() : ", random.random())
print("- uniform(10, 20) : ", random.uniform(10, 20))

#randrange() : 지정한 범위의 값을 int로 리턴
# - randrange(max) : 0~max사이의 값을 리턴
# - randrange(min, max) : min~max사이의 값을 리턴

print("- randrange(20, 40) : ", random.randrange(20, 40))

#choice(list) : 리스트 내부에 있는 요소를 랜덤하게 선택합니다.
print("- choice([1,2,3,4,5]) : ", random.choice([1,2,3,4,5]))

#shuffle(list) : 리스트의 요소들을 랜덤하게 섞는다.
print("- shuffle([1,2,3,4,5]) : ", random.shuffle([1,2,3,4,5])) # none
x = [1,2,3,4,5]
random.shuffle(x)
print(x)

#sample(list, k = <숫자>) : 리스트의 요소 중에 k개를 뽑는다.
print("- sample([1,2,3,4,5], k=2) : ", random.sample([1,2,3,4,5], k=2))
