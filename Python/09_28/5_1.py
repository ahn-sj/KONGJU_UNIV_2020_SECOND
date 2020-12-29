list_ex1 = ["risk", "issue", "test", "maintenance", "maturity"]
list_ex2 = ["security", "plan", "design", "systematic", "safety"]
list_ex3 = ["mainnance", "verification", "validation"]

if(len(list_ex1) >= 5 and (list_ex1.count("maintenance")) > 0):
    print("list_ex1 will be tested")

if(len(list_ex2) >= 5 and (list_ex2.count("maintenance")) > 0):
    print("list_ex2 will be tested")

if(len(list_ex3) >= 5 and (list_ex3.count("maintenance")) > 0):
    print("list_ex3 will be tested")
