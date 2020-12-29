class Car: # Define Car class
    # 01 car attribute initialization function
    def __init__(self, mnf_arg, model_arg, year_arg):
        self.manufacturer = mnf_arg
        self.model = model_arg
        self.year = year_arg
        self.odometer = 0
        
     # 02 print car attribute variables function
    def get_descriptive_name(self):
        prt = str(self.year) + ' ' + self.manufacturer +' ' + self.model
        return prt     
     
     # 03 increase odometer function
    def increment_odometer(self, inc_odom_arg):
        self.odometer += inc_odom_arg

    # 04 print odometer function
    def read_odometer(self):
        print("This car has {0} miles on it".format(self.odometer))

    # 05 update and if odometer function
    def update_odometer(upd_odom_arg):
        if upd_odom_arg >= self.odometer:
            self.odometer = upd_odom_arg

if(__name__ == '__main__'):
    my_new_car = Car('audi', 'a4', 2016)
    print(my_new_car.get_descriptive_name())
    my_new_car.increment_odometer(23)
    my_new_car.read_odometer()

    my_old_car = Car('Samsung', 'SM7', 2006)
    print(my_old_car.get_descriptive_name())
    my_old_car.increment_odometer(180000)
    my_old_car.read_odometer()


# 02 print car attribute variables function - 이전코드

# def get_descriptive_name(self)
#     print({0} {1} {2}.format(self.year, self.manufacturer, self.model)

# 1: audi a4 2016
# 2: None
# 3: This car has 23 miles on it
# 4: Samsung SM7 2006
# 5: None
# 6: This car has 180000 miles on it

# ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

# ㅡ 문제점 ㅡ
# __main__인지를 판별하는 if문내에 car의 속성들을 출력하는 함수에서
# 해당 함수를 print로 출력하는데 return값은 기본값이 default라 계속해서
# none을 출력하는 오류가 발생. 그래서 하나의 문자열로 만들어 출력하도록 함
