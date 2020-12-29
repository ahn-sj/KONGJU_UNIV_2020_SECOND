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
    
class ElectricCar(Car):
    def __init__(self, manufacturer, model, year):
        # 입력받은 자동차 정보로 부모 클래스의 속성을 초기화
        super().__init__(manufacturer, model, year) 
        self.battery_size = 3600        

    def describe_battery(self):
        print("Battery = " + str(self.battery_size))


my_tesla = ElectricCar('Tesla', 'Model S', '2016')
print(my_tesla.get_descriptive_name())
my_tesla.describe_battery()
