package commandpattern;

public interface Command {
	public void execute();
	public void undo(); // 새로 undo 메소드 추가
}
