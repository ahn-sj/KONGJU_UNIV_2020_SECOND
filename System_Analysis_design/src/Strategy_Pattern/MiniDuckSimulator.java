package pattern;

abstract class Duck {
	FlyBehavior flyBehavior; // �ൿ �������̽� ������ ���۷��� ���� 2�� ����
	QuackBehavior quackBehavior; // ��� ����Ŭ�������� �� ������ ��ӹ���

	public Duck() {
	}

	public abstract void display();

	public void performQuack() {
		quackBehavior.quack(); // �ൿ Ŭ������ ����
	}

	public void performFly() {
		flyBehavior.fly(); // �ൿ Ŭ������ ����
	}

	public void swim() {
		System.out.println("��� ������ ���� ���. ��¥ ������...");
	}
	
	
	public void setFlyBehavior(FlyBehavior fb) {
		flyBehavior = fb;
	}
	public void setQuackBehavior(QuackBehavior qb) {
		quackBehavior = qb;
	}
	
}

// ��� ���� �ൿ�� ���� Ŭ�������� ����
interface FlyBehavior {
	public void fly();
}

class FlyWithWings implements FlyBehavior {
	public void fly() {
		System.out.println("����.");
	}
}

class FlyNoWay implements FlyBehavior {
	public void fly() {
		System.out.println("�� ����.");
	}
}

// ��� �� �ൿ�� ���� Ŭ�������� ����
interface QuackBehavior {
	public void quack();
}

class Quack implements QuackBehavior {
	public void quack() {
		System.out.println("���.");
	}
}

class Squack implements QuackBehavior {
	public void quack() {
		System.out.println("���.");
	}
}

class MuteQuack implements QuackBehavior {
	public void quack() {
		System.out.println("�Ҹ� �� ��.");
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
		System.out.println("�ѤѤѤѤѤѤѤѤѤѤѤѤѤѤѤѤ�");
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
		System.out.println("û�տ��� �Դϴ�.");
	}
}

// RubberDuck
class RubberDuck extends Duck {
	public RubberDuck() {
		flyBehavior = new FlyNoWay();
		quackBehavior = new Squack();
	}

	public void display() {
		System.out.println("���� ���� ���� �Դϴ�.");
	}
}

/*
���.
����.
û�տ��� �Դϴ�.
��� ������ ���� ���. ��¥ ������...
�ѤѤѤѤѤѤѤѤ�
���.
�� ����.
���� ���� ���� �Դϴ�.
��� ������ ���� ���. ��¥ ������...
*/