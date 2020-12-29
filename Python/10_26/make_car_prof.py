class Car:
    def __init__(self, mnf_arg, model_arg, year_arg):
        self.manufacturer = mnf_arg
        self.model = model_arg
        self.year = year_arg
        self.odometer = 0
 
    def get_descriptive_name(self):
        long_name = str(self.year) + ' ' + self.manufacturer + ' ' + self.model
        return long_name.title()
    
    def read_odometer(self):
        print("This car has "+ str(self.odometer) +" miles on it.")
        
    def update_odometer(self, mileage):
        if mileage >= self.odometer_reading:
            self.odometer = mileage
        else:
            print("You can't roll back an odometer!")

    def increment_odometer(self, miles):
        self.odometer += miles

if(__name__ == '__main__'):
    my_new_car = Car('audi', 'a4', 2016)
    print(my_new_car.get_descriptive_name())
    my_new_car.increment_odometer(23)
    my_new_car.read_odometer()

    my_old_car = Car('Samsung', 'SM7', 2006)
    print(my_old_car.get_descriptive_name())
    my_old_car.increment_odometer(180000)
    my_old_car.read_odometer()
