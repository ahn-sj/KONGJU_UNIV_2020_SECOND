package pattern;

abstract class Duck {
	FlyBehavior flyBehavior; // 행동 인터페이스 형식의 레퍼런스 변수 2개 선언
	QuackBehavior quackBehavior; // 모든 서브클래스에서 이 변수를 상속받음

	public Duck() {
	}

	public abstract void display();

	public void performQuack() {
		quackBehavior.quack(); // 행동 클래스에 위임
	}

	public void performFly() {
		flyBehavior.fly(); // 행동 클래스에 위임
	}

	public void swim() {
		System.out.println("모든 오리는 물에 뜬다. 가짜 오리도...");
	}
	
	
	public void setFlyBehavior(FlyBehavior fb) {
		flyBehavior = fb;
	}
	public void setQuackBehavior(QuackBehavior qb) {
		quackBehavior = qb;
	}
	
}

// 모든 나는 행동에 대한 클래스에서 구현
interface FlyBehavior {
	public void fly();
}

class FlyWithWings implements FlyBehavior {
	public void fly() {
		System.out.println("난다.");
	}
}

class FlyNoWay implements FlyBehavior {
	public void fly() {
		System.out.println("못 난다.");
	}
}

// 모든 꽥 행동에 대한 클래스에서 구현
interface QuackBehavior {
	public void quack();
}

class Quack implements QuackBehavior {
	public void quack() {
		System.out.println("꿱꿱.");
	}
}

class Squack implements QuackBehavior {
	public void quack() {
		System.out.println("삑삑.");
	}
}

class MuteQuack implements QuackBehavior {
	public void quack() {
		System.out.println("소리 못 냄.");
	}
}

public class MiniDuckSimulator {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Duck mallard = new MallardDuck();
		Duck rubber = new RubberDuck();

		mallard.performQuack();
		mallard.performFly();
		mallard.display();
		mallard.swim();
		System.out.println("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
		rubber.performQuack();
		rubber.performFly();
		rubber.display();
		rubber.swim();
	}

}

// MallardDuck
class MallardDuck extends Duck {
	public MallardDuck() {
		flyBehavior = new FlyWithWings();
		quackBehavior = new Quack();
	}

	public void display() {
		System.out.println("청둥오리 입니다.");
	}
}

// RubberDuck
class RubberDuck extends Duck {
	public RubberDuck() {
		flyBehavior = new FlyNoWay();
		quackBehavior = new Squack();
	}

	public void display() {
		System.out.println("고무로 만든 오리 입니다.");
	}
}

/*
꿱꿱.
난다.
청둥오리 입니다.
모든 오리는 물에 뜬다. 가짜 오리도...
ㅡㅡㅡㅡㅡㅡㅡㅡㅡ
삑삑.
못 난다.
고무로 만든 오리 입니다.
모든 오리는 물에 뜬다. 가짜 오리도...
*/