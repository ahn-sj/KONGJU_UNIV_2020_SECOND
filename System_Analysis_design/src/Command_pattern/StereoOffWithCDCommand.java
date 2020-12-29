package commandpattern;

public class StereoOffWithCDCommand implements Command {
	Stereo stereo;
 
	public StereoOffWithCDCommand(Stereo stereo) {
		this.stereo = stereo;
	}
 
	public void execute() {
		stereo.off();
	}

	@Override
	public void undo() {
		// TODO Auto-generated method stub
		
	}
}