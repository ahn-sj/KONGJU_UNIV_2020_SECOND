package pattern;

import java.util.ArrayList;

interface Subject{
	public void registerObserver(Observer o);		// observer�� ���ڷ� �޴´�
	public void removeObserver(Observer o);		// observer�� ���ڷ� �޴´�
	public void notifyObserver();	// ������ü�� ���°� ���� �Ǿ��� �� ������ ��ü�鿡�� �˸��� ���� ȣ��Ǵ� �޼ҵ�
}

interface Observer{ // ��� ������ ���� �Ǿ��� �� ������ ��ü�鿡�� ���޵Ǵ� ���� ����
	public void update(float temp, float humidity, float pressure);
}

interface DisplayElement{ // display�׸��� ȭ�鿡 ǥ���ؾ� �ϴ� ��쿡 �� �޼ҵ带 ȣ��
	public void display();
}

class WeatherData implements Subject {
	private ArrayList<Observer> observers = new ArrayList<>();
	private float temperature;
	private float humidity;
	private float pressure;
	
	public void registerObserver(Observer o) {
		observers.add(o);
	}
	
	public void removeObserver(Observer o) {
		int i = observers.indexOf(o);
		if(i >= 0) {
			observers.remove(i);
		}
	}
	
	public void notifyObserver() {
		for(int i = 0; i<observers.size(); i++) {
			Observer observer = (Observer)observers.get(i);
			observer.update(temperature, humidity, pressure);
		}
	}
	
	public void measurementsChanged() {
		notifyObserver();
	}
	
	public void setMeasurements(float temperature, float humidity, float pressure) {
		this.temperature = temperature;
		this.humidity = humidity;
		this.pressure = pressure;
		measurementsChanged();
	}
} 

class CurrentConditionsDisplay implements Observer, DisplayElement {
	private float temperature;
	private float humidity;
	private Subject weatherData;
	
	public CurrentConditionsDisplay(Subject weatherData) {
		this.weatherData = weatherData;
		weatherData.registerObserver(this);
	}
	
	public void update(float temperature, float humidity, float pressure) {
		this.temperature = temperature;
		this.humidity = humidity;
		display();
	}
	
	public void display() {
		System.out.println("Current Conditions: " + temperature 
				+ "F degrees and " + humidity + "% humidity");
	}
}

public class WeatherStation {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
	WeatherData weatherData = new WeatherData();
	
	CurrentConditionsDisplay currentDisplay = new CurrentConditionsDisplay(weatherData);
	weatherData.setMeasurements(80, 65, 30.4f);
	}

}
