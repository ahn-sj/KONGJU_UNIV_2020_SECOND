class HasPrivate:
    def __init__(self):
        self.public = "public."
        self.__private = "private."

    def print_from_internal(self):
        print(self.public)
        print(self.__private)
